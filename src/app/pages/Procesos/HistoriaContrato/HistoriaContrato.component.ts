import { Component, OnInit } from '@angular/core';
import { EmpAntiguedad } from 'src/app/core/models/antiguedadEmp';
import { User } from 'src/app/core/models/auth.models';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { GlobalComponent } from 'src/app/global-component';
import { forkJoin } from 'rxjs';

type EmpleadoLookup = {
  NUMCEDULA: string;
  RAZONSOCIAL: string;
  NORMALIZED: string;
};

@Component({
  selector: 'app-HistoriaContrato',
  templateUrl: './HistoriaContrato.component.html',
  styleUrls: ['./HistoriaContrato.component.css']
})
export class HistoriaContratoComponent implements OnInit {
  user!: User;
  Datos: any;
  Empleados: { NUMCEDULA: string; RAZONSOCIAL: string }[] = [];
  anio: number = 0;
  Colegios: any;
  trol: any;
  MotivosSalida: any;
  DetalleSalidas: string[] = [];
  DetalleSalidasBase: string[] = [
    'Renuncia voluntaria',
    'Renuncia por motivos personales',
    'Terminación de contrato por mutuo acuerdo',
    'Reducción de personal',
    'Fin de contrato por tiempo definido',
    'Falta grave',
    'Jubilación',
    'Cambio de sección',
    'No renovación de contrato'
  ];

  constructor(private servicios: EventService, private loading: LoadingService) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.Colegios = [
      { VALOR: 3, TEXTO: 'Delta' },
      { VALOR: 4, TEXTO: 'Presco' }
    ];
    this.trol = [
      { VALOR: 'R', TEXTO: 'Rol' },
      { VALOR: 'V', TEXTO: 'Evenual' },
      { VALOR: 'E', TEXTO: 'Pasante' },
      { VALOR: 'P', TEXTO: 'Por hora' },
      { VALOR: 'H', TEXTO: 'Honorario' },
      { VALOR: 'J', TEXTO: 'Jubilado' },
    ];
    this.MotivosSalida = [
      { VALOR: 'T', TEXTO: 'Termino de Contrato' },
      { VALOR: 'R', TEXTO: 'Renuncia' },
      { VALOR: 'D', TEXTO: 'Despido' },
      { VALOR: 'C', TEXTO: 'Cambio de Sección' },
      { VALOR: 'J', TEXTO: 'Jubilación' },
      { VALOR: 'F', TEXTO: 'Fallecimiento' },
    ];
  }
  ngOnInit() {
    this.loading.showSpinner2("Consultando")
    this.cargarDatosIniciales();
  }
  private cargarDatosIniciales(): void {
    forkJoin({
      empleados: this.servicios.ListaxCedulaSinEmpresa(
        this.user.Nombre!,
        this.user.password!
      ),
      contratos: this.servicios.ListaAntiguedadEmpresa(
        this.user.Nombre!,
        this.user.password!
      )
    }).subscribe({
      next: ({ empleados, contratos }) => {
        this.Empleados = this.buildEmpleadoLookup(empleados);
        this.Datos = this.mapearContratosConNombre(contratos, this.Empleados);
        this.buildDetalleSalidas(this.Datos);
        this.loading.closeSpinner();
      },
      error: (error: any) => {
        this.loading.closeSpinner();
        this.loading.showMensajeError(error.message);
      }
    });
  }

  private recargarContratos(): void {
    this.servicios
      .ListaAntiguedadEmpresa(
        this.user.Nombre!,
        this.user.password!
      )
      .subscribe({
        next: (contratos: any[]) => {
          this.Datos = this.mapearContratosConNombre(contratos, this.Empleados);
          this.buildDetalleSalidas(this.Datos);
        },
        error: (error: any) => {
          this.loading.showMensajeError(error.message);
        }
      });
  }

  private normalizeText(value: string): string {
    if (!value) {
      return '';
    }

    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  private buildEmpleadoLookup(empleados: any): EmpleadoLookup[] {
    if (!Array.isArray(empleados)) {
      return [];
    }

    const seenCedulas = new Set<string>();

    return empleados
      .map((emp: any) => ({
        NUMCEDULA: String(emp?.NUMCEDULA ?? ''),
        RAZONSOCIAL: String(emp?.RAZONSOCIAL ?? '').trim()
      }))
      .filter((emp: { NUMCEDULA: string; RAZONSOCIAL: string }) => !!emp.NUMCEDULA)
      .map((emp) => ({
        ...emp,
        NORMALIZED: this.normalizeText(emp.RAZONSOCIAL)
      }))
      .filter((emp) => {
        if (seenCedulas.has(emp.NUMCEDULA)) {
          return false;
        }

        seenCedulas.add(emp.NUMCEDULA);
        return true;
      })
      .sort((a, b) => a.RAZONSOCIAL.localeCompare(b.RAZONSOCIAL));
  }

  private mapearContratosConNombre(
    contratos: any[],
    empleados: EmpleadoLookup[]
  ): any[] {
    if (!Array.isArray(contratos)) {
      return [];
    }

    return contratos.map((row: any) => {
      const cedula = String(row?.IDENTIFICACION ?? '');
      const empleado = empleados.find((x: any) => x.NUMCEDULA === cedula);
      const nombre = empleado?.RAZONSOCIAL ?? '';

      return {
        ...row,
        NOMBRE: nombre,
        NOMBRE_NORMALIZED: this.normalizeText(nombre)
      };
    });
  }

  private buildDetalleSalidas(data: any[]) {
    const set = new Set<string>();

    this.DetalleSalidasBase.forEach(v => set.add(v));

    (data ?? []).forEach((row: any) => {
      const val = row?.DETALLE_TERM;
      if (val != null) {
        const s = String(val).trim();
        if (s) {
          set.add(s);
        }
      }
    });

    this.DetalleSalidas = Array.from(set).sort((a, b) => a.localeCompare(b));
  }
  
  empleadoSortValue = (rowData: any) => {
    if (!this.Empleados || !rowData) {
      return '';
    }

    // IDENTIFICACION viene en el rowData (cédula)
    const cedula = String(rowData.IDENTIFICACION);

    const emp = this.Empleados.find((x) => x.NUMCEDULA === cedula);
    // Devuelve el nombre, que es lo que queremos para ordenar / agrupar
    return emp ? emp.RAZONSOCIAL : '';
  };
  onCellPrepared(e: any) {
    // Solo filas de grupo del PRIMER nivel (groupIndex = 0 → IDENTIFICACION)
    if (e.rowType === 'group' && e.row?.groupIndex === 0) {

      // e.data.items = todas las filas (contratos) de ese empleado
      const items = e.data?.items ?? [];

      // Tomamos la antigüedad de la primera fila del grupo
      // (si quieres otra lógica luego la cambiamos)
      let antiguedad = '';
      if (items.length > 0) {
        antiguedad = items[0].ANTIGUEDAD || '';
      }

      if (antiguedad) {
        // Texto que el grid ya estaba mostrando en la fila de grupo
        const baseText = e.text || e.cellElement.innerText || '';

        // Sobrescribimos el texto de la celda de grupo
        e.cellElement.innerText = `${baseText} - Antigüedad: ${antiguedad}`;
      }
    }
  }
  onEditorPreparing(e: any) {
    // Solo nos interesa en filas de datos
    if (e.parentType !== 'dataRow') {
      return;
    }

    if (e.dataField === 'IDENTIFICACION') {
      e.editorOptions.searchEnabled = true;
      e.editorOptions.searchExpr = ['RAZONSOCIAL', 'NUMCEDULA', 'NORMALIZED'];
      e.editorOptions.searchMode = 'contains';
      e.editorOptions.minSearchLength = 0;
      e.editorOptions.showDataBeforeSearch = true;
    }

    // Columna Detalle Salida
    if (e.dataField === 'DETALLE_TERM') {

      // === OPCIÓN A: dxSelectBox (lista + búsqueda) ===
      /*e.editorName = 'dxSelectBox';
      e.editorOptions = {
        dataSource: this.DetalleSalidas, // origen de datos
        searchEnabled: true,             // permite escribir para filtrar
        showClearButton: true,
        value: e.value,
        // como el array es de string, no necesitamos valueExpr/displayExpr
        onValueChanged: (args: any) => {
          e.setValue(args.value);
        }
      };*/

      // === OPCIÓN B: Autocomplete (texto libre + sugerencias) ===
      // Si prefieres que pueda escribir cualquier cosa y solo usar la lista como sugerencia:

      e.editorName = 'dxAutocomplete';
      e.editorOptions = {
        dataSource: this.DetalleSalidas,
        minSearchLength: 0,
        value: e.value,
        onValueChanged: (args: any) => {
          e.setValue(args.value);
        }
      };

    }
  }
  private buildEmpAntiguedad(row: any): EmpAntiguedad {
    return {
      ID_CONTRATO: row.ID_CONTRATO ?? 0,
      IDENTIFICACION: row.IDENTIFICACION ?? '',
      FECHA_DESDE: row.FECHA_DESDE ?? new Date(),
      FECHA_HASTA: row.FECHA_HASTA ?? null,
      ID_EMPRESA: row.ID_EMPRESA ?? 0,
      OBSERVACION: row.OBSERVACION ?? '',
      TIPCONTRATO: row.TIPCONTRATO ?? '',
      TERM_CONTRATO: row.TERM_CONTRATO ?? '',
      ESTADO_REGISTRO: row.ESTADO_REGISTRO ?? 'A',
      DETALLE_TERM: row.DETALLE_TERM ?? ''
    };
  }
  onRowUpdating(e: any) {
    const row = { ...e.oldData, ...e.newData };
    const datos = this.buildEmpAntiguedad(row);
    // 🔹 Llamada al servicio que actualiza en el servidor
    this.servicios
      .ActualizarContrato(this.user.Nombre!, this.user.password!, datos)
      .subscribe({
        next: () => {
          this.loading.showMensajesuccess('Contrato actualizado correctamente');
          this.recargarContratos();
        },
        error: (err: any) => {
          this.loading.showMensajeError('Error al guardar: ' + err.message);
        }
      });
  }
  onRowInserting(e: any) {
    const row = e.data;
    const datos = this.buildEmpAntiguedad(row);

    // Evitamos que DevExtreme haga el insert automático
    e.cancel = true;

    this.servicios
      .InsertarContrato(this.user.Nombre!, this.user.password!, datos)
      .subscribe({
        next: () => {
          this.loading.showMensajesuccess('Contrato insertado correctamente');

          // 🔹 Recargar los datos
          this.recargarContratos();

          // 🔹 Cerrar el popup de edición
          e.component.cancelEditData();
        },
        error: (err: any) => {
          this.loading.showMensajeError('Error al insertar: ' + err.message);
        }
      });
  }
  onRowRemoving(e: any) {
    // Evitamos que DevExtreme haga el delete por sí mismo
    e.cancel = true;

    const row = e.data; // fila completa
    const id = row.ID_CONTRATO;

    // Confirmación básica
    /*const ok = confirm(`¿Eliminar el contrato #${id}?`);
    if (!ok) {
      return;
    }*/

    this.servicios
      .DeleteContrato(this.user.Nombre!, this.user.password!, id)
      .subscribe({
        next: () => {
          this.loading.showMensajesuccess('Contrato eliminado correctamente');
          this.recargarContratos(); // recargar la grilla
        },
        error: (err: any) => {
          this.loading.showMensajeError('Error al eliminar: ' + err.message);
        }
      });
  }
}
