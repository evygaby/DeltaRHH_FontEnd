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

  //------------------------PARA EL CONTROL

  onHoraEntradaChanged(e: any, cellInfo: any): void {
    const original = this.toDate(cellInfo.value);   // datetime actual
    const time = this.toDate(e.value);          // hora elegida en el editor

    const merged = this.mergeTimeKeepDate(original, time);
    cellInfo.setValue(merged);                      // actualiza la celda
  }
  onHoraSalidaChanged(e: any, cellInfo: any): void {
    const original = this.toDate(cellInfo.data.HOR_SALIDA || cellInfo.value || new Date());
    const time = this.toDate(e.value);

    const merged = this.mergeTimeKeepDate(original, time);
    cellInfo.setValue(merged); // actualiza HOR_SALIDA en la fila
  }
  // --- VALIDACIONES ---
  validateHoraSalida = (e: any): boolean => {
    const row = e.data || {};
    const entradaRaw = row.HOR_ENTRADA;
    const salidaRaw = e.value ?? row.HOR_SALIDA;

    // Si falta alguno, dejamos que actúen las reglas "required"
    if (!entradaRaw || !salidaRaw) {
      return true;
    }

    const entrada = this.toDate(entradaRaw);
    const salida = this.toDate(salidaRaw);

    return salida.getTime() > entrada.getTime();
  }

  /** Convierte lo que venga (string | number | Date | null) a Date */
  private toDate(value: any): Date {
    if (!value) {
      return new Date(); // o alguna fecha por defecto que uses
    }

    if (value instanceof Date) {
      return value;
    }

    return new Date(value);
  }

  /** Mantiene la fecha de originalDate y cambia solo la hora por la de newTime */
  private mergeTimeKeepDate(originalDate: Date, newTime: Date): Date {
    const result = new Date(originalDate);
    result.setHours(newTime.getHours(), newTime.getMinutes(), 0, 0);
    return result;
  }

  ///-------------






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
    this.loading.showSpinner2("Actualizando Datos");

    // Cancelamos el guardado por defecto, lo manejamos manualmente
    e.cancel = true;

    const cambios = e.changes.map((c: any) => {

      const hasField = (obj: any, field: string) =>
        obj && Object.prototype.hasOwnProperty.call(obj, field);

      const normalizeTime = (field: string, value: any) => {
        // Normalizas solo las horas si vienen como string
        if ((field === 'HOR_ENTRADA' || field === 'HOR_SALIDA') && typeof value === 'string') {
          const parsed = this.parseHourValue(value);
          if (parsed) {
            return this.toHourString(parsed);
          }
        }
        return value;
      };

      // 🔎 Buscamos el registro original en el datasource por la clave
      const originalFromDs = this.Datos.find((row: any) =>
        row.CODEMP === (c.key?.CODEMP ?? c.data?.CODEMP ?? c.oldData?.CODEMP) &&
        row.HOR_DIA === (c.key?.HOR_DIA ?? c.data?.HOR_DIA ?? c.oldData?.HOR_DIA)
      ) || {};

      const getValue = (field: string) => {
        let candidate: any;

        // 1) Si viene en data (modificado en esta edición), usar ese
        if (hasField(c.data, field)) {
          candidate = c.data[field];

          // 2) Si no viene en data pero sí en oldData (valor previo que DevExtreme mantiene)
        } else if (hasField(c.oldData, field)) {
          candidate = c.oldData[field];

          // 3) Si tampoco está en oldData, usamos el valor original del datasource
        } else if (hasField(originalFromDs, field)) {
          candidate = originalFromDs[field];

          // 4) Último recurso: la key (para campos clave como CODEMP, HOR_DIA)
        } else if (hasField(c.key, field)) {
          candidate = c.key[field];
        }

        return normalizeTime(field, candidate);
      };

      return {
        key: c.key?.CODEMP ?? null,
        data: {
          CODEMP: getValue('CODEMP'),
          RAZONSOCIAL: getValue('RAZONSOCIAL'),
          HOR_DIA: getValue('HOR_DIA'),
          HOR_ENTRADA: getValue('HOR_ENTRADA'),
          HOR_SALIDA: getValue('HOR_SALIDA'),
          HOR_REFERENCIA: getValue('HOR_REFERENCIA')
        }
      };
    });

    const url = this.config.apiUrl
      + "HorariosSGE/Batch/batch?usu=" + this.user.Nombre
      + "&pass=" + this.user.password
      + "&id_empresa=" + this.user.ID_EMPRESA;

    if (cambios.length) {
      this.http.post(url, cambios).subscribe({
        next: () => {
          this.CargarDatos();
          this.loading.closeSpinner();
          // 🔄 Refrescar visualmente la grilla
          e.component.cancelEditData();
          e.component.refresh();

          this.loading.showMensajesuccess("Datos actualizados correctamente");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
    } else {
      this.loading.closeSpinner();
    }
  }
}
