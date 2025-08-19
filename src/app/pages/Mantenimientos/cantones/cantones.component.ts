import { Component } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { combineLatest } from 'rxjs';
import { User } from 'src/app/core/models/auth.models';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
import { EventService } from 'src/app/core/services/event.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-cantones',
  templateUrl: './cantones.component.html',
  styleUrls: ['./cantones.component.scss']
})
export class CantonesComponent {
 remoteDataSource!:any
 provincias!:any
 paises!:any
   user!: User;
  consulta!:string
   constructor(private config:ConfiguracionService,private servicios:EventService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
       const observables = {
         
           b: this.servicios.get(
             "Empleados/Paises?usu=" +
               this.user.Nombre +
               "&contrasena=" +
               this.user.password
           ),
           c: this.servicios.get(
             "Empleados/PROVINCIA?usu=" +
               this.user.Nombre +
               "&contrasena=" +
               this.user.password
           ),
       
         };
         const combined = combineLatest(observables);
         combined.subscribe({
           next: (data: any) => {     
             this.paises = data.b;
             this.provincias = data.c;
           },
           error: (error: any) => {},
         });
    this.remoteDataSource = createStore({
     onBeforeSend: function(operation, ajaxSettings)
     {
       
     },  onAjaxError: ({ xhr, error}) =>
       {
         
       },
       key: 'CODCANTON',
       loadUrl: this.config.apiUrl + 'Cantones/Get?usu='+this.user.Nombre!+"&contrasena="+this.user.password!,
       insertUrl: this.config.apiUrl + 'Cantones/Post?usu='+this.user.Nombre!+"&contrasena="+this.user.password!,
       updateUrl: this.config.apiUrl + 'Cantones/Put?usu='+this.user.Nombre!+"&contrasena="+this.user.password!,
       deleteUrl: this.config.apiUrl + 'Cantones/Delete'
   });
 
 }
}
