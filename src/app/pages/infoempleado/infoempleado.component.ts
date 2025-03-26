import { Component, Output } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { EmpleadosComponent } from '../empleados/empleados.component';
import { EMP } from 'src/app/core/models/emp';

@Component({
  selector: 'app-infoempleado',
  templateUrl: './infoempleado.component.html',
  styleUrls: ['./infoempleado.component.scss']
})
export class InfoempleadoComponent {
  empleado: EMP = {};
  urbanizacion!:any
  data!:any
  callep!:any
  calles!:any
  mz!:any
  Km!:any
casa!:any
  cargos!:any
  finalArray: Output[] =[]
 constructor(private servicios:EventService){
   this.empleado= this.servicios.miObjeto
   this.data=this.empleado.DIRECCION_CSV?.split(",",10)
   this.urbanizacion=this.data[0]
   this.callep=this.data[2]
   this.calles=this.data[4]
   this.mz=this.data[1]
   this.Km=this.data[1]
   this.casa=this.data[3]


  //  this.cargos=this.servicios.miObjeto.ACTIVO
     }
}
