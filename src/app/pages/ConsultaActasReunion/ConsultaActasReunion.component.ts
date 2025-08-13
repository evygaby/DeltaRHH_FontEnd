import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import pdfMake from 'src/app/core/services/pdfmake-wrapper'; // Ajusta la ruta
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { Columns } from 'angular-feather/icons';
import { DomSanitizer } from '@angular/platform-browser';
import htmlToPdfmake from 'html-to-pdfmake';
const msInDay = 1000 * 60 * 60 * 24;
const now = new Date();
interface Asistente {
  OBSERVACION: string;
  RAZONSOCIAL: string;
}
interface Adjunto {
  NOMBREARCHIVO: string;
  URL: string;
}
const initialValue: [Date, Date] = [
  new Date(now.getTime() - msInDay * 3),
  new Date(now.getTime() + msInDay * 3),
];
@Component({
  selector: 'app-ConsultaActasReunion',
  templateUrl: './ConsultaActasReunion.component.html',
  styleUrls: ['./ConsultaActasReunion.component.css']
})

export class ConsultaActasReunionComponent implements OnInit {
  PeriodoLectivo: any;
  PeriodoSelect: string = '';
  filtro: string = '';
  currentValue: [Date, Date] = initialValue;
  fechaDesde: Date | undefined;
  fechaHasta: Date | undefined;
  user!: User;
  Datos: any;
  Acta: any;

  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {

    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
  }
  ngOnInit() {
    this.CargarPeriodo();
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
          this.CargarDatos();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  CargarDatos() {
    this.servicios
      .ConsultaActas(
        this.user.Nombre!,
        this.user.password!,
        this.PeriodoSelect,
        this.user.Codigo!,
        this.fechaDesde,
        this.fechaHasta,
        this.filtro
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
  selectPeriodo({ value }: { value?: string }) {
    if (value !== undefined) {
      this.PeriodoSelect = value;
      this.CargarDatos();
    }
  }
  onNombreChanged(e: any) {
    this.filtro = e.value;
    this.CargarDatos();
  }
  currentValueChanged(e: any) {
    const [startDate, endDate] = e.value;
    this.fechaDesde = startDate;
    this.fechaHasta = endDate;
    this.CargarDatos();
  }
  ConsultaActaIndividual(Codigo: Number) {
    this.servicios
      .ConsultaActasIndividual(
        this.user.Nombre!,
        this.user.password!,
        this.PeriodoSelect,
        Number(Codigo)
      )
      .subscribe({
        next: (data: any) => {
          this.Acta = data;
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  VerActa = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
    const empleado = e.row?.data

    this.generatePdf(empleado.SEC_CABRG);
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
  stripHtml(html: string): string {
    if (!html) return '';
    // Crea un elemento temporal
    const temporal = document.createElement('div');
    temporal.innerHTML = html;
    // Obtiene solo el texto sin etiquetas
    return temporal.textContent || temporal.innerText || '';
  }
  async generatePdf(Codigo: Number) {
    this.ConsultaActaIndividual(Codigo);
    let base64logo: any;
    let piePaginaLogo: any;
    base64logo = await this.getBase64ImageFromURL('assets/images/siempre_familia.jpg');
    piePaginaLogo = await this.getBase64ImageFromURL('assets/images/piePagina.png');
    const ahora = new Date();
    const fechaHoraTexto = ahora.toLocaleString('es-EC', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    try {
      const cabecera = this.Acta[0]?.[0] ?? {};
      const asistentes: Asistente[] = this.Acta[1] ?? [];
      const orden = this.Acta[2]?.[0];
      const adjuntos: Adjunto[] = this.Acta[3] ?? [];
      // Crear la tabla
      const adjuntosList: any[] = [];

      // Agregar filas dinámicamente
      (adjuntos || []).forEach(a => {
        adjuntosList.push([
          { text: a.NOMBREARCHIVO, link: a.URL, color: '#000', decoration: 'underline' }
        ]);
      });
      // Si no hay adjuntos, puedes opcionalmente agregar un mensaje
      if (adjuntosList.length === 0) {
        adjuntosList.push([{ text: 'No hay documentos adjuntos', italics: true, color: '#555' }]);
      }


      const fecha = new Date(cabecera.FECHA).toLocaleString('es-EC', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      const docDefinition: TDocumentDefinitions = {
        content: [
          {
            columns: [
              {
                image: base64logo,
                width: 130,
                margin: [0, 0, 10, 0], // margen derecha para separar del texto
              },
              {
                width: 400,
                margin: [0, 0, 0, 0],
                stack: [
                  {
                    text: 'Fecha de impresion: ' + fechaHoraTexto,
                    fontSize: 6,
                    bold: true,
                    alignment: 'right',
                    margin: [0, 0, 0, 0], // ajusta verticalmente el texto si quieres
                  },
                  {
                    text: 'Unidad Educativa Bilingüe Delta',
                    fontSize: 12,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 10, 0, 0], // ajusta verticalmente el texto si quieres
                  },
                  {
                    text: 'Acta de Reunión',
                    fontSize: 12,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 0], // ajusta verticalmente el texto si quieres
                  },
                  {
                    text: 'Administrativa',
                    fontSize: 10,
                    bold: false,
                    alignment: 'center',
                    margin: [0, 0, 0, 0], // ajusta verticalmente el texto si quieres
                  },
                  {
                    text: cabecera.ASUNTO,
                    fontSize: 10,
                    bold: false,
                    alignment: 'center',
                    margin: [0, 0, 0, 0], // ajusta verticalmente el texto si quieres
                  }
                ]
              }
            ],
          },
          {
            text: [
              { text: "Ubicación: ", bold: true }, // negrita solo aquí
              { text: cabecera.LUGAR, bold: false } // texto normal
            ],
            bold: false,
            alignment: 'left',
            margin: [0, 5, 0, 0], // ajusta verticalmente el texto si quieres
          },
          {
            columns: [
              {
                text: [

                  { text: 'Fecha: ', bold: true },
                  { text: fecha, bold: false }
                ],
                alignment: 'left',
                margin: [0, 5, 0, 0]
              },
              {
                text: [

                  { text: 'Hora: ', bold: true },
                  { text: cabecera.HORAINI + " - " + cabecera.HORAFIN, bold: false }
                ],
                alignment: 'left',
                margin: [0, 5, 0, 0]
              }
            ]
          },
          {
            table: {
              headerRows: 1,
              widths: ['*', '*'], // ajusta el número y tamaño de columnas
              body: [
                // Encabezados
                [
                  { text: 'Asistentes', bold: true, fillColor: '#fff' },
                  { text: 'Observacion/Justificación/Ausencia', bold: true, fillColor: '#fff' },
                ],
                // Filas dinámicas
                ...asistentes.map((item) => [
                  item.RAZONSOCIAL,
                  item.OBSERVACION
                ])
              ]
            },
            margin: [0, 5, 0, 0],
            layout: {
              paddingLeft: () => 0,
              paddingBottom: () => 0,
              paddingTop: () => 0,
              hLineWidth: function (i, node) {
                // Solo dibuja la línea inferior del encabezado
                return i === 1 ? 1.5 : 0;
              },
              vLineWidth: function () {
                return 0; // Sin líneas verticales
              },
              hLineColor: function () {
                return '#1279C0'; // Color de la línea
              }
            }
          },
          {
            text: 'Orden del Día',
            bold: true,
            alignment: 'left',
            margin: [0, 5, 0, 0], // ajusta verticalmente el texto si quieres
          }, {
            canvas: [
              {
                type: 'line',
                x1: 0,           // desde el borde izquierdo
                y1: 0,
                x2: 515,         // ancho del contenido (A4 ~ 515pt)
                y2: 0,
                lineWidth: 1.5,
                lineColor: '#1279C0'
              }
            ]
          },
          ...(orden.ORDENDIA ? htmlToPdfmake(orden.ORDENDIA) : []),
          {
            text: 'Desarrollo',
            bold: true,
            alignment: 'left',
            margin: [0, 5, 0, 0], // ajusta verticalmente el texto si quieres
          }, {
            canvas: [
              {
                type: 'line',
                x1: 0,           // desde el borde izquierdo
                y1: 0,
                x2: 515,         // ancho del contenido (A4 ~ 515pt)
                y2: 0,
                lineWidth: 1.5,
                lineColor: '#1279C0'
              }
            ]
          },
          ...(orden.DESARROLLO ? htmlToPdfmake(orden.DESARROLLO) : []),
          {
            text: 'Acuerdos / Compromisos',
            bold: true,
            alignment: 'left',
            margin: [0, 5, 0, 0], // ajusta verticalmente el texto si quieres
          }, {
            canvas: [
              {
                type: 'line',
                x1: 0,           // desde el borde izquierdo
                y1: 0,
                x2: 515,         // ancho del contenido (A4 ~ 515pt)
                y2: 0,
                lineWidth: 1.5,
                lineColor: '#1279C0'
              }
            ]
          },
          ...(orden.ACUERDOS ? htmlToPdfmake(orden.ACUERDOS) : []),
          {
            text: 'Documentos Adjuntos',
            bold: true,
            alignment: 'left',
            margin: [0, 5, 0, 0], // ajusta verticalmente el texto si quieres
          }, {
            canvas: [
              {
                type: 'line',
                x1: 0,           // desde el borde izquierdo
                y1: 0,
                x2: 515,         // ancho del contenido (A4 ~ 515pt)
                y2: 0,
                lineWidth: 1.5,
                lineColor: '#1279C0'
              }
            ]
          },
          {
            table: {
              headerRows: 0,
              widths: ['*'], // ajusta el número y tamaño de columnas
              body: adjuntosList
            },
            margin: [0, 5, 0, 0],
            layout: {
              paddingLeft: () => 0,
              paddingBottom: () => 0,
              paddingTop: () => 0,
              hLineWidth: function (i, node) {
                // Solo dibuja la línea inferior del encabezado
                return i === 0 ? 0 : 0;
              },
              vLineWidth: function () {
                return 0; // Sin líneas verticales
              },
            }
          }
        ],
        defaultStyle: {
          fontSize: 9  // <- tamaño de fuente predeterminado en puntos
        },
        footer: function (currentPage, pageCount) {
          return {
            margin: [40, 0, 40, 0], // márgenes más pequeños
            columns: [
              {
                image: piePaginaLogo,
                width: 90,
                height: 30,
                margin: [0, 0, 10, 0]
              },
              {
                width: '*',
                stack: [
                  {
                    text: `Página ${currentPage} de ${pageCount}`,
                    alignment: 'center',
                    fontSize: 6.5,
                    margin: [0, 0, 0, 2]
                  },
                  {
                    canvas: [
                      {
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 415,
                        y2: 0,
                        lineWidth: 1.5,
                        lineColor: '#AA1F22'
                      }
                    ],
                    margin: [0, 0, 0, 3]
                  },
                  {
                    text: 'Km 12.5 vía Samborondón',
                    alignment: 'center',
                    fontSize: 6.5,
                    margin: [0, 0, 0, 1]
                  },
                  {
                    text: 'Telfs: (5934) 2 590720 -5001072 5001073',
                    alignment: 'center',
                    fontSize: 6.5,
                    margin: [0, 0, 0, 1]
                  },
                  {
                    text: 'www.uedelta.k12.ec',
                    alignment: 'center',
                    fontSize: 6.5,
                    margin: [0, 0, 0, 0]
                  }
                ]
              }
            ]
          };
        }

      };

      pdfMake.createPdf(docDefinition).open();
    } catch (e) {
      console.error('Error al generar el PDF:', e);
    }
  }
}
