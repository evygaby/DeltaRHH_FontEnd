import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import * as FileSaver from 'file-saver';
import * as ExcelJS from 'exceljs';
import { NubeDetalleFactura } from 'src/app/core/models/factura';
const now = new Date();
const iDesde = new Date(now.getFullYear(), 0, 1); // Enero es 0
const iHasta = new Date(now.getFullYear(), now.getMonth() + 1, 0);
// día 0 del siguiente mes → último día del mes actual
const initialValue: [Date, Date] = [iDesde, iHasta];
@Component({
  selector: 'app-PrestamoSaldos',
  templateUrl: './PrestamoSaldos.component.html',
  styleUrls: ['./PrestamoSaldos.component.css']
})
export class PrestamoSaldosComponent implements OnInit {
  user!: User;
  Datos: any;
  DatosR: any;
  Saldo: any;
  SaldoSelect:any;
  currentValue: [Date, Date] = initialValue;
  fechaDesde: Date | null = null;//new Date(new Date().getFullYear(), 0, 1);
  fechaHasta: Date | null = null;//new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {

    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.SaldoSelect=0;
    this.loading.showSpinner2("Consultando")
this.Saldo = [
      { VALOR: -1, TEXTO: 'Ver todos los préstamos por fecha' },
      { VALOR: 0, TEXTO: 'Préstamos con saldo' },
      { VALOR: 500, TEXTO: 'Préstamos con saldo > 500' },
      { VALOR: 1000, TEXTO: 'Préstamos con saldo > 1000' }
    ];
    
  }
  ngOnInit() {
    this.CargarDatos();
  }
  currentValueChanged(e: any) {
    const [startDate, endDate] = e.value;
    this.fechaDesde = startDate;
    this.fechaHasta = endDate;
    this.CargarDatos();
  }

onSaldoChange(e: any) {
  this.SaldoSelect=e.value;
  if (this.SaldoSelect == -1){
    this.fechaDesde=new Date(new Date().getFullYear(), 0, 1);
  this.fechaHasta=new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  }
  else
  {
    this.fechaDesde=null;
    this.fechaHasta=null;
  }
 this.CargarDatos();
}

  CargarDatos() {
    this.servicios
      .Prestamos(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!,
        this.SaldoSelect,
        this.fechaDesde!,
        this.fechaHasta!
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
  Descarga() {
    try {
      this.loading.showSpinner2("Descargando")

      this.servicios.ImprimePrestamos(
        this.user.Nombre ?? '',
        this.user.password ?? '',
        this.user.ID_EMPRESA ?? 0,
        this.SaldoSelect ?? -1,
        this.fechaDesde ?? undefined,
        this.fechaHasta ?? undefined
      )
       .subscribe(
        (blob: Blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `DetallePrestamos_${new Date().toISOString().slice(0, 10)}.pdf`;
          a.click();
          window.URL.revokeObjectURL(url);
          this.loading.closeSpinner();
        }, error => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        });

    } catch (error: any) {
      this.loading.closeSpinner();
      this.loading.showMensajeError(error.message);
    }
  }
}
