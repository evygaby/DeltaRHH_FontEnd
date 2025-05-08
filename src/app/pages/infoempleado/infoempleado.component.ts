// import { Messages } from 'devextreme/localization/messages/de.json';
import { FamiliarDiscapicidad } from "./../../core/models/emp";
import { Component, inject, Output } from "@angular/core";
import { EventService } from "src/app/core/services/event.service";
import { EmpleadosComponent } from "../empleados/empleados.component";
import { EMP } from "src/app/core/models/emp";
import { User } from "src/app/core/models/auth.models";
import { GlobalComponent } from "src/app/global-component";
import { combineLatest, Subscription } from "rxjs";
import { CacheService } from "src/app/core/services/cache.service";
import { ConfiguracionService } from "src/app/core/services/configuracion.service";
import DataSource from "devextreme/data/data_source";
import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es";
import { LoadingService } from "src/app/core/services/loading.service";
@Component({
  selector: "app-infoempleado",
  templateUrl: "./infoempleado.component.html",
  styleUrls: ["./infoempleado.component.scss"],
})
export class InfoempleadoComponent {
  empleado: EMP = {};
  empleados: EMP[] = [];
  URB!: any;
  data!: any;
  CALLE_PRIN!: any;
  CALLE_SEC!: any;
  grupos!: any;
  fotoencuesta!: any;
  dresidencial!: any;
  mz!: any;
  KM!: any;
  NO_CASA!: any;
  COND!: any;
  via!: any;
  referencia!: any;
  colegios!: any;
  user!: User;
  result!: string;
  paises!: any;
  cantones!: any;
  centrosmin!: any;

  Depa!: any;
  ListaCargos!: any;
  Secciones!: any;

  provincias!: any;
  empresas!: any;
  employeesDataSource!: DataSource;
  generos!: any;
  carga!: any;
  DesarrolloVivienda!: string;
  zonas!: any;
  familia!: any;
  foto!:any
  Bancos!: any;
  cargos!: any;
  descapacidades!: DataSource;
  tipocontrato!: any;
  sueldos!: any;
  TIPO_VI!: any;
  NO_DEPA!: any;
  condicion!: any;
  tipodocumento!: any;
  sino!: any;
  estadocivil!: any;
  tipodiscapcidad!: any;
  finalArray: Output[] = [];
  private cacheSubscription!: Subscription;
  private servicios = inject(EventService);
  private config = inject(ConfiguracionService);
  private loading = inject(LoadingService);
  constructor(private cacheService: CacheService) {
    flatpickr.localize(Spanish);
    this.sino = this.config.getsino();
    this.estadocivil = this.config.getestadocivil();
    this.TIPO_VI = this.config.gettipovivienda();
    this.tipodocumento = this.config.gettipodocumento();
    this.colegios = this.config.getcolegios();
    this.tipocontrato = this.config.gettipocontrato();
    this.familia = this.config.getfamiliar();
    this.generos = this.config.getegeneros();
    this.carga = this.config.getcarga();
    this.tipodiscapcidad = this.config.gettipodiscapcidad();
    this.cacheSubscription = this.cacheService.cache$.subscribe((data) => {
      if (data != null) {
        if (data.clase == "provincias") {
          this.provincias = data.data;
        }
        if (data.clase == "Depa") {
          this.Depa = data.data;
        }
        if (data.clase == "ListaCargos") {
          this.ListaCargos = data.data;
        }
        if (data.clase == "Secciones") {
          this.Secciones = data.data;
        }
        if (data.clase == "pais") {
          this.paises = data.data;
        }
        if (data.clase == "cantones") {
          this.cantones = data.data;
        }
        if (data.clase == "zonas") {
          this.zonas = data.data;
        }
        if (data.clase == "empresas") {
          this.empresas = data.data;
        }
        if (data.clase == "centrosmin") {
          this.centrosmin = data.data;
        }
        if (data.clase == "info") {
          this.grupos = data.data;
        }
        if (data.clase == "bancos") {
          this.Bancos = data.data;
        }
      }
    });
    this.getData("info");
    this.empleado = this.servicios.miObjeto;
    if(this.empleado.esnuevo){
      
this.condicion="Guardar"
    }else{
      this.condicion="Editar"
      this.servicios.ConsultarSueldos(this.user.Nombre!,this.user.password!,this.empleado.CODEMP!).subscribe(data => {
        try {
          this.sueldos = data
          this.loading.closeSpinner()
          
        } catch (error) {
          console.error(error);
          // maneja el error como prefieras aquí
        }
      });
    }
    
    this.fotoencuesta=this.empleado.NUMCEDULA
   this.foto=this.config.apiUrlFoto+ this.fotoencuesta+ ".jpg"
    this.empleado.CuentasBancos!.forEach(function (value) {
      if(value.ESTADO=="I"){
        value.estado1=false
      }
      else{
        value.estado1=true
      }
    }); 
    this.empleado.CuentasContables!.forEach(function (value) {
      if(value.ACTIVO=="S"){
        value.ACTIVO1=false
      }
      else{
        value.ACTIVO1=true
      }
    }); 
    if(this.empleado.DISCAPACIDAD=="S"){
      this.empleado.DISCAPACIDAD1=true
    }else{
      this.empleado.DISCAPACIDAD1=false
    }
    if(this.empleado.ACTIVO=="S"){
      this.empleado.ACTIVO1=true
    }
    if(this.empleado.ACTIVO_REPORTES_AUMENTOS=="S"){
      this.empleado.ACTIVO_REPORTES_AUMENTOS1=true
    }
    this.empleados = this.servicios.miObjetoaray;
    

    this.employeesDataSource = new DataSource({
      store: this.empleado.FamiliarCargas,
      sort: "CODEMP",
    });
    this.descapacidades = new DataSource({
      store: this.empleado.FamiliarDiscapicidad,
      sort: "IDFAMILIA",
    });
    // this.result = this.empleados.filter(s => s.CODEMP==this.empleado.CODJEFA)[0].NOMBRES!;
    if (this.empleado.DIRECCION_CSV != null) {
      var data = this.empleado.DIRECCION_CSV?.split(",", 10);
      this.URB = data[0];
      this.mz = data[1];
      this.CALLE_PRIN = data[2];
      this.NO_CASA = data[3];
      this.CALLE_SEC = data[4];
      this.COND = data[5];
      this.NO_DEPA = data[6];
      this.KM = data[7];
      this.via = data[8];
      if (data.length == 10) {
        this.DesarrolloVivienda = data[9];
      }
      // this.NO_DEPA = this.data[6];
    }
  }

  submit() {
    if(this.empleado.esnuevo){
      this.guardar()
          }else{
            this.actualizar()
          }
  }

  guardar() {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Guardando");
    this.empleado.LIC_MATERNIDAD="N"
    this.empleado.LIC_ENFERMEDAD="N"
    this.empleado.ID_EMPRESA = this.user.IdCompania!;
    this.empleado.DIRECCION_CSV =
      this.URB +
      "," +
      this.mz +
      "," +
      this.CALLE_PRIN +
      "," +
      this.NO_CASA +
      "," +
      this.CALLE_SEC +
      "," +
      this.COND +
      "," +
      this.NO_DEPA +
      "," +
      this.KM +
      "," +
      this.via +
      "," +
      this.DesarrolloVivienda;
      let direccion = "";
      if (this.URB != "") {
        direccion = direccion + this.DesarrolloVivienda+":"+this.URB;
      }
      if (this.mz != "") {
        direccion = direccion + " MZ:" + this.mz;
      }
      if (this.CALLE_PRIN != "") {
        direccion = direccion + " Calle:" + this.CALLE_PRIN;
        if (this.NO_CASA != "") {
          direccion = direccion + " Casa:" + this.NO_CASA;
        }
        if (this.CALLE_SEC != "") {
          direccion = direccion + " Y:" + this.CALLE_SEC;
        }
      } else {
        if (this.NO_CASA != "") {
          direccion = direccion + " V:" + this.NO_CASA;
        }
      }
  
      if (this.KM != "") {
        direccion = direccion + " KM:" + this.KM;
      }
      if (this.via != "") {
        direccion = direccion + " Vía:" + this.via;
      }
      if (this.COND != "") {
        direccion = direccion + " edif:" + this.COND;
      }
      if (this.NO_DEPA != "") {
        direccion = direccion + " Dpto:" + this.NO_DEPA;
      }
      this.empleado.DIRECCION = direccion;
    this.servicios
      .guardarempleado(this.empleado, this.user.Nombre!, this.user.password!)
      .subscribe({
        next: (data: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajesuccess("Guardado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error);
        },
      });
  }
  actualizar() {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    this.loading.showSpinner2("Actualizando");
    this.empleado.ID_EMPRESA = this.user.IdCompania!;
    this.empleado.DIRECCION_CSV =
      this.URB +
      "," +
      this.mz +
      "," +
      this.CALLE_PRIN +
      "," +
      this.NO_CASA +
      "," +
      this.CALLE_SEC +
      "," +
      this.COND +
      "," +
      this.NO_DEPA +
      "," +
      this.KM +
      "," +
      this.via +
      "," +
      this.DesarrolloVivienda;
    let direccion = "";
    if (this.URB != "") {
      direccion = direccion + this.DesarrolloVivienda+":"+this.URB;
    }
    if (this.mz != "") {
      direccion = direccion + " MZ:" + this.mz;
    }
    if (this.CALLE_PRIN != "") {
      direccion = direccion + " Calle:" + this.CALLE_PRIN;
      if (this.NO_CASA != "") {
        direccion = direccion + " Casa:" + this.NO_CASA;
      }
      if (this.CALLE_SEC != "") {
        direccion = direccion + " Y:" + this.CALLE_SEC;
      }
    } else {
      if (this.NO_CASA != "") {
        direccion = direccion + " V:" + this.NO_CASA;
      }
    }

    if (this.KM != "") {
      direccion = direccion + " KM:" + this.KM;
    }
    if (this.via != "") {
      direccion = direccion + " Vía:" + this.via;
    }
    if (this.COND != "") {
      direccion = direccion + " edif:" + this.COND;
    }
    if (this.NO_DEPA != "") {
      direccion = direccion + " Dpto:" + this.NO_DEPA;
    }
    this.empleado.DIRECCION = direccion;
    this.servicios
      .actualizandoempleado(
        this.empleado,
        this.user.Nombre!,
        this.user.password!
      )
      .subscribe({
        next: (data: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajesuccess("Actualizado con éxito");
        },
        error: (error: any) => {
          this.loading.closeSpinner();
          this.loading.showMensajeError(error);
        },
      });
  }
  getData(page: string): void {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    const cachedData = this.cacheService.get(page);
    const cachedDatapr = this.cacheService.get("cachedDatapr");
    const cachedDatapa = this.cacheService.get("cachedDatapa");
    const cachedDataca = this.cacheService.get("cachedDataca");
    const cachedDatazo = this.cacheService.get("zonas");
    const cachedDataempresa = this.cacheService.get("empresas");
    const cachedDatacent = this.cacheService.get("centrosmin");
    const cachedDataDepa = this.cacheService.get("Depa");
    const cachedDataListaCargos = this.cacheService.get("ListaCargos");
    const cachedDataSecciones = this.cacheService.get("Secciones");
    const cachedDataBanco = this.cacheService.get("bancos");
    // Si los datos no están en caché, los recuperamos del servidor y los almacenamos en la caché.
    if (
      !cachedDatapr ||
      !cachedDatapa ||
      !cachedDataca ||
      !cachedDatazo ||
      !cachedDatacent||!cachedDataDepa||!cachedDataListaCargos||!cachedDataSecciones||!cachedDataBanco
    ) {
      const observables = {
        a: this.servicios.get(
          "Empleados/CANTONES?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password
        ),
        b: this.servicios.get(
          "Empleados/Paises?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password
        ),
        c: this.servicios.get(
          "Empleados/PROVINCIA?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password
        ),
        z: this.servicios.get(
          "Empleados/Zonas?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password
        ),
        ce: this.servicios.get(
          "Empleados/CENTROCOSTOMIN?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password +
            "&idempresa=" +
            this.user.IdCompania
        ),
        ca: this.servicios.get(
          "Empleados/Depa?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password +
            "&idempresa=" +
            this.user.IdCompania
        ),
        lc: this.servicios.get(
          "Empleados/ListaCargos?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password +
            "&idempresa=" +
            this.user.IdCompania
        ),
        secc: this.servicios.get(
          "Empleados/Secciones?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password +
            "&idempresa=" +
            this.user.IdCompania
        ),
        bancos: this.servicios.get(
          "Empleados/Bancos?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password 
        ),
      };
      const combined = combineLatest(observables);
      combined.subscribe({
        next: (data: any) => {
          this.cantones = data.a;
          this.paises = data.b;
          this.provincias = data.c;
          this.zonas = data.z;
          this.centrosmin = data.ce;
          this.Depa=data.ca
          this.ListaCargos=data.lc
          this.Secciones=data.secc
          this.Bancos=data.bancos
          this.cacheService.set(
            "Depa",
            "Depa",
            new Date(),
            data.ca
          );
          this.cacheService.set(
            "ListaCargos",
            "ListaCargos",
            new Date(),
            data.lc
          );
          this.cacheService.set(
            "Secciones",
            "Secciones",
            new Date(),
            data.secc
          );
          this.cacheService.set(
            "cachedDatapr",
            "provincias",
            new Date(),
            data.c
          );this.cacheService.set("bancos", "bancos", new Date(), data.bancos);
          this.cacheService.set("cachedDatapa", "pais", new Date(), data.b);
          this.cacheService.set("cachedDataca", "cantones", new Date(), data.a);
          this.cacheService.set("zonas", "zonas", new Date(), data.z);
          this.cacheService.set(
            "centrosmin",
            "centrosmin",
            new Date(),
            data.ce
          );
        },
        error: (error: any) => {},
      });
    }
    if (!cachedDataempresa) {
      this.user = JSON.parse(
        localStorage.getItem(GlobalComponent.CURRENT_USER)!
      );
      this.servicios
        .Consultarempresa(this.user.Nombre!, this.user.password!)
        .subscribe((data: any) => {
          try {
            this.empresas = data;
            this.cacheService.set("empresas", "empresas", new Date(), data);
          } catch (error) {
            console.error(error);
            // maneja el error como prefieras aquí
          }
        });
    }

    if (!cachedData) {
      this.user = JSON.parse(
        localStorage.getItem(GlobalComponent.CURRENT_USER)!
      );
      this.servicios
        .ConsultarCentros(this.user.Nombre!, this.user.password!)
        .subscribe((data: any) => {
          try {
            this.grupos = data;
            this.cacheService.set(page, page, new Date(), data);
          } catch (error) {
            console.error(error);
            // maneja el error como prefieras aquí
          }
        });
    }
  }
}
