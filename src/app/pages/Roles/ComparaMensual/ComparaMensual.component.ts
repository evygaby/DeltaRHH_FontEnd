import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import FileSaver from 'file-saver';
import * as ExcelJS from 'exceljs';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-ComparaMensual',
  templateUrl: './ComparaMensual.component.html',
  styleUrls: ['./ComparaMensual.component.css']
})
export class ComparaMensualComponent implements OnInit {
  user!: User;
  Datos: any;
  fecha = new Date();
  mesAnte!: string;
  mesAct!: string;
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")

  }
  ngOnInit() {
    this.CargarDatos();
  }
  currentValueChanged(e: any) {
    this.loading.showSpinner2("Consultando");
    this.fecha = e.value;
    this.CargarDatos();
  }
  CargarDatos() {
    this.servicios
      .ComparaMensualRoles(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!,
        this.fecha
      )
      .subscribe({
        next: (data: any) => {
          this.Datos = data;
          this.loading.closeSpinner();
          if (data && data.length > 0) {
            this.mesAct = this.Datos[0].MES1;
            this.mesAnte = this.Datos[0].MES2;
          }
          else {
            this.mesAct = "Actual";
            this.mesAnte = "Anterior";
          }
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  onToolbarPreparing(e: any) {
    e.toolbarOptions.items.unshift(
      {
        location: 'before',
        widget: 'dxDateBox',
        options: {
          value: this.fecha,
          displayFormat: 'MMMM yyyy',
          openOnFieldClick: true,
          type: 'date',
          calendarOptions: {
            maxZoomLevel: 'year',
            minZoomLevel: 'century'
          },
          onValueChanged: (args: any) => this.currentValueChanged(args)
        }
      });
  }
  calcularDiferenciaSD = (rowData: any) => {
    return rowData.SD1 - rowData.SD2;
  };
  calcularDiferenciaSDG = (rowData: any) => {
    return rowData.SD_G1 - rowData.SD_G2;
  };
  calcularDiferenciaHE = (rowData: any) => {
    return rowData.HE1 - rowData.HE2;
  };
  calcularDiferenciaHO = (rowData: any) => {
    return rowData.HO1 - rowData.HO2;
  };
  calcularDiferenciaFR = (rowData: any) => {
    return rowData.FR1 - rowData.FR2;
  };
  calcularDiferenciaIE = (rowData: any) => {
    return rowData.IE1 - rowData.IE2;
  };
  calcularDiferenciaIR = (rowData: any) => {
    return rowData.IR1 - rowData.IR2;
  };
  calcularDiferenciaS2 = (rowData: any) => {
    return rowData.SD_G2 - rowData.SD2;
  };
  calcularDiferenciaS1 = (rowData: any) => {
    return rowData.SD_G1 - rowData.SD1;
  };
  calcularTuvoDiferencias = (rowData: any) => {
  // Verifica todas las diferencias que ya calculaste
  const difSD = this.calcularDiferenciaSD(rowData);
  const difSDG = this.calcularDiferenciaSDG(rowData);
  const difHE = this.calcularDiferenciaHE(rowData);
  const difHO = this.calcularDiferenciaHO(rowData);
  const difFR = this.calcularDiferenciaFR(rowData);
  const difIE = this.calcularDiferenciaIE(rowData);
  const difIR = this.calcularDiferenciaIR(rowData);
  const difS2 = this.calcularDiferenciaS2(rowData);
  const difS1 = this.calcularDiferenciaS1(rowData);

  // Si alguna diferencia no es cero, retorna "Sí"
  if (
    difSD !== 0 || difSDG !== 0 || difHE !== 0 || difHO !== 0 ||
    difFR !== 0 || difIE !== 0 || difIR !== 0 || difS2 !== 0 || difS1 !== 0
  ) {
    return 'Sí';
  }

  return 'No';
};
  resaltarCelda(e: any) {
    if (e.rowType === 'data' && e.data.TC1 !== e.data.TC2) {
      if (['TC1', 'TC2'].includes(e.column.dataField)) {
        e.cellElement.classList.add('celda-diferente');
      }
    }
    if (e.rowType === 'data' && e.data.CC1 !== e.data.CC2) {
      if (['CC1', 'CC2'].includes(e.column.dataField)) {
        e.cellElement.classList.add('celda-diferente');
      }
    }
    if (e.rowType === 'data' && (e.column.name === "SD" || e.column.name === "SDG" || e.column.name === "Dif2" || e.column.name === "HE" || e.column.name === "HO" || e.column.name === "FR" || e.column.name === "IE" || e.column.name === "IR")) {
      const cell = e.cellElement;
      const valor = e.value;

      cell.classList.remove('flecha-arriba', 'flecha-abajo', 'sin-cambio');
      if (valor > 0) {
        cell.classList.add('flecha-arriba');
      } else if (valor < 0) {
        cell.classList.add('flecha-abajo');
      }
      else {
        // cell.classList.add('sin-cambio');
      }
    }
  }
  getBase64ImageFromURL(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      img.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext('2d');
        ctx!.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      };
      img.onerror = error => reject(error);
    });
  }
  async exportarConCabecera(e: any) {
    console.log('Exportación iniciada');
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    try {
      let base64logo: any;
      if (this.user.ID_EMPRESA == 3) {
        base64logo = await this.getBase64ImageFromURL('assets/images/logo_solo_rep.png');
      }
      else {
        base64logo = await this.getBase64ImageFromURL('assets/images/logo_prescolar_rep.png');
      }

      console.log('Logo cargado');

      const imageId = workbook.addImage({
        base64: base64logo,
        extension: 'png',
      });

      worksheet.addImage(imageId, {
        tl: { col: 0, row: 0 },
        ext: { width: 80, height: 80 },
      });

      const ahora = new Date();

      const fechaHoraTexto = ahora.toLocaleString('es-EC', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      worksheet.mergeCells('A1:F1');
      worksheet.getCell('A1').value = 'Fecha de emisión: ' + fechaHoraTexto;
      worksheet.getCell('A1').font = { size: 8, bold: false };
      worksheet.getCell('A1').alignment = { horizontal: 'right' };

      worksheet.mergeCells('A2:F2');
      if (this.user.ID_EMPRESA == 3) {
        worksheet.getCell('A2').value = 'Unidad Educativa Bilingüe Delta';
      }
      else {
        worksheet.getCell('A2').value = 'Presco DeltaTorremar';
      }
      worksheet.getCell('A2').font = { size: 16, bold: true };
      worksheet.getCell('A2').alignment = { horizontal: 'center' };



      worksheet.mergeCells('A3:F3');
      worksheet.getCell('A3').value = 'Comparar valores de ROL';
      worksheet.getCell('A3').font = { size: 12, bold: true };
      worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' };

      worksheet.addRow([]);

      // Exportar datos con agrupación
      const dataGrid = e.component;

      const exportDataGrid = require('devextreme/excel_exporter').exportDataGrid;

      exportDataGrid({
        component: dataGrid,
        worksheet: worksheet,
        topLeftCell: { row: 6, column: 1 },
        customizeCell: (options: any) => {
          const { gridCell, excelCell } = options;

          // Agregar bordes
          excelCell.border = {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' },
          };

          // Estilo para grupos
          if (gridCell.rowType === 'group' || gridCell.rowType === 'groupFooter' || gridCell.rowType === 'totalFooter') {
            excelCell.font = { bold: true };
            excelCell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'FFD9D9D9' },
            };
          }
          // 🔹 Formato de celda de datos
          if (gridCell.rowType === 'data') {
const colName = gridCell.column?.name;

            // 🔹 Formato por nombre de columna
        if (colName === 'SD' || colName === 'SDG' || colName === 'Dif2' || colName === 'HE' || colName === 'HO' || colName === 'FR' || colName === 'IE' || colName === 'IR') {
          const valor = gridCell.value ?? 0;
          if (valor > 0) {
           excelCell.font = { color: { argb: '008000' }, bold: true }; // verde
            excelCell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'E8F5E9' } // fondo verde claro como CSS
            };
          } else if (valor < 0) {
            excelCell.font = { color: { argb: 'FF0000' }, bold: true }; // rojo
            excelCell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'FFEBEE' } // fondo rojo claro
            };
          }
        }
          }
        },
      }).then(() => {
        // Guardar archivo
        workbook.xlsx.writeBuffer().then((buffer: BlobPart) => {
          FileSaver.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Comparacion' + this.mesAct + '-' + this.mesAnte + '.xlsx');
        });
      });

    } catch (error) {
      console.error('Error en exportación:', error);
    }

    e.cancel = true;
  }
}
