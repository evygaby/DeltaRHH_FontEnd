import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as ExcelJS from 'exceljs';
import { User } from 'src/app/core/models/auth.models';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import { ColumnResizeMode } from 'devextreme/ui/data_grid';
@Component({
  selector: 'app-ListaDatosEmpleados',
  templateUrl: './ListaDatosEmpleados.component.html',
  styleUrls: ['./ListaDatosEmpleados.component.css']
})
export class ListaDatosEmpleadosComponent implements OnInit {
  user!: User;
  Datos: any;
  SiNo: any;
  TipoSeguro: any;
  TipoCta: any;
  TipoVivienda: any;
  Tenencia: any;
  TiempoHabita: any;
  MaterialParedes: any;
  MaterialPiso: any;
  columnResizingMode: ColumnResizeMode = 'nextColumn';
  searchEnabled = true;
  editorOptions = { placeholder: 'Search column' };
  allowSelectAll = true;
  selectByClick = true;
  recursive = true;
  columnChooserModes = [{
    key: 'dragAndDrop',
    name: 'Drag and drop',
  }, {
    key: 'select',
    name: 'Select',
  }];
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
    this.SiNo = [
      { VALOR: 'S', TEXTO: 'SI' },
      { VALOR: 'N', TEXTO: ' ' }
    ];
    this.TipoSeguro = [
      { VALOR: 'P', TEXTO: 'PERSONAL' },
      { VALOR: 'E', TEXTO: 'EMPRESARIAL' }
    ]; 
    this.TipoCta = [
      { VALOR: 'A', TEXTO: 'AHORRO' },
      { VALOR: 'C', TEXTO: 'CORRIENTE' }
    ];
    this.TipoVivienda = [
      { VALOR: 'C', TEXTO: 'CASA' },
      { VALOR: 'D', TEXTO: 'DEPARTAMENTO' },
      { VALOR: 'V', TEXTO: 'VILLA' }
    ];
    this.Tenencia = [
      { VALOR: 'P', TEXTO: 'PROPIA' },
      { VALOR: 'A', TEXTO: 'ALQUILADA' },
      { VALOR: 'R', TEXTO: 'PRESTADA' }
    ];
    this.TiempoHabita = [
      { VALOR: '1', TEXTO: 'MENOS DE 1 AÑO' },
      { VALOR: '1-5', TEXTO: 'DE 1 A 5 AÑOS' },
      { VALOR: '6-15', TEXTO: 'DE 6 A 15 AÑOS' },
      { VALOR: '16-20', TEXTO: 'DE 16 A 20 AÑOS' },
      { VALOR: '20', TEXTO: 'MÁS DE 20 AÑOS' },
    ];
    this.MaterialParedes = [
      { VALOR: 'C', TEXTO: 'CEMENTO' },
      { VALOR: 'L', TEXTO: 'LADRILLO' },
      { VALOR: 'P', TEXTO: 'PIEDRA' },
      { VALOR: 'A', TEXTO: 'ADOBE' },
      { VALOR: 'M', TEXTO: 'MADERA' },
      { VALOR: 'S', TEXTO: 'PLÁSTICO' },
    ];
    this.MaterialPiso = [
      { VALOR: 'M', TEXTO: 'MADERA' },
      { VALOR: 'T', TEXTO: 'TIERRA' },
      { VALOR: 'C', TEXTO: 'CERÁMICA/PORCELANATO' },
      { VALOR: 'MR', TEXTO: 'MÁRMOL' },
      { VALOR: 'CM', TEXTO: 'CEMENTO' },
      { VALOR: 'G', TEXTO: 'GRANITO' },
    ];
    this.CargarDatos();
  }
  CargarDatos() {
    this.servicios
      .ListaDatosEMP(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!
      )
      .subscribe({
        next: (data: any) => {
          this.Datos = data;
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  ngOnInit() {
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
        ext: { width: 58, height: 80 },
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
      worksheet.getCell('A3').value = 'Número de Estudiantes';
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
        },
      }).then(() => {
        // Guardar archivo
        workbook.xlsx.writeBuffer().then((buffer: BlobPart) => {
          FileSaver.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Numero_estudiantes.xlsx');
        });
      });

    } catch (error) {
      console.error('Error en exportación:', error);
    }

    e.cancel = true;
  }
}
