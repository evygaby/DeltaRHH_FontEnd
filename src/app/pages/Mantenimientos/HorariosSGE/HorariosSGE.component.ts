import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import { User } from 'src/app/core/models/auth.models';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
@Component({
  selector: 'app-HorariosSGE',
  templateUrl: './HorariosSGE.component.html',
  styleUrls: ['./HorariosSGE.component.css']
})
export class HorariosSGEComponent implements OnInit {
  user!: User;
  Datos: any;
  dayOptions: any;

  constructor(private http: HttpClient, private config: ConfiguracionService, private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando");
    this.dayOptions = [
      { value: 1, text: 'Lunes' },
      { value: 2, text: 'Martes' },
      { value: 3, text: 'Miércoles' },
      { value: 4, text: 'Jueves' },
      { value: 5, text: 'Viernes' },
      { value: 6, text: 'Sábado' },
      { value: 7, text: 'Domingo' }
    ];
  }

  ngOnInit() {
    this.CargarDatos();

  }
  CargarDatos() {
    this.servicios
      .HorariosSGE(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!
      )
      .subscribe({
        next: (data: any) => {
          this.Datos = data;
          this.loading.closeSpinner();
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  // Convierte "YYYY-MM-DDTHH:mm:ss" (sin zona) a Date local
  private parseIsoLocal(iso?: string | null): Date | null {
    if (!iso) return null;
    const [d, t] = iso.split('T');
    if (!d || !t) return null;
    const [Y, M, D] = d.split('-').map(Number);
    const [h, m, s] = t.split(':').map(Number);
    if ([Y, M, D, h, m].some((n) => Number.isNaN(n))) {
      return null;
    }
    return new Date(Y, (M - 1), D, h ?? 0, m ?? 0, s ?? 0, 0);
  }

  // Convierte cadenas "HH:mm" o ISO a un Date que solo preserva la hora
  private parseHourValue(value?: string | null): Date | null {
    if (!value) return null;

    let hours: number | null = null;
    let minutes: number | null = null;
    let seconds: number | null = null;

    if (value.includes('T')) {
      const parsed = this.parseIsoLocal(value);
      if (!parsed) {
        return null;
      }
      hours = parsed.getHours();
      minutes = parsed.getMinutes();
      seconds = parsed.getSeconds();
    } else {
      const [h, m = '0', s = '0'] = value.split(':');
      hours = Number(h);
      minutes = Number(m);
      seconds = Number(s);
      if ([hours, minutes, seconds].some((n) => Number.isNaN(n))) {
        return null;
      }
    }

    const date = new Date();
    date.setHours(hours ?? 0, minutes ?? 0, seconds ?? 0, 0);
    return date;
  }

  // Devuelve una cadena HH:mm a partir de un Date
  private toHourString(date: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  /** ========= ENTRADA ========= */
  // Lo que el grid muestra/usa internamente (Date) a partir del valor almacenado
  calcHoraEntrada = (row: any): Date | null => this.parseHourValue(row?.HOR_ENTRADA);

  // Cómo guardar el cambio (value es un Date del dxDateBox "time")
  setHoraEntrada = (newData: any, value: Date | null) => {
    if (!value) { newData.HOR_ENTRADA = null; return; }
    newData.HOR_ENTRADA = this.toHourString(value);
  };

  /** ========= SALIDA ========= */
  calcHoraSalida = (row: any): Date | null => this.parseHourValue(row?.HOR_SALIDA);

  setHoraSalida = (newData: any, value: Date | null) => {
    if (!value) { newData.HOR_SALIDA = null; return; }
    newData.HOR_SALIDA = this.toHourString(value);
  };
  onSaving(e: any) {
    this.loading.showSpinner2("Actualizando Datos")
    e.cancel = true; // cancel default save (lo manejamos manualmente)
    // const cambios = e.changes;
    const cambios = e.changes.map((c: any) => {
      const hasField = (obj: any, field: string) => obj && Object.prototype.hasOwnProperty.call(obj, field);
      const normalizeTime = (field: string, value: any) => {
        if ((field === 'HOR_ENTRADA' || field === 'HOR_SALIDA') && typeof value === 'string') {
          const parsed = this.parseHourValue(value);
          if (parsed) {
            return this.toHourString(parsed);
          }
        }
        return value;
      };
      const getValue = (field: string) => {
        let candidate: any;
        if (hasField(c.data, field)) {
          candidate = c.data[field];
        }
        if (!hasField(c.data, field) && hasField(c.oldData, field)) {
          candidate = c.oldData[field];
        }
        if (!hasField(c.data, field) && !hasField(c.oldData, field)) {
          candidate = c.key?.[field];
        }
        return normalizeTime(field, candidate);
      };
      return {
        key: c.key?.CODEMP ?? null,
        data: {
          CODEMP: getValue('CODEMP'),   // si existe CODEMP en data úsalo, sino la key
          RAZONSOCIAL: getValue('RAZONSOCIAL'),
          HOR_DIA: getValue('HOR_DIA'),
          HOR_ENTRADA: getValue('HOR_ENTRADA'),
          HOR_SALIDA: getValue('HOR_SALIDA'),
          HOR_REFERENCIA: getValue('HOR_REFERENCIA')
        }
      };
    });
    const url = this.config.apiUrl + "HorariosSGE/Batch/batch?usu=" + this.user.Nombre + "&pass=" + this.user.password + "&id_empresa="+ this.user.ID_EMPRESA;
    if (cambios.length) {
      this.http.post(url, cambios).subscribe({
        next: () => { this.CargarDatos(); this.loading.closeSpinner(); },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
    }
  }
}
