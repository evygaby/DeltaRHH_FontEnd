import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
const msInDay = 1000 * 60 * 60 * 24;
const now = new Date();
const initialValue: [Date, Date] = [
  new Date(now.getTime() - msInDay * 3),
  new Date(now.getTime() + msInDay * 3),
];
@Component({
  selector: 'app-ConsultaActasReunion',
  templateUrl: './ConsultaActasReunion.component.html',
  styleUrls: ['./ConsultaActasReunion.component.css']
})

export class ConsultaActasReunionComponent implements OnInit {
  PeriodoLectivo: any;
  PeriodoSelect: string = '';
  filtro: string = '';
  currentValue: [Date, Date] = initialValue;
  fechaDesde: Date | undefined;
  fechaHasta: Date | undefined;
  user!: User;
  Datos: any;

  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {

    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
  }
  ngOnInit() {
    this.CargarPeriodo();
  }
  CargarPeriodo() {
    this.servicios
      .ListaPeriodosLectivos(
        this.user.Nombre!,
        this.user.password!
      )
      .subscribe({
        next: (data: any) => {
          this.PeriodoLectivo = data;
          this.PeriodoSelect = this.PeriodoLectivo[0].PER_PERIODO;
          this.loading.closeSpinner();
          this.CargarDatos();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  CargarDatos() {
    this.servicios
      .ConsultaActas(
        this.user.Nombre!,
        this.user.password!, 
        this.PeriodoSelect, 
        this.user.Codigo!, 
        this.fechaDesde, 
        this.fechaHasta, 
        this.filtro
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
  selectPeriodo({ value }: { value?: string }) {
    if (value !== undefined) {
      this.PeriodoSelect = value;
      this.CargarDatos();
    }
  }
  onNombreChanged(e: any) {
  this.filtro=e.value;
  this.CargarDatos();
}
  currentValueChanged(e: any) {
    const [startDate, endDate] = e.value;
    this.fechaDesde = startDate;
    this.fechaHasta = endDate;
    this.CargarDatos();
  }
}
