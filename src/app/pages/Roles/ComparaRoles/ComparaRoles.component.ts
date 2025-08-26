import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { saveAs } from 'file-saver';
import { Workbook } from 'exceljs';
import { exportPivotGrid } from 'devextreme/excel_exporter';
import { DxPivotGridComponent } from 'devextreme-angular';
const now = new Date();
const iDesde = new Date(now.getFullYear(), now.getMonth() - 1, 0);
const iHasta = new Date(now.getFullYear(), now.getMonth() + 1, 0);
const initialValue: [Date, Date] = [iDesde, iHasta];
@Component({
  selector: 'app-ComparaRoles',
  templateUrl: './ComparaRoles.component.html',
  styleUrls: ['./ComparaRoles.component.css']
})
export class ComparaRolesComponent implements OnInit {
  currentValue: [Date, Date] = initialValue;
  fechaDesde: Date | null = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
  fechaHasta: Date | null = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  user!: User;
  Datos: any;
  pivotGridDataSource: PivotGridDataSource = new PivotGridDataSource({ store: [] });
  @ViewChild(DxPivotGridComponent, { static: false }) pivotgrid!: DxPivotGridComponent;
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando");
    this.CargarDatos();
    //this.expandAll();
  }

  ngOnInit() {
  }
  currentValueChanged(e: any) {
    this.loading.showSpinner2("Consultando");
    const [startDate, endDate] = e.value;
    this.fechaDesde = startDate;
    this.fechaHasta = endDate;
    this.CargarDatos();
  }
  CargarDatos() {
    try {
      this.servicios
        .ComparaRoles(
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
                { caption: 'Código', dataField: 'CODEMP', area: 'row', width: 80, allowExpandAll: false, expanded: true },
                { caption: 'Empleado', dataField: 'RAZONSOCIAL', area: 'row', width: 200, allowExpandAll: false },
                { caption: 'FechaIngreso', dataField: 'FECINGRESO', area: 'row', width: 100, visible: false, format: 'dd/MM/yyyy' },
                { caption: 'FechaSalida', dataField: 'FECSALIDA', area: 'row', width: 100, visible: false, format: 'dd/MM/yyyy' },
                { caption: 'IniMat', dataField: 'IMATERNIDAD', area: 'row', width: 100, visible: false, format: 'dd/MM/yyyy' },
                { caption: 'FinMat', dataField: 'FMATERNIDAD', area: 'row', width: 100, visible: false, format: 'dd/MM/yyyy' },
                { caption: 'IniEnf', dataField: 'IENFERMEDAD', area: 'row', width: 100, visible: false, format: 'dd/MM/yyyy' },
                { caption: 'FinEnf', dataField: 'FENFERMEDAD', area: 'row', width: 100, visible: false, format: 'dd/MM/yyyy' },
                { caption: 'IniLicSSueldo', dataField: 'ISSUELDO', area: 'row', width: 100, visible: false, format: 'dd/MM/yyyy' },
                { caption: 'FinLicSSueldo', dataField: 'FSSUELDO', area: 'row', width: 100, visible: false, format: 'dd/MM/yyyy' },
                 { caption: 'T. Contrato', dataField: 'CONTRATO', dataType: 'string', area: 'data', summaryType: 'min' },
                { caption: 'C. Costo', dataField: 'CENTRO_COSTO', area: 'data', summaryType: 'min' },
                { caption: 'C. Costo Min', dataField: 'GRUPO_MINIS', area: 'data', visible: false, summaryType: 'max' },
                { caption: 'Sueldo Contrato', dataField: 'SUELDO_CONTRATADO', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Sueldo Ganado', dataField: 'SUELDO_GANADO', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Fdo. Resev', dataField: 'FDO_RESERVA_PAG', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'FR Acum', dataField: 'FDO_RESERVA_ACUM', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'T. Extras', dataField: 'T_EXTRAS', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Extras', dataField: 'EXTRAS', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Otros', dataField: 'OTROS', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'RetroAct', dataField: 'RETROACTIVO', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'IESS', dataField: 'IESS', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'ImpRta', dataField: 'IR', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Préstamos', dataField: 'PRESTAMOS', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Anticipos', dataField: 'ANTICIPOS', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Seg. Emp.', dataField: 'SEGURO', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Quirografarios', dataField: 'PQ', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Hipotecarios', dataField: 'PH', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Ptmo. Masterado', dataField: 'PRES_MASTERADO', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Gastos', dataField: 'GASTO_ANUAL', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'D3 Acum', dataField: 'D3_PROV', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'D3 Mes', dataField: 'D3_MES', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'D4 Acum', dataField: 'D4_PROV', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'D4 Mes', dataField: 'D4_MES', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'APatronal', dataField: 'APORTE_PATRONAL', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'Anticipo D3', dataField: 'ANT_D3', area: 'data', summaryType: 'max', format: { type: 'currency', currency: 'USD', precision: 2, currencyDisplay: 'symbol' } },
                { caption: 'D. Enf', dataField: 'DIAS_ENF', area: 'data', summaryType: 'max',  },
                { caption: 'D. Mat', dataField: 'DIAS_MAT', area: 'data', summaryType: 'max', },
                { caption: 'D. Lic', dataField: 'SINSUELDO', area: 'data', summaryType: 'max',},
                {
                  caption: 'Mes', dataField: 'FECHA', area: 'column', groupInterval: 'month', format: (date: any) => {
                    const options = { year: 'numeric', month: 'long' } as const;
                    return new Intl.DateTimeFormat('es-EC', options).format(date);
                  }
                },
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

  exportToExcel() {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Pivot Data');

    exportPivotGrid({
      component: this.pivotgrid.instance,
      worksheet,
      customizeCell: ({ excelCell }) => {
        if (excelCell?.font) {
          excelCell.font.bold = true; // ejemplo de formato
        }
      }
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'pivotgrid.xlsx');
      });
    });
  }
  expandAll() {
    const dataSource = this.pivotgrid.instance.getDataSource();
    this.pivotGridDataSource.expandAll(dataSource.field("CODEMP").index);
    this.pivotGridDataSource.expandAll(dataSource.field("RAZONSOCIAL").index);
    this.pivotGridDataSource.expandAll(dataSource.field("DESCRIPCION").index);
    this.pivotGridDataSource.expandAll(dataSource.field("VALOR_P_PERS").index);
    this.pivotGridDataSource.expandAll(dataSource.field("TIPO_ASISTENCIA").index);
    this.pivotGridDataSource.expandAll(dataSource.field("SUBSUDIO").index);
    this.pivotGridDataSource.expandAll(dataSource.field("PORC_SUBSIDIO").index);
  }

  collapseAll() {
    const dataSource = this.pivotgrid.instance.getDataSource();
    this.pivotGridDataSource.collapseAll(dataSource.field("FECHA").index);
    this.pivotGridDataSource.collapseAll(dataSource.field("EMPRESA").index);
    this.pivotGridDataSource.collapseAll(dataSource.field("DESCRIPCION").index);
    this.pivotGridDataSource.collapseAll(dataSource.field("VALOR_P_PERS").index);
    this.pivotGridDataSource.collapseAll(dataSource.field("TIPO_ASISTENCIA").index);
    this.pivotGridDataSource.collapseAll(dataSource.field("SUBSUDIO").index);
    this.pivotGridDataSource.collapseAll(dataSource.field("PORC_SUBSIDIO").index);

  }
}
