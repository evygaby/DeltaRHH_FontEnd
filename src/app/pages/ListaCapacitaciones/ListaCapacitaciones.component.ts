import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
//import { Options as DataSourceConfig } from 'devextreme/ui/pivot_grid/data_source';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
const now = new Date();
// Primer día del año
const iDesde = new Date(now.getFullYear(), 0, 1); // Enero es 0
// Último día del mes actual
const iHasta = new Date(now.getFullYear(), now.getMonth() + 1, 0);
// día 0 del siguiente mes → último día del mes actual
const initialValue: [Date, Date] = [iDesde, iHasta];
@Component({
  selector: 'app-ListaCapacitaciones',
  templateUrl: './ListaCapacitaciones.component.html',
  styleUrls: ['./ListaCapacitaciones.component.css']
})
export class ListaCapacitacionesComponent implements OnInit {
  currentValue: [Date, Date] = initialValue;
  fechaDesde: Date | null = new Date(new Date().getFullYear(), 0, 1);
  fechaHasta: Date | null = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  user!: User;
  Datos: any;
  pivotGridDataSource!: PivotGridDataSource;
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando");
    this.CargarDatos();
  }

  ngOnInit() {
  }
  currentValueChanged(e: any) {
    const [startDate, endDate] = e.value;
    this.fechaDesde = startDate;
    this.fechaHasta = endDate;
    this.CargarDatos();
  }
  CargarDatos() {
    try {
      this.servicios
        .ConsultaCapacitaciones(
          this.user.Nombre!,
          this.user.password!,
          this.user.ID_EMPRESA!,
          this.fechaDesde!,
          this.fechaHasta!
        )
        .subscribe({
          next: (data: any) => {
            this.Datos = data;
            this.loading.closeSpinner();

            this.pivotGridDataSource = new PivotGridDataSource({
              fields: [
                { caption: 'Empleado', dataField: 'EMPLEADO', area: 'row', width: 200 },
                { caption: 'Asistencia', dataField: 'ASISTENCIA', area: 'data' },
                {
                  caption: 'Fecha', dataField: 'FECHA', dataType: 'date', area: 'column', format: (value: any) => {
                    if (!value) return '';
                    const d = new Date(value);
                    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
                  }
                },
                { caption: 'Empresa', dataField: 'EMPRESA', area: 'column' },
                { caption: 'Descripción', dataField: 'DESCRIPCION', area: 'column' },
                { caption: 'V. x Persona', dataField: 'VALOR_P_PERS', area: 'column' },
                { caption: 'Tipo Asis', dataField: 'TIPO_ASISTENCIA', area: 'column' },
                { caption: 'Subsidiado', dataField: 'SUBSUDIO', area: 'column' },
                { caption: '%Subsidio', dataField: 'PORC_SUBSIDIO', area: 'column' }
              ],
              store: this.Datos.map((item: any) => ({
                ...item,
                FECHA: item.FECHA ? new Date(item.FECHA) : null
              }))
            });
          },
          error: (error: any) => {
            this.loading.closeSpinner();
            this.loading.showMensajeError(error.message);
          },
        });
    }
    catch (e) {
      console.error('Error al generar el PDF:', e);
    }
  }
  onToolbarPreparing(e: any) {
    e.toolbarOptions.items = [];
  e.toolbarOptions.items.unshift(
    {
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'plus', // icono de expand
        text: 'Expandir todo',
        onClick: () => e.component.expandAll()
      }
    },
    {
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'minus', // icono de colapsar
        text: 'Colapsar todo',
        onClick: () => e.component.collapseAll()
      }
    }
  );
}

}
