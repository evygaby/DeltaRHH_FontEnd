import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbToastModule, NgbProgressbarModule,
  NgbNavModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import { FlatpickrModule } from 'angularx-flatpickr';

import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider


import { LightboxModule } from 'ngx-lightbox';

// Load Icons
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Pages Routing
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { WidgetModule } from '../shared/widget/widget.module';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { ToastsContainer } from './dashboards/dashboard/toasts-container.component';
import { DashboardsModule } from "./dashboards/dashboards.module";
import { AppsModule } from "./apps/apps.module";
import { EcommerceModule } from "./ecommerce/ecommerce.module";
import { UsuarioComponent } from './usuario/usuario.component';
import { DxBoxModule, DxCardViewModule, DxCheckBoxModule, DxListModule, DxDataGridModule, DxDateBoxModule, DxNumberBoxModule, DxSelectBoxModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule, DxTreeMapModule, DxDateRangeBoxModule, DxPivotGridModule, DxToolbarModule, DxButtonModule, DxPivotGridFieldChooserModule, DxScrollViewModule, DxTabPanelModule, DxFileUploaderModule, DxPopupModule, DxFormModule, DxValidatorModule  } from 'devextreme-angular';
import { NgSelectModule } from '@ng-select/ng-select';

import { LoadingComponent } from './loading/loading.component';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { EmpleadosComponent } from './Mantenimientos/empleados/empleados.component';
import { InfoempleadoComponent } from './Mantenimientos/infoempleado/infoempleado.component';
import { MatNativeDateModule } from '@angular/material/core';
import { PaisesComponent } from './Mantenimientos/paises/paises.component';
import { CantonesComponent } from './Mantenimientos/cantones/cantones.component';
import { ProvinciasComponent } from './Mantenimientos/provincias/provincias.component';
import { CurrencyInputDirective } from './Mantenimientos/infoempleado/currency-input.directive';
import { AutoFocusInvalidDirective } from './Mantenimientos/infoempleado/AutoFocusInvalidDirective';
import { OrlasComponent } from './Reportes/Orlas/Orlas.component';
import { CumpleaniosPersonalComponent } from './Reportes/CumpleaniosPersonal/CumpleaniosPersonal.component';
import { NumeroAlumnasComponent } from './ConsultasAcademicas/NumeroAlumnas/NumeroAlumnas.component';
import { ConsultaActasReunionComponent } from './Reportes/ConsultaActasReunion/ConsultaActasReunion.component';
import { ListaCapacitacionesComponent } from './Reportes/ListaCapacitaciones/ListaCapacitaciones.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListaDatosEmpleadosComponent } from './Reportes/ListaDatosEmpleados/ListaDatosEmpleados.component';
import { JefesAreaComponent } from './ConsultasAcademicas/JefesArea/JefesArea.component';
import { PegPreceptoraComponent } from './ConsultasAcademicas/PegPreceptora/PegPreceptora.component';
import { ComparaRolesComponent } from './Roles/ComparaRoles/ComparaRoles.component';
import { ActualizaDatosComponent } from './Procesos/ActualizaDatos/ActualizaDatos.component';
import { TitulosEmpComponent } from './Reportes/TitulosEmp/TitulosEmp.component';
import { DocumentoEncargosComponent } from './Reportes/DocumentoEncargos/DocumentoEncargos.component';
import { DistributivoMaestrasComponent } from './ConsultasAcademicas/DistributivoMaestras/DistributivoMaestras.component';
import { ComparaIESSComponent } from './Procesos/ComparaIESS/ComparaIESS.component';
import { PrestamoSaldosComponent } from './Reportes/PrestamoSaldos/PrestamoSaldos.component';
import { VisorRolesComponent } from './Roles/VisorRoles/VisorRoles.component';
import { CargasFamiliaresComponent } from './Procesos/CargasFamiliares/CargasFamiliares.component';
import { HorariosSGEComponent } from './Mantenimientos/HorariosSGE/HorariosSGE.component';
import { ComparaMensualComponent } from './Roles/ComparaMensual/ComparaMensual.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ToastsContainer, CurrencyInputDirective, AutoFocusInvalidDirective,
    UsuarioComponent,
    LoadingComponent,
    EmpleadosComponent,
    InfoempleadoComponent,
    OrlasComponent,
    PaisesComponent,
    CantonesComponent,
    ProvinciasComponent,
    NumeroAlumnasComponent,
    CumpleaniosPersonalComponent,
    ConsultaActasReunionComponent,
    ListaCapacitacionesComponent,
    ListaDatosEmpleadosComponent,
    JefesAreaComponent,
    PegPreceptoraComponent,
    ComparaRolesComponent,
    ComparaMensualComponent,
    ActualizaDatosComponent,
    TitulosEmpComponent,
    DocumentoEncargosComponent,
    DistributivoMaestrasComponent,
    ComparaIESSComponent,
    PrestamoSaldosComponent, 
    VisorRolesComponent, 
    CargasFamiliaresComponent, 
    HorariosSGEComponent,
  ],
  exports: [AutoFocusInvalidDirective],
  imports: [
    CommonModule, DxNumberBoxModule,
    FormsModule, DxCheckBoxModule, DxDateBoxModule, MatNativeDateModule,
    NgbToastModule, DxTextAreaModule,
    NgbProgressbarModule, DropzoneModule, NgbDatepickerModule,
    FlatpickrModule.forRoot(),
    ReactiveFormsModule,
    NgApexchartsModule, NgbNavModule,
    LeafletModule,
    NgbDropdownModule, NgSelectModule, DxBoxModule,
    SimplebarAngularModule,
    PagesRoutingModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
    SharedModule,
    WidgetModule,
    DxCardViewModule,
    DxTreeMapModule,
    DxListModule,
    LightboxModule,
    DashboardsModule,
    AppsModule,
    DxDataGridModule,
    EcommerceModule,
    DxDateRangeBoxModule,
    DxPivotGridModule,
    DxFileUploaderModule,
    DxToolbarModule,
    DxButtonModule,
    DxPivotGridFieldChooserModule,
    DxScrollViewModule,
    DxTabPanelModule, DxPopupModule, DxFormModule, DxValidatorModule,DxDateBoxModule ,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
