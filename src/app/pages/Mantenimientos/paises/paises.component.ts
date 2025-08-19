import { Component } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { User } from 'src/app/core/models/auth.models';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent {
  remoteDataSource!:any
   user!: User;
  consulta!:string
   constructor(private config:ConfiguracionService) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
   this.consulta=this.config.apiUrl + '/Get?usu='+this.user.Nombre!+"&contrasena="+this.user.password!
   this.remoteDataSource = createStore({
     onBeforeSend: function(operation, ajaxSettings)
     {
       
     },  onAjaxError: ({ xhr, error}) =>
       {
         
       },
       key: 'CODPAIS',
       loadUrl: this.config.apiUrl + 'Paises/Get?usu='+this.user.Nombre!+"&contrasena="+this.user.password!,
       insertUrl: this.config.apiUrl + 'Paises/Post?usu='+this.user.Nombre!+"&contrasena="+this.user.password!,
       updateUrl: this.config.apiUrl + 'Paises/Put?usu='+this.user.Nombre!+"&contrasena="+this.user.password!,
       deleteUrl: this.config.apiUrl + 'Paises/Delete'
   });
 
 }
}
