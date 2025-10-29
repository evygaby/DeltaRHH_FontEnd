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
    return new Date(Y, (M - 1), D, h ?? 0, m ?? 0, s ?? 0, 0);
  }

  // Mantiene la fecha y cambia solo la hora
  private mergeTimeKeepDate(datePart: Date, timePart: Date): Date {
    const out = new Date(datePart);
    out.setHours(timePart.getHours(), timePart.getMinutes(), timePart.getSeconds() || 0, 0);
    return out;
  }

  // Devuelve "YYYY-MM-DDTHH:mm:ss" local (sin 'Z')
  private toIsoLocal(date: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    const Y = date.getFullYear();
    const M = pad(date.getMonth() + 1);
    const D = pad(date.getDate());
    const h = pad(date.getHours());
    const m = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    return `${Y}-${M}-${D}T${h}:${m}:${s}`;
  }

  /** ========= ENTRADA ========= */
  // Lo que el grid muestra/usa internamente (Date) a partir del string ISO
  calcHoraEntrada = (row: any): Date | null => this.parseIsoLocal(row?.HOR_ENTRADA);

  // Cómo guardar el cambio (value es un Date del dxDateBox "time")
  setHoraEntrada = (newData: any, value: Date | null, currentRowData: any) => {
    if (!value) { newData.HOR_ENTRADA = null; return; }
    const base = this.parseIsoLocal(currentRowData?.HOR_ENTRADA) ?? new Date();
    const merged = this.mergeTimeKeepDate(base, value);
    newData.HOR_ENTRADA = this.toIsoLocal(merged);
  };

  /** ========= SALIDA ========= */
  calcHoraSalida = (row: any): Date | null => this.parseIsoLocal(row?.HOR_SALIDA);

  setHoraSalida = (newData: any, value: Date | null, currentRowData: any) => {
    if (!value) { newData.HOR_SALIDA = null; return; }
    const base = this.parseIsoLocal(currentRowData?.HOR_SALIDA) ?? new Date();
    const merged = this.mergeTimeKeepDate(base, value);
    newData.HOR_SALIDA = this.toIsoLocal(merged);
  };
  onSaving(e: any) {
    this.loading.showSpinner2("Actualizando Datos")
    e.cancel = true; // cancel default save (lo manejamos manualmente)
    // const cambios = e.changes;
    const cambios = e.changes.map((c: any) => {
      return {
        key: c.key?.CODEMP ?? null,
        data: {
          CODEMP: c.data?.CODEMP ?? c.key?.CODEMP,   // si existe CODEMP en data úsalo, sino la key
          RAZONSOCIAL: c.key?.RAZONSOCIAL,
          HOR_DIA: c.key?.HOR_DIA,
          HOR_ENTRADA: c.data?.HOR_ENTRADA ?? c.key.HOR_ENTRADA,
          HOR_SALIDA: c.data?.HOR_SALIDA ?? c.key?.HOR_SALIDA,
          HOR_REFERENCIA: c.data?.HOR_REFERENCIA ?? c.key?.HOR_REFERENCIA
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
