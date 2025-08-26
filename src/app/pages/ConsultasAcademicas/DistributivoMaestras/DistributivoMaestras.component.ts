import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
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

}
