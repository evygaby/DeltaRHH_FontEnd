import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { ProcesosService } from 'src/app/core/services/Procesos.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import { number } from 'echarts';

@Component({
  selector: 'app-CargasFamiliares',
  templateUrl: './CargasFamiliares.component.html',
  styleUrls: ['./CargasFamiliares.component.css']
})
export class CargasFamiliaresComponent implements OnInit {
 user!: User;
  Datos: any;
  anio:number=0;
  constructor(private servicios: ProcesosService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {
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
}
