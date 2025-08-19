import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-CumpleaniosPersonal',
  templateUrl: './CumpleaniosPersonal.component.html',
  styleUrls: ['./CumpleaniosPersonal.component.css']
})
export class CumpleaniosPersonalComponent implements OnInit {
user!: User;
Cumpleanios!:any;
public getNumeroMes: any;
  constructor(private servicios:EventService,private router: Router,private loading: LoadingService,private cacheService: CacheService,) 
    { 
       this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
        this.loading.showSpinner2("Consultando")
  this.servicios
        .CumpleaniosPersonal(
          this.user.Nombre!,
          this.user.password!,
          3
        )
        .subscribe({
          next: (data: any) => {
            this.Cumpleanios=data;
            this.loading.closeSpinner();
            //this.loading.showMensajesuccess("Actualizado con éxito");
          },
          error: (error: any) => {
            this.loading.closeSpinner();
            this.loading.showMensajeError(error.message);
          },
        });
  
    }
    meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
getMonthNumber = (rowData: any) => {
  const fecha = new Date(rowData);
  return fecha.getMonth(); // 0 a 11
};

// Muestra nombre del mes
getMonthName = (group: any) => {
  return this.meses[group.value] || group.value;
};
  ngOnInit() {
    this.getNumeroMes=(data: any): number =>{
  return new Date(data.FECNAC).getMonth() + 1;
}
}
  
 getMonth(rowData: any): string {
  const fecha = new Date(rowData.FECNAC);
  const mes = fecha.toLocaleString('es-ES', { month: 'long' });
  return mes.charAt(0).toUpperCase() + mes.slice(1);
}
}
