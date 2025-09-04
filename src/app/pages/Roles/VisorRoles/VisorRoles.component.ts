import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { User } from 'src/app/core/models/auth.models';
import { CacheService } from 'src/app/core/services/cache.service';
import { EventService } from 'src/app/core/services/event.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { RolesService } from 'src/app/core/services/Roles.service';
import { GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-VisorRoles',
  templateUrl: './VisorRoles.component.html',
  styleUrls: ['./VisorRoles.component.css']
})
export class VisorRolesComponent implements OnInit {
  user!: User;
  Datos: any;
  Fecha: Date = new Date();
  ccosto: any;
  ccostoSelect: string = "D";
  trol: any;
  trolSelect: string = "R";
  constructor(private servicios: EventService, private rol: RolesService, private router: Router, private loading: LoadingService, private cacheService: CacheService,) {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Consultando");
    this.ccosto = [
      { VALOR: 'C', TEXTO: 'Consejo Directivo' },
      { VALOR: 'D', TEXTO: 'Docente - Administrativo' },
      { VALOR: 'S', TEXTO: 'Servicios Generales' }
    ];
    this.trol = [
      { VALOR: 'R', TEXTO: 'ROL - EVENTUAL' },
      { VALOR: 'E', TEXTO: 'PASANTE' },
      { VALOR: 'H', TEXTO: 'HONORARIO' },
      { VALOR: 'J', TEXTO: 'JUBILADO' }
    ];
    this.CargarDatos();
  }
  onSelectChange(e: any) {
    this.CargarDatos();
  }
  ngOnInit() {
  }
  CargarDatos() {
    this.rol.VerListadoRol(
      this.user.Nombre!,
      this.user.password!,
      this.user.ID_EMPRESA!,
      this.Fecha,
      this.ccostoSelect,
      this.trolSelect
    )
      .subscribe({
        next: (data: any) => {
          this.Datos = data;
          this.Datos = this.Datos.map((item: any) => ({
            ...item,
            ESTADO_BOOL: item.ACTIVO === 'S'
          }));
          this.loading.closeSpinner();
          //this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error.message);
        },
      });
  }
  verPdf = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
    const empleado = Number(e.row?.data.CODEMP);
    this.loading.showSpinner2("Descargando...");
    try {

      this.rol.ImprimeRolIndividual(this.user.Nombre!,
        this.user.password!,this.user.ID_EMPRESA!,this.Fecha, empleado).subscribe({
          next: (value: Blob) => {
            const url = window.URL.createObjectURL(value);
            window.open(url, '_blank');
            this.loading.closeSpinner();
          },
          error: (error: any) => {
            this.loading.closeSpinner();
            this.loading.showMensajeError(error.message);
          },
        });

    } catch (error: any) {
      this.loading.closeSpinner();
      this.loading.showMensajeError(error.message);
    }
  }
}
