import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-DocumentoEncargos',
  templateUrl: './DocumentoEncargos.component.html',
  styleUrls: ['./DocumentoEncargos.component.css']
})
export class DocumentoEncargosComponent implements OnInit {
  user!: User;
  Datos: any;
  DatosR: any;
  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService, private sanitizer: DomSanitizer,) {

    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")

  }

  ngOnInit() {
    this.CargarDatos();
  }

  CargarDatos() {
    this.servicios
      .ListaEncargos(
        this.user.Nombre!,
        this.user.password!,
        this.user.ID_EMPRESA!
      )
      .subscribe({
        next: (data: any) => {
          this.Datos = data;
          // agrupar por persona
          this.DatosR = this.Datos.reduce((acc: any, item: any) => {
            if (!acc[item.NUMCEDULA]) {
              acc[item.NUMCEDULA] = { persona: item, encargos: [] };
            }
            acc[item.NUMCEDULA].encargos.push(item);
            // ordenar los encargos por el campo ORDEN
            acc[item.NUMCEDULA].encargos.sort((a: any, b: any) => {
              if (a.ORDEN < b.ORDEN) return -1;
              if (a.ORDEN > b.ORDEN) return 1;
              return 0;
            });
            return acc;
          }, {});
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }

  formatFecha(fecha: Date) {
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    return `${dia} de ${mes} de ${año}`;
  }

  public generarAsignacion() {
    let Colegio = this.user.ID_EMPRESA == 3 ? 'Unidad Educativa Bilingüe Delta' : 'Presco DeltaTorremar';
    // Convertir objeto agrupado en array
    const personas = Object.values(this.DatosR).sort((a: any, b: any) => {
      if (a.persona.RAZONSOCIAL < b.persona.RAZONSOCIAL) return -1;
      if (a.persona.RAZONSOCIAL > b.persona.RAZONSOCIAL) return 1;
      return 0;
    });

    const content: any[] = [];

    personas.forEach((p: any, index: number) => {
      const persona = p.persona;
      const encargos = p.encargos;
      const listaEncargos = encargos
        .map((e: any) => (e.ENCARGO ? e.ENCARGO.trim() : ''))
        .filter((encargo: string) => encargo !== '') // eliminar vacíos
        .join(', ');
      content.push(
        {
          text: 'Daule, 5 de mayo de 2025', //+ this.formatFecha(new Date()),
          fontSize: 11,
          bold: false,
          alignment: 'left',
          margin: [0, 10, 0, 0],
        },
        '\n', '\n', '\n',
        {
          text: 'Asignación de funciones',
          fontSize: 14,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Año lectivo 2025-2026',
          fontSize: 14,
          bold: true,
          alignment: 'center',
        },
        '\n', '\n',
        {
          text: [
            'Yo, ',
            { text: persona.RAZONSOCIAL, bold: true },
            ' con C.I. ',
            { text: persona.NUMCEDULA, bold: true },
            ' acepto el (los) encargo(s) temporal(es) asignados por COPECE - ' + Colegio + ' consistente en: ',
            { text: listaEncargos.trim(), bold: true },
            '; comprometiéndome a cumplir con las responsabilidades y actividades inherentes a dichas funciones temporales, durante el año lectivo.\n', '\n',
            'Por el desempeño de este(os) encargo(s) temporal(es), recibiré condicionalmente el pago correspondiente durante los diez meses de clases establecidos en el cronograma de actividades del Ministerio de Educación:',
          ], alignment: 'justify',
        },
        '\n', '\n', '\n',
        {
          table: {
            widths: ['*', 'auto'],
            body: [
              [
                { text: 'Descripción del Encargo Temporal', style: 'tableHeader' },
                { text: 'Ingreso variable 2025', style: 'tableHeader' }
              ],
              ...encargos.map((e: any) => [
                e.ENCARGO,
                { text: (e.PAGO_ADIC || 0).toLocaleString('es-EC', { style: 'currency', currency: 'USD' }), alignment: 'right' }
              ])
            ]
          },
          layout: {
            hLineWidth: () => 1, // ancho de línea horizontal
            vLineWidth: () => 1, // ancho de línea vertical
            hLineColor: () => 'black',
            vLineColor: () => 'black',
            paddingLeft: () => 5,   // espacio a la izquierda
            paddingRight: () => 5,  // espacio a la derecha
            paddingTop: () => 3,
            paddingBottom: () => 3
          },
          margin: [20, 0, 20, 0]
        },
        '\n\n',
        { text: 'Atentamente,\n\n\n\n\n_________________________________________', margin: [0, 20, 0, 0] },
        { text: persona.RAZONSOCIAL, bold: true },
        { text: `C.I. ${persona.NUMCEDULA}` },
        // 👇 salto de página para la siguiente persona
        ...(index < personas.length - 1 ? [{ text: '', pageBreak: 'after' }] : [])
      );
    });

    const docDefinition: TDocumentDefinitions = {
      content,
      styles: {
        tableHeader: { bold: true, fontSize: 12 }
      }
    };
    pdfMake.createPdf(docDefinition).open();
  }


}
