import { Component } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { combineLatest } from 'rxjs';
import { User } from 'src/app/core/models/auth.models';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
import { EventService } from 'src/app/core/services/event.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.scss']
})
export class ProvinciasComponent {
 remoteDataSource!:any
   user!: User;
   paises!:any
  consulta!:string
   constructor(private config:ConfiguracionService,private servicios:EventService) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
          const observables = {
            
              b: this.servicios.get(
                "Empleados/Paises?usu=" +
                  this.user.Nombre +
                  "&contrasena=" +
                  this.user.password
              ),
             
          
            };
            const combined = combineLatest(observables);
            combined.subscribe({
              next: (data: any) => {     
                this.paises = data.b;
    
              },
              error: (error: any) => {},
            });
    this.remoteDataSource = createStore({
     onBeforeSend: function(operation, ajaxSettings)
     {
       
     },  onAjaxError: ({ xhr, error}) =>
       {
         
       },
       key: 'CODPROV',
       loadUrl: this.config.apiUrl + 'Provincias/Get?usu='+this.user.Nombre!+"&contrasena="+this.user.password!,
       insertUrl: this.config.apiUrl + 'Provincias/Post?usu='+this.user.Nombre!+"&contrasena="+this.user.password!,
       updateUrl: this.config.apiUrl + 'Provincias/Put?usu='+this.user.Nombre!+"&contrasena="+this.user.password!,
       deleteUrl: this.config.apiUrl + 'Provincias/Delete'
   });
 
 }
}
