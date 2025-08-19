import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import * as ExcelJS from 'exceljs';
@Component({
  selector: 'app-JefesArea',
  templateUrl: './JefesArea.component.html',
  styleUrls: ['./JefesArea.component.css']
})
export class JefesAreaComponent implements OnInit {
  user!: User;
  Datos: any;
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
    this.CargaGrid();
  }
  CargaGrid() {
    this.servicios
      .JefesArea(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!)
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
      worksheet.mergeCells('A1:C1');
      worksheet.getCell('A1').value = 'Fecha de emisión: ' + fechaHoraTexto;
      worksheet.getCell('A1').font = { size: 8, bold: false };
      worksheet.getCell('A1').alignment = { horizontal: 'right' };

      worksheet.mergeCells('A2:C2');
      if (this.user.ID_EMPRESA == 3) {
        worksheet.getCell('A2').value = 'Unidad Educativa Bilingüe Delta';
      }
      else {
        worksheet.getCell('A2').value = 'Presco DeltaTorremar';
      }
      worksheet.getCell('A2').font = { size: 16, bold: true };
      worksheet.getCell('A2').alignment = { horizontal: 'center' };



      worksheet.mergeCells('A3:C3');
      worksheet.getCell('A3').value = 'Jefas de Área';
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
          FileSaver.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Jefas_de_area.xlsx');
        });
      });

    } catch (error) {
      console.error('Error en exportación:', error);
    }

    e.cancel = true;
  }
}
