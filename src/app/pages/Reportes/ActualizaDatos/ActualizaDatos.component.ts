import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-ActualizaDatos',
  templateUrl: './ActualizaDatos.component.html',
  styleUrls: ['./ActualizaDatos.component.css']
})
export class ActualizaDatosComponent implements OnInit {
  user!: User;
  Datos: any;
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {

    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
    
  }
  ngOnInit(): void {
    this.CargarDatos();
  }
  
  CargarDatos() {
    this.servicios
      .ActualizaDatos(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!
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
  openUrl=(e: DxDataGridTypes.ColumnButtonClickEvent) => {
   const url: string  = e.row?.data.URL;
   if (!url) return;
    window.open(url, "_blank"); // abre en nueva pestaña
  }
  descargarReporte = (e: DxDataGridTypes.ColumnButtonClickEvent) =>  {
    //e.event?.preventDefault(); 
    const empleado = Number(e.row?.data.CODEMP);
    this.loading.showSpinner2("Descargando...");
    try {
      
      this.servicios.DocActualizaDatos(this.user.Nombre!,
        this.user.password!, empleado).subscribe({
        next: (value: Blob) => {
          const url = window.URL.createObjectURL(value);
          const a = document.createElement('a');
          a.href = url;
          a.download = `DocActualizaDatos_${empleado}_${new Date().toISOString().slice(0,10)}.pdf`
          a.click();
          window.URL.revokeObjectURL(url);
          this.loading.closeSpinner();
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });

    } catch (error: any) {
      this.loading.closeSpinner();
      this.loading.showMensajeError(error.message);
    }
  }
}
