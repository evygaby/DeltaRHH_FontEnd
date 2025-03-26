import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { EMP } from 'src/app/core/models/emp';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent {
  customers!: EMP[];
  constructor(private servicios:EventService,private router: Router){
    this.servicios.Consultarempleados().subscribe((data:any) => { 
      this.customers = data.Result
    });
    
     }
    
  
    onCloneIconClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
      this.servicios.modificarObjeto(e.row?.data)
      this.router.navigate(['/empleadosdetalle']);
    };

    }
