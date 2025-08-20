import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import { DxDataGridComponent } from 'devextreme-angular';
interface Peg {
  NIV_CODNIVEL: number;
  CURSO: string;
  NOMBREPEG: string;
  PRECEPTORA: string;
  NUMALUMNAS: number;
}

@Component({
  selector: 'app-PegPreceptora',
  templateUrl: './PegPreceptora.component.html',
  styleUrls: ['./PegPreceptora.component.css']
})
export class PegPreceptoraComponent implements OnInit {
  @ViewChild('gridContainer', { static: false }) gridContainer!: DxDataGridComponent;
  Pegs: Peg[] = [];
  PeriodoLectivo: any;
  Secciones: any;
  seleccionadas: any;
  PeriodoSelect: string = '';
  user!: User;
  MostrarPeg: boolean = true;
  MostrarPreceptora: boolean = true;
  Preceptoras: any;
  tabSeleccionada: number = 0;

  constructor(private servicios: EventService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando")
  }
  ngOnInit() {
    this.CargarPeriodo();
  }

  customSortNivel = (a: string, b: string): number => {
    const nivelMap: Record<string, number> = {};
    this.Pegs.forEach(p => nivelMap[p.CURSO] = p.NIV_CODNIVEL);

    const nivelA = nivelMap[a] ?? 0;
    const nivelB = nivelMap[b] ?? 0;

    return nivelA - nivelB;
  };
  selectPeriodo({ value }: { value?: string }) {
    if (value !== undefined) {
      this.PeriodoSelect = value;
    }
    this.loading.showSpinner2("Consultando")
    this.CargaGrid();
  }
  CambioSeccion(e: any) {
    this.loading.showSpinner2("Consultando")
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
      .ListadoPEGsxSeccion(
        this.user.Nombre!,
        this.user.password!,
        this.PeriodoSelect!,
        this.seleccionadas!
      )
      .subscribe({
        next: (data: Peg[]) => {
          this.Pegs = data;
          setTimeout(() => {
            if (this.gridContainer) {
              this.gridContainer.instance.refresh();
            }
          }, 0);
          //this.loading.closeSpinner();
          this.CargaGridPreceptoras();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  CargaGridPreceptoras() {
    this.servicios
      .ListadoPreceptorasxSeccion(
        this.user.Nombre!,
        this.user.password!,
        this.PeriodoSelect!,
        this.seleccionadas!
      )
      .subscribe({
        next: (data: any) => {
          this.Preceptoras = data;
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  descargarEXCEL() {
    try {
      this.loading.showSpinner2("Consultando")

      this.servicios.PEGPreceptoras(this.user.Nombre!,
        this.user.password!, this.PeriodoSelect!, this.seleccionadas!, this.user.ID_EMPRESA!, this.MostrarPeg ? 'S' : 'N'!, this.MostrarPreceptora ? 'S' : 'N'!)
        .subscribe(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `PegPreceptora_${new Date().toISOString().slice(0, 10)}.xlsx`;
          a.click();
          window.URL.revokeObjectURL(url);
          this.loading.closeSpinner();
        }, error => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        });

    } catch (error: any) {
      this.loading.closeSpinner();
      this.loading.showMensajeError(error.message);
    }
  }
}
