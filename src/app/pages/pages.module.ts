import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbToastModule, NgbProgressbarModule,
  NgbNavModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

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
import { DxDataGridModule, DxSelectBoxModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';

import { NgSelectModule } from '@ng-select/ng-select';

import { LoadingComponent } from './loading/loading.component';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { EmpleadosComponent } from './empleados/empleados.component';
import { InfoempleadoComponent } from './infoempleado/infoempleado.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ToastsContainer,
    UsuarioComponent,
    LoadingComponent,
    EmpleadosComponent,
    InfoempleadoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
    NgbProgressbarModule,DropzoneModule,NgbDatepickerModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgApexchartsModule,NgbNavModule,
    LeafletModule,
    NgbDropdownModule,NgSelectModule,
    SimplebarAngularModule,
    PagesRoutingModule,DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
    SharedModule,
    WidgetModule,
    NgxUsefulSwiperModule,
    LightboxModule,
    DashboardsModule,
    AppsModule,DxDataGridModule,
    EcommerceModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { 
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
