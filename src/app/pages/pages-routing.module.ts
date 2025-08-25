import { InfoempleadoComponent } from './Mantenimientos/infoempleado/infoempleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { UsuarioComponent } from './usuario/usuario.component';
import { EmpleadosComponent } from './Mantenimientos/empleados/empleados.component';
import { CantonesComponent } from './Mantenimientos/cantones/cantones.component';
import { PaisesComponent } from './Mantenimientos/paises/paises.component';
import { ProvinciasComponent } from './Mantenimientos/provincias/provincias.component';
import { OrlasComponent } from './Reportes/Orlas/Orlas.component';
import { CumpleaniosPersonalComponent } from './Reportes/CumpleaniosPersonal/CumpleaniosPersonal.component';
import { NumeroAlumnasComponent } from './ConsultasAcademicas/NumeroAlumnas/NumeroAlumnas.component';
import { ConsultaActasReunionComponent } from './Reportes/ConsultaActasReunion/ConsultaActasReunion.component';
import { ListaCapacitacionesComponent } from './Reportes/ListaCapacitaciones/ListaCapacitaciones.component';
import { ListaDatosEmpleadosComponent } from './Reportes/ListaDatosEmpleados/ListaDatosEmpleados.component';
import { JefesAreaComponent } from './ConsultasAcademicas/JefesArea/JefesArea.component';
import { PegPreceptoraComponent } from './ConsultasAcademicas/PegPreceptora/PegPreceptora.component';
import { ComparaRolesComponent } from './Roles/ComparaRoles/ComparaRoles.component';
import { ActualizaDatosComponent } from './Reportes/ActualizaDatos/ActualizaDatos.component';
import { TitulosEmpComponent } from './Reportes/TitulosEmp/TitulosEmp.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "usuario",
    component: UsuarioComponent
  },
  {
    path: "empleados",
    component: EmpleadosComponent
  },
  {
    path: "Orlas",
    component: OrlasComponent
  },
  {
    path: "CumpleaniosPersonal",
    component: CumpleaniosPersonalComponent
  },
  {
    path: "NumeroAlumnas",
    component: NumeroAlumnasComponent
  },

  {
    path: "ConsultaActasReunion",
    component: ConsultaActasReunionComponent
  },
  {
    path: "ListaCapacitaciones",
    component: ListaCapacitacionesComponent
  },
{
    path: "ListaDatosEmpleados",
    component: ListaDatosEmpleadosComponent
  },
  {
    path: "JefesArea",
    component: JefesAreaComponent
  },
  {
    path: "PegPreceptora",
    component: PegPreceptoraComponent
  },
  {
    path: "empleadosdetalle",
    component: InfoempleadoComponent
  },
  {
    path: "ComparaRoles",
    component: ComparaRolesComponent
  },
  {
    path: "ActualizaDatos",
    component: ActualizaDatosComponent
  },
    {
    path: "TitulosEmp",
    component: TitulosEmpComponent
  },
  {
    path: "paises",
    component: PaisesComponent
  },
  {
    path: "provincias",
    component: ProvinciasComponent
  },
  {
    path: "cantones",
    component: CantonesComponent
  },
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  {
    path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
  },
  {
    path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: 'crm', loadChildren: () => import('./crm/crm.module').then(m => m.CrmModule)
  },
  {
    path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule)
  },
  {
    path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)
  },
  {
    path: 'tickets', loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    path: 'pages', loadChildren: () => import('./extrapages/extraspages.module').then(m => m.ExtraspagesModule)
  },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  {
    path: 'advance-ui', loadChildren: () => import('./advance-ui/advance-ui.module').then(m => m.AdvanceUiModule)
  },
  {
    path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  {
    path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'marletplace', loadChildren: () => import('./nft-marketplace/nft-marketplace.module').then(m => m.NftMarketplaceModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
