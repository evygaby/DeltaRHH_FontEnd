import { ThisReceiver } from '@angular/compiler';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import dxDataGrid from 'devextreme/ui/data_grid';
import { Workbook, WorksheetViewFrozen } from 'exceljs';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { User } from 'src/app/core/models/auth.models';
import { EMP } from 'src/app/core/models/emp';
import { CacheService } from 'src/app/core/services/cache.service';
import { ConfiguracionService } from 'src/app/core/services/configuracion.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent {
  customers!: EMP[];
  user!:User
  data!: any[];
  generos:any
  tipocontrato:any
 private config = inject(ConfiguracionService);
  private cacheSubscription!: Subscription;
  constructor(private servicios:EventService,private router: Router,private loading: LoadingService,private cacheService: CacheService,){
    this.generos=this.config.getegeneros()
    this.tipocontrato=this.config.gettipocontrato()
    this.cacheSubscription = this.cacheService.cache$.subscribe(data => {
      if(data!=null){
      if(data.clase=="empleados"){
        this.customers = data.data;
      }
    }
    });
    
    this.getData("empleados");    
     }
    //  ngOnInit(): void {
    //      this.bookData$ = this.servicios.getData();
    //    }
    
    async  onExporting(e: DxDataGridTypes.ExportingEvent) {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet('Employees');
  
      await exportDataGrid({
        component: e.component,
        worksheet: worksheet,
        autoFilterEnabled: true
      });
    
      const buffer = await workbook.xlsx.writeBuffer();
      saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Empleados.xlsx');
    
      e.cancel = true;
    }
    
    getData(page: string): void {
    const cachedData = this.cacheService.get(page);

    // Si los datos no están en caché, los recuperamos del servidor y los almacenamos en la caché.
    if (!cachedData) {
      this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
      this.loading.showSpinner2("Consultando empleados")
      this.servicios.Consultarempleados(this.user.Nombre!,this.user.password!,this.user.IdCompania!).subscribe(data => {
        try {
          this.customers = data
          this.loading.closeSpinner()
          this.cacheService.set(page,page,new Date(), data);
        } catch (error) {
          console.error(error);
          // maneja el error como prefieras aquí
        }
      });
    }
  }
  agregarBotonesToolbar(e: any) {
    e.toolbarOptions.items.unshift({
      location: 'before',
      widget: 'dxButton',
      options: {
        text: 'Nuevo Empleado',
        icon: 'add',
        onClick: () => {
          const empleado=new EMP()
          empleado.esnuevo=true;
          this.servicios.modificarObjeto(empleado)
          this.servicios.modificarObjetoarray(this.customers)
          this.router.navigate(['/empleadosdetalle']);
        }
      }
    });
  }
    onCloneIconClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
      const empleado=e.row?.data
      empleado.esnuevo=false;
      this.servicios.modificarObjeto(empleado)
      this.servicios.modificarObjetoarray(this.customers)
      this.router.navigate(['/empleadosdetalle']);
    };
    ngOnDestroy(): void {
      // Nos desuscribimos de la caché y borramos los datos de la caché cuando se destruye el componente.
     // this.cacheSubscription.unsubscribe();
     //  this.cacheService.clear('1'); // puedes adaptar esto según tu lógica para limpiar el caché
    }
    }
function exportDataGrid(arg0: { component: dxDataGrid<any, any>; worksheet: any; autoFilterEnabled: boolean; }) {
  throw new Error('Function not implemented.');
}

