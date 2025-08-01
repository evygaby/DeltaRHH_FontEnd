import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-NumeroAlumnas',
  templateUrl: './NumeroAlumnas.component.html',
  styleUrls: ['./NumeroAlumnas.component.css']
})
export class NumeroAlumnasComponent implements OnInit {
  PeriodoLectivo: any;
  Secciones: any;
  Vista: any;
  seleccionadas: any;
  valorSeleccionado: string="R";
  PeriodoSelect: string = '';
  user!: User;
  Datos: any;
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
    this.Vista = [
      { VALOR: 'R', TEXTO: 'Ver Resumen' },
      { VALOR: 'D', TEXTO: 'Ver Detalle' }
    ];
    this.valorSeleccionado = "R";
  }

  ngOnInit() {
     this.cargaInicial();
     this.valorSeleccionado = "R";
     this.CargaGrid();
  }
  cargaInicial(){
    forkJoin({
    periodos: this.servicios.ListaPeriodosLectivos(
      this.user.Nombre!,
      this.user.password!
    ),
    secciones: this.servicios.SeccionesAcademicas(
      this.user.Nombre!,
      this.user.password!,
      this.user.ID_EMPRESA!,
      "5/5"// este lo llenamos luego con el periodo recibido
    )
  }).subscribe({
    next: ({ periodos, secciones }) => {
      // Asignar periodos
      this.PeriodoLectivo = periodos;
      this.PeriodoSelect = this.PeriodoLectivo[0].PER_PERIODO;

      // Volver a cargar secciones ahora con periodo correcto
      this.servicios.SeccionesAcademicas(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!,
        this.PeriodoSelect!
      ).subscribe({
        next: (seccionesData: any) => {
          this.Secciones = seccionesData;
          this.seleccionadas = [...this.Secciones];
          this.loading.closeSpinner();
        },
        error: (error:any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        }
      });
    },
    error: (error:any) => {
      this.loading.closeSpinner();
      this.loading.showMensajeError(error.message);
    }
  });
  }

  CargarSeccionesAcademicas() {
    this.servicios
      .SeccionesAcademicas(
        this.user.Nombre!,
        this.user.password!, this.user.ID_EMPRESA!, this.PeriodoSelect!
      )
      .subscribe({
        next: (data: any) => {
          this.Secciones = data;
          this.seleccionadas = [...this.Secciones];
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  CargaGrid() {
    this.servicios
      .NumeroAlumnos(
        this.user.Nombre!,
        this.user.password!, 
        this.PeriodoSelect!, 
        this.seleccionadas!,
        "",
        this.valorSeleccionado
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
