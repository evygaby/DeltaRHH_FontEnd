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
import { ActualizaDatosComponent } from './Procesos/ActualizaDatos/ActualizaDatos.component';
import { TitulosEmpComponent } from './Reportes/TitulosEmp/TitulosEmp.component';
import { DocumentoEncargosComponent } from './Reportes/DocumentoEncargos/DocumentoEncargos.component';
import { DistributivoMaestrasComponent } from './ConsultasAcademicas/DistributivoMaestras/DistributivoMaestras.component';
import { ComparaIESSComponent } from './Procesos/ComparaIESS/ComparaIESS.component';
import { PrestamoSaldosComponent } from './Reportes/PrestamoSaldos/PrestamoSaldos.component';
import { VisorRolesComponent } from './Roles/VisorRoles/VisorRoles.component';
import { MenuGuard } from '../guards/menu.guard';
import { HomeComponent } from './Home/Home.component';
import { CargasFamiliaresComponent } from './Procesos/CargasFamiliares/CargasFamiliares.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "usuario",
    component: UsuarioComponent
  },
  {path: "Home", component: HomeComponent},

  ///////////ACADEMICO
  {path: "DistributivoMaestras", component: DistributivoMaestrasComponent, canActivate: [MenuGuard]},
  {path: "JefesArea", component: JefesAreaComponent, canActivate: [MenuGuard]},
  {path: "NumeroAlumnas", component: NumeroAlumnasComponent, canActivate: [MenuGuard]},
  {path: "PegPreceptora", component: PegPreceptoraComponent, canActivate: [MenuGuard]},

  ///////////MANTENIMIENTOS
  {path: "cantones", component: CantonesComponent, canActivate: [MenuGuard]},
  {path: "empleados", component: EmpleadosComponent, canActivate: [MenuGuard]},
  {path: "empleadosdetalle", component: InfoempleadoComponent, canActivate: [MenuGuard]},
  {path: "paises", component: PaisesComponent, canActivate: [MenuGuard]},
  {path: "provincias", component: ProvinciasComponent, canActivate: [MenuGuard]},

  ///////////PROCESOS DE ROL
  {path: "ComparaRoles", component: ComparaRolesComponent, canActivate: [MenuGuard]},
  {path: "VisorRoles", component: VisorRolesComponent, canActivate: [MenuGuard]},

  ///////////PROCESOS
  {path: "ActualizaDatos", component: ActualizaDatosComponent, canActivate: [MenuGuard]},
  {path: "ComparaIESS", component: ComparaIESSComponent, canActivate: [MenuGuard]},
  {path: "CargasFamiliares", component: CargasFamiliaresComponent, canActivate: [MenuGuard]},

  ///////////REPORTES
  {path: "ConsultaActasReunion", component: ConsultaActasReunionComponent, canActivate: [MenuGuard]},
  {path: "ListaCapacitaciones", component: ListaCapacitacionesComponent, canActivate: [MenuGuard]},
  {path: "Orlas", component: OrlasComponent, canActivate: [MenuGuard]},
  {path: "CumpleaniosPersonal", component: CumpleaniosPersonalComponent, canActivate: [MenuGuard]},
  {path: "PrestamoSaldos", component: PrestamoSaldosComponent, canActivate: [MenuGuard]},
  {path: "DocumentoEncargos", component: DocumentoEncargosComponent, canActivate: [MenuGuard]},
  {path: "ListaDatosEmpleados", component: ListaDatosEmpleadosComponent, canActivate: [MenuGuard]},
  {path: "TitulosEmp", component: TitulosEmpComponent, canActivate: [MenuGuard]},
  
  {path: 'pages', loadChildren: () => import('./extrapages/extraspages.module').then(m => m.ExtraspagesModule)},
  // fallback por si ponen una ruta que no existe
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
