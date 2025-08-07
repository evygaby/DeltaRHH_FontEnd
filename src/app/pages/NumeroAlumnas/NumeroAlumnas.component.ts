import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { now } from 'lodash';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-NumeroAlumnas',
  templateUrl: './NumeroAlumnas.component.html',
  styleUrls: ['./NumeroAlumnas.component.css']
})
export class NumeroAlumnasComponent implements OnInit {
  PeriodoLectivo: any;
  Secciones: any;
  Vista: any;
  seleccionadas: any;
  valorSeleccionado: string = "D";
  PeriodoSelect: string = '';
  user!: User;
  Datos: any;
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
    this.Vista = [
      { VALOR: 'R', TEXTO: 'Ver Resumen' },
      { VALOR: 'D', TEXTO: 'Ver Detalle' }
    ];
    this.valorSeleccionado = "D";
  }

  ngOnInit() {
    this.CargarPeriodo();
    this.valorSeleccionado = "D";
  }
  // cargaInicial(){
  //   forkJoin({
  //   periodos: this.servicios.ListaPeriodosLectivos(
  //     this.user.Nombre!,
  //     this.user.password!
  //   ),
  //   secciones: this.servicios.SeccionesAcademicas(
  //     this.user.Nombre!,
  //     this.user.password!,
  //     this.user.ID_EMPRESA!,
  //     "5/5"// este lo llenamos luego con el periodo recibido
  //   )
  // }).subscribe({
  //   next: ({ periodos, secciones }) => {
  //     // Asignar periodos
  //     this.PeriodoLectivo = periodos;
  //     this.PeriodoSelect = this.PeriodoLectivo[0].PER_PERIODO;

  //     // Volver a cargar secciones ahora con periodo correcto
  //     this.servicios.SeccionesAcademicas(
  //       this.user.Nombre!,
  //       this.user.password!,
  //       this.user.ID_EMPRESA!,
  //       this.PeriodoSelect!
  //     ).subscribe({
  //       next: (seccionesData: any) => {
  //         this.Secciones = seccionesData;
  //         this.seleccionadas = [...this.Secciones];
  //         this.loading.closeSpinner();
  //         this.CargaGrid();
  //       },
  //       error: (error:any) => {
  //         this.loading.closeSpinner();
  //         this.loading.showMensajeError(error.message);
  //       }
  //     });
  //   },
  //   error: (error:any) => {
  //     this.loading.closeSpinner();
  //     this.loading.showMensajeError(error.message);
  //   }
  // });
  // }
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
          this.loading.closeSpinner();
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
          this.loading.closeSpinner();
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
      .NumeroAlumnos(
        this.user.Nombre!,
        this.user.password!,
        this.PeriodoSelect!,
        this.seleccionadas!,
        'null',
        this.valorSeleccionado
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
  getOrden = (row: any) => {
    //var x =row.NIVEL.toString.split("*")(0);
    return parseInt(row.NIV_CODNIVEL);
  };
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
        // // Ajustar ancho de columnas automáticamente

     // worksheet.getColumn(1).width = 35;

        // worksheet.columns.forEach((column: any) => {
        //   let maxLength = 10;
        //   column.eachCell({ includeEmpty: true }, (cell: any) => {
        //     const value = cell.value ? cell.value.toString() : '';
        //     if (value.length > maxLength) {
        //       maxLength = value.length;
        //     }
        //   });
        //   column.width = maxLength + 2;
        // });

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
