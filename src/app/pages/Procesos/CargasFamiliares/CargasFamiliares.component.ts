import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { ProcesosService } from 'src/app/core/services/Procesos.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import { number } from 'echarts';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-CargasFamiliares',
  templateUrl: './CargasFamiliares.component.html',
  styleUrls: ['./CargasFamiliares.component.css']
})
export class CargasFamiliaresComponent implements OnInit {
  user!: User;
  Datos: any;
  anio: number = 0;
  constructor(private http: HttpClient, private config: ConfiguracionService, private servicios: ProcesosService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
  }
  ngOnInit() {
    this.CargarDatos();
  }
  CargarDatos() {
    //  const fech = this.user.fecha_proceso!;
    //this.anio=fech.getFullYear();
    this.servicios
      .CargasFamiliaresSelect(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!,
        2025
      )
      .subscribe({
        next: (data: any) => {
          this.Datos = data;
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  onSaving(e: any) {
    this.loading.showSpinner2("Ingresando Valores")
    e.cancel = true; // cancel default save (lo manejamos manualmente)
    // const cambios = e.changes;
    const cambios = e.changes.map((c: any) => {
      return {
        key: c.key?.CODEMP ?? null,
        data: {
          CODEMP: c.data?.CODEMP ?? c.key?.CODEMP,   // si existe CODEMP en data úsalo, sino la key
          RAZONSOCIAL: c.key?.RAZONSOCIAL,
          GASTOS: 0,
          ANIO: c.data?.ANIO ?? c.key.ANIO,
          USR_ING: this.user.Nombre,
          FEC_ING: new Date,
          ESTADO: 'A',
          GASTO_VIVIENDA: c.data?.GASTO_VIVIENDA ?? c.key?.GASTO_VIVIENDA,
          GASTO_SALUD: c.data?.GASTO_SALUD ?? c.key?.GASTO_SALUD,
          GASTO_EDUC: c.data?.GASTO_EDUC ?? c.key?.GASTO_EDUC,
          GASTO_ALIMENTA: c.data?.GASTO_ALIMENTA ?? c.key?.GASTO_ALIMENTA,
          GASTO_VESTIMENTA: c.data?.GASTO_VESTIMENTA ?? c.key?.GASTO_VESTIMENTA,
          ID_EMPRESA: this.user.ID_EMPRESA,
          GASTO_TURISMO: c.data?.GASTO_TURISMO ?? c.key?.GASTO_TURISMO,
          CARGAS_FAMILIARES: c.data?.CARGAS_FAMILIARES ?? c.key?.CARGAS_FAMILIARES
        }
      };
    });
    const url = this.config.apiUrl + "CargasFamiliares/Batch/batch?usu=" + this.user.Nombre + "&pass=" + this.user.password;
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
