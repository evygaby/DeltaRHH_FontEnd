import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import FileSaver from 'file-saver';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import * as ExcelJS from 'exceljs';
type Clase = {
  DOCENTE: string;
  PROF: string;
  PENDIENTE: string;
  ID_CLASE: number;
  NIVEL: number;
  PARALELO: string;
  MAT_MATERIA: string;
  MATERIA: string;
  ID_CLASE1: number;
  CURSO: string;
  CURSODESC: string;
  NUMHORAS: number;
  HORASCLASE: any;
  ACTIVO: string;
  NUM_ALUMNAS: number;
  TOTAL_ALUMNAS: number;
  CARGOS: string;
  HORASCLASE_NUM: number;
};
@Component({
  selector: 'app-DistributivoMaestras',
  templateUrl: './DistributivoMaestras.component.html',
  styleUrls: ['./DistributivoMaestras.component.css']
})
export class DistributivoMaestrasComponent implements OnInit {
  PeriodoLectivo: any;
  Secciones: any;
  seleccionadas: any;
  PeriodoSelect: string = '';
  user!: User;
  Datos: any;
  rowSpanMap: { [key: string]: number[] } = {};

  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
  }
  // Se calcula un mapa de rowspan para cada columna que queremos fusionar
  calculateRowSpanMap(column: keyof Clase, parentColumn?: keyof Clase) {
    const map: number[] = [];
    let span = 1;

    for (let i = 0; i < this.Datos.length; i++) {
      if (i === 0) {
        map[i] = 1;
        continue;
      }

      const sameValue = this.Datos[i][column] === this.Datos[i - 1][column];
      const sameParent = !parentColumn || this.Datos[i][parentColumn] === this.Datos[i - 1][parentColumn];

      if (sameValue && sameParent) {
        span++;
        map[i] = 0;
        map[i - span + 1] = span;
      } else {
        span = 1;
        map[i] = 1;
      }
    }

    this.rowSpanMap[column] = map;
  }

  onCellPrepared(e: any) {
    if (e.rowType !== 'data') return;

    const col = e.column.dataField as keyof Clase;
    if (!col || !this.rowSpanMap[col]) return;

    const rowIndex = e.row.rowIndex; // usar rowIndex real del grid
    const rowspan = this.rowSpanMap[col][rowIndex];

    if (rowspan > 1) {
      e.cellElement.setAttribute('rowspan', rowspan);
    } else if (rowspan === 0) {
      e.cellElement.style.display = 'none';
    }
  }

  ngOnInit() {
    this.CargarPeriodo();
    // Inicializamos el mapa de rowspan para la columna 'category'

  }

  selectPeriodo({ value }: { value?: string }) {
    if (value !== undefined) {
      this.PeriodoSelect = value;
    }
  }
  CambioSeccion(e: any) {

    this.seleccionadas = e.component.option('selectedItems');
    this.CargaGrid();
  }
  CargarPeriodo() {
    this.servicios
      .ListaPeriodosLectivos(
        this.user.Nombre!,
        this.user.password!
      )
      .subscribe({
        next: (data: any) => {
          this.PeriodoLectivo = data;
          this.PeriodoSelect = this.PeriodoLectivo[0].PER_PERIODO;
          //this.loading.closeSpinner();
          this.CargarSeccionesAcademicas();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  CargarSeccionesAcademicas() {
    this.servicios
      .SeccionesAcademicas(
        this.user.Nombre!,
        this.user.password!, this.user.ID_EMPRESA!, this.PeriodoSelect!
      )
      .subscribe({
        next: (data: any) => {
          this.Secciones = data;
          this.seleccionadas = [...this.Secciones];
          //this.loading.closeSpinner();
          this.CargaGrid();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  CargaGrid() {
    this.servicios
      .Distributivo(
        this.user.Nombre!,
        this.user.password!,
        this.PeriodoSelect!,
        this.seleccionadas!
      )
      .subscribe({
        next: (data: any) => {
          this.Datos = data;
          this.loading.closeSpinner();
          //this.Datos.forEach((d:any) => d.cargo = d.cargo.replace(/\\n/g, '\n'));
          this.Datos.sort((a: any, b: any) => {
            if (a.DOCENTE !== b.DOCENTE) return a.DOCENTE.localeCompare(b.DOCENTE);
            if (a.MATERIA !== b.MATERIA) return a.MATERIA.localeCompare(b.MATERIA);
            return 0;
          });
          this.calculateRowSpanMap('DOCENTE');
          this.calculateRowSpanMap('MATERIA', 'DOCENTE');
          this.calculateRowSpanMap('HORASCLASE_NUM', 'DOCENTE');
          this.calculateRowSpanMap('TOTAL_ALUMNAS', 'DOCENTE');
          this.calculateRowSpanMap('CARGOS', 'DOCENTE');
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
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
      worksheet.mergeCells('A1:H1');
      worksheet.getCell('A1').value = 'Fecha de emisión: ' + fechaHoraTexto;
      worksheet.getCell('A1').font = { size: 8, bold: false };
      worksheet.getCell('A1').alignment = { horizontal: 'right' };

      worksheet.mergeCells('A2:H2');
      if (this.user.ID_EMPRESA == 3) {
        worksheet.getCell('A2').value = 'Unidad Educativa Bilingüe Delta';
      }
      else {
        worksheet.getCell('A2').value = 'Presco DeltaTorremar';
      }
      worksheet.getCell('A2').font = { size: 16, bold: true };
      worksheet.getCell('A2').alignment = { horizontal: 'center' };



      worksheet.mergeCells('A3:H3');
      worksheet.getCell('A3').value = 'Distributivo de Maestras';
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
          // 👇 Reemplazo de <br> por salto real
        if (typeof excelCell.value === 'string') {
          excelCell.value = excelCell.value.replace(/<br\s*\/?>/gi, '\r\n');
          excelCell.alignment = { wrapText: true }; // importante para que se muestre el salto
        }
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

        workbook.xlsx.writeBuffer().then((buffer: BlobPart) => {
          FileSaver.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DistributivoMaestras.xlsx');
        });
      });

    } catch (error) {
      console.error('Error en exportación:', error);
    }

    e.cancel = true;
  }
}
