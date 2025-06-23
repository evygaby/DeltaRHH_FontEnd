import { estado } from './../../core/services/configuracion.service';
// import { Messages } from 'devextreme/localization/messages/de.json';
import { FamiliarDiscapicidad } from "./../../core/models/emp";
import { Component, inject, Output, Pipe, PipeTransform } from "@angular/core";
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
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: "app-infoempleado",
  templateUrl: "./infoempleado.component.html",
  styleUrls: ["./infoempleado.component.scss"],
})

export class InfoempleadoComponent implements PipeTransform {
  empleado: EMP = {};
  empleados: EMP[] = [];
  URB: string = '';
  data!: any;
  CALLE_PRIN!: any;
  CALLE_SEC!: any;
  grupos!: any;
  fotoencuesta!: any;
  dresidencial!: any;
  PLA_CODCNTA!: any;
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
  maxLength = null;
  height = 90;
  iess!: any;
  autoResizeEnabled!: boolean;
  Depa!: any;
  ListaCargos!: any;
  Secciones!: any;
tipocuentas!: any;
  provincias!: any;
  Razon !: any;
  empresas!: any;
  employeesDataSource!: DataSource;
  generos!: any;
  carga!: any;
  DesarrolloVivienda: string="";
  zonas!: any;
  seguros!: any;
  jefas!: any;
  extensiones!: any;
  familia!: any;
  foto!:any
  Bancos!: any;
  cargos!: any;
  descapacidades!: DataSource;
  tipocontrato!: any;
  sueldos!: any;
   estudios!: any;
  TIPO_VI!: any;
  NO_DEPA!: any;
  condicion!: any;
  intentoEnvio = false;
  tipodocumento!: any;
  titulos!: any;
  sino!: any;esRequerido = false;
  estadocivil!: any;
  tipocuenta!: any;
  titulosacademicos!: any;
    GCENTROCOSTO!: any;
  motivosalida!: any;
  tipodiscapcidad!: any;
  finalArray: Output[] = [];
    miFormulario: FormGroup;
  ciudad: string = ''; // ngModel standalone

  private cacheSubscription!: Subscription;
  private servicios = inject(EventService);
  private config = inject(ConfiguracionService);
  private loading = inject(LoadingService);
  constructor(private fb: FormBuilder,private cacheService: CacheService) {


    this.miFormulario = this.fb.group({
       nombre: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(18)]],
    });
    flatpickr.localize(Spanish);
    this.estudios=this.config.getestudio()
    this.motivosalida = this.config.getmotivosalida();
  this.titulos=this.config.gettitulos()
    this.sino = this.config.getsino();
    this.estadocivil = this.config.getestadocivil();
    this.TIPO_VI = this.config.gettipovivienda();
    this.tipodocumento = this.config.gettipodocumento();
    this.colegios = this.config.getcolegios();
    this.tipocontrato = this.config.gettipocontrato();
    this.familia = this.config.getfamiliar();
    this.tipocuentas=this.config.getTipocuemtas()
    this.generos = this.config.getegeneros();
    this.carga = this.config.getcarga();
    this.tipodiscapcidad = this.config.gettipodiscapcidad();
    this.cacheSubscription = this.cacheService.cache$.subscribe((data) => {
      if (data != null) {
         if (data.clase == "jefas") {
          this.jefas = data.data;
        }
        if (data.clase == "iess") {
          this.iess = data.data;
        }
        if (data.clase == "cuenta") {
          this.PLA_CODCNTA = data.data;
        }
        if (data.clase == "tipocuenta") {
          this.tipocuenta = data.data;
        }
         if (data.clase == "provincias") {
          this.provincias = data.data;
        }
        if (data.clase == "Depa") {
          this.Depa = data.data;
        }
        if (data.clase == "ListaCargos") {
          this.ListaCargos = data.data;
        }
        if (data.clase == "seg") {
          this.seguros = data.data;
        }
        if (data.clase == "ext") {
          this.extensiones = data.data;
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
    this.empleado.ACTIVO='S'
    this.empleado.NUMDIAS='30'
    this.empleado.ACTIVO_REPORTES_AUMENTOS='S'
    this.empleado.TIPO_DOCUMENTO='C'
    this.empleado.SEGURO='NO'
    }else{
      this.condicion="Editar"
      this.Razon=this.empleado.APELLIDO_PAT+" "+this.empleado.APELLIDO_MAT+" "+this.empleado.PRIMER_NOMBRE+" "+this.empleado.SEGUNDO_NOMBRE
     
     const observables = {
        a: this.servicios.get(
          "Empleados/Sueldos?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password+
            "&codemp=" +
            Number.parseInt( this.empleado.CODEMP!)
        ),
        b: this.servicios.get(
          "Empleados/GCENTROCOSTO2?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password
        ),
      
      };
      const combined = combineLatest(observables);
      combined.subscribe({
        next: (data: any) => {
        
          this.sueldos=data.a
           this.GCENTROCOSTO=data.b
         
            
        },
        error: (error: any) => {},
      });

     

    }
    
    this.fotoencuesta=this.empleado.NUMCEDULA
   this.foto=this.config.apiUrlFoto+ this.fotoencuesta+ ".jpg"
    this.empleados = this.servicios.miObjetoaray;
    

    this.employeesDataSource = new DataSource({
      store: this.empleado.FamiliarCargas,
      sort: "CODEMP",
    });
    this.descapacidades = new DataSource({
      store: this.empleado.FamiliarDiscapicidad,
      sort: "IDFAMILIA",
    });
    if(this.empleado.DIRECCION?.includes(' MZ:undefined Calle:undefined Casa:undefined Y:undefined KM:undefined Vía:undefined edif:undefined Dpto:undefined')){
      this.empleado.DIRECCION =""
    }
    // this.result = this.empleados.filter(s => s.CODEMP==this.empleado.CODJEFA)[0].NOMBRES!;
    if(this.empleado.DIRECCION_CSV?.includes(',undefined,undefined,undefined,undefined,undefined')){
      this.empleado.DIRECCION_CSV =""
    }else{
      if(this.empleado.DIRECCION_CSV !=''&& this.empleado.DIRECCION_CSV !=null){
        var data = this.empleado.DIRECCION_CSV?.split(",", 10);
        this.URB = data![0];
        this.mz = data![1];
        this.CALLE_PRIN = data![2];
        this.NO_CASA = data![3];
        this.CALLE_SEC = data![4];
        this.COND = data![5];
        this.NO_DEPA = data![6];
        this.KM = data![7];
        this.via = data![8];
        if (data!.length == 10) {
          this.DesarrolloVivienda = data![9];
        }
      }
     
      // this.NO_DEPA = this.data[6];
    
  }
  }
    toBooleanG = (data: any) => data.ESTADO_GR === 'A';

  fromBooleanG = (newData: any, value: boolean) => {
    newData.ESTADO_GR = value ? 'A' : 'I';
  };
  toBoolean = (data: any) => data.ESTADO === 'A';

  fromBoolean = (newData: any, value: boolean) => {
    newData.ESTADO = value ? 'A' : 'I';
  };
  toBoolean2 = (data: any) => data.CARGO_PRINCIPAL === 'S';

  fromBoolean2 = (newData: any, value: boolean) => {
    newData.CARGO_PRINCIPAL = value ? 'S' : 'N';
  };

  toBoolean3 = (data: any) => data.ACTIVO === 'S';

  fromBoolean3 = (newData: any, value: boolean) => {
    newData.ACTIVO = value ? 'S' : 'N';
  };

  toBooleans = (data: any) => data.ACTIVO === 'S';

  fromBooleans = (newData: any, value: boolean) => {
    newData.ACTIVO = value ? 'S' : 'N';
  };
  submit(form: NgForm) {
        this.intentoEnvio = true;
   if (form.valid) {
     if(this.empleado.esnuevo){
      this.guardar()
          }else{
            this.actualizar()
          }
  }else{

          this.loading.showMensajeError("Revisar campos obligatorios");
  }
   
  }
  
onSelectChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  if(value=='C'){
    this.esRequerido = true;
  }else{
     this.esRequerido = false;
  }
}
  cambiarpaterno(ev:any){

   this.empleado.RAZONSOCIAL= this.empleado.APELLIDO_PAT+" "+this.empleado.APELLIDO_MAT+" "+this.empleado.PRIMER_NOMBRE+" "+this.empleado.SEGUNDO_NOMBRE
  }

  cambiarmaterno
  (ev:any){
   
    this.empleado.RAZONSOCIAL= this.empleado.APELLIDO_PAT+" "+this.empleado.APELLIDO_MAT+" "+this.empleado.PRIMER_NOMBRE+" "+this.empleado.SEGUNDO_NOMBRE
 
  }
  cambiarprimero
  (ev:any){
   
    this.empleado.RAZONSOCIAL= this.empleado.APELLIDO_PAT+" "+this.empleado.APELLIDO_MAT+" "+this.empleado.PRIMER_NOMBRE+" "+this.empleado.SEGUNDO_NOMBRE
 
  }
  cambiarsegundo
  (ev:any){
  
    this.empleado.RAZONSOCIAL=    this.empleado.APELLIDO_PAT+" "+this.empleado.APELLIDO_MAT+" "+this.empleado.PRIMER_NOMBRE+" "+this.empleado.SEGUNDO_NOMBRE
 
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
if(this.empleado.DIRECCION_CSV?.includes(',undefined,undefined,undefined,undefined,undefined')){

}else{
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
  
  
}

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

 transform(value: any): any {
    if (!value) return value;
    
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
formatDolar(e: any) {
return `$${Number(e.value).toFixed(2)}`;
}
  getData(page: string): void {
    this.user = JSON.parse(localStorage.getItem(GlobalComponent.CURRENT_USER)!);
    const cachedData = this.cacheService.get(page);
    const cachedDatapr = this.cacheService.get("cachedDatapr");
    const cachedDatapa = this.cacheService.get("cachedDatapa");
    const cachedDataca = this.cacheService.get("cachedDataca");
    const cachedDatazo = this.cacheService.get("zonas");
    const cachedDataempresa = this.cacheService.get("empresas");
    const cachedDataext = this.cacheService.get("ext");
    const cachedDataseguros = this.cacheService.get("seg");
    const cachedDatacent = this.cacheService.get("centrosmin");
    const cachedDataDepa = this.cacheService.get("Depa");
    const cachedDataListaCargos = this.cacheService.get("ListaCargos");
    const cachedDataSecciones = this.cacheService.get("Secciones");
    const cachedDataBanco = this.cacheService.get("bancos");
    const cachedTipoCuenta = this.cacheService.get("tipocuenta");
        const cachedCuenta = this.cacheService.get("cuenta");
        const cachediess= this.cacheService.get("iess");
        const cachedjefas= this.cacheService.get("jefas");
    // Si los datos no están en caché, los recuperamos del servidor y los almacenamos en la caché.
    if (
      !cachedDatapr ||!cachedDataext ||!cachedDataseguros ||!cachedTipoCuenta ||

      !cachedDatapa ||  !cachedCuenta ||!cachediess ||
      !cachedDataca ||
      !cachedDatazo ||   !cachedjefas||
      !cachedDatacent||!cachedDataDepa||!cachedDataListaCargos||!cachedDataSecciones||!cachedDataBanco
    ) {
      const observables = {
        a: this.servicios.get(
          "Empleados/CUIDADES?usu=" +
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
        
        ext: this.servicios.get(
          "Empleados/EXTENSION?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password +
            "&idempresa=" +
            this.user.IdCompania
        ),
        
        seg: this.servicios.get(
          "Empleados/SEGUROS?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password +
            "&idempresa=" +
            this.user.IdCompania
        ),
         tipo: this.servicios.get(
          "Empleados/TIPOCUENTA?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password +
            "&idempresa=" +
            this.user.IdCompania
        ), 
        cuen: this.servicios.get(
          "Empleados/CUENTAS?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password +
            "&idempresa=" +
            this.user.IdCompania
        ),
         iess: this.servicios.get(
          "Empleados/DESCIESS?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password 
        ),
         jefas: this.servicios.get(
          "Empleados/JEFAS?usu=" +
            this.user.Nombre +
            "&contrasena=" +
            this.user.password 
        ),
      };
      const combined = combineLatest(observables);
      combined.subscribe({
        next: (data: any) => {
           this.iess=data.iess
          this.PLA_CODCNTA=data.cuen
          this.tipocuenta=data.tipo
          this.extensiones=data.ext
          this.seguros=data.seg
          this.cantones = data.a;
          this.paises = data.b;
          this.provincias = data.c;
          this.zonas = data.z;
          this.centrosmin = data.ce;
          this.Depa=data.ca
          this.ListaCargos=data.lc
          this.Secciones=data.secc
          this.Bancos=data.bancos
          this.jefas=data.jefas
           this.cacheService.set(
            "jefas",
            "jefas",
            new Date(),
            data.jefas
          );
          this.cacheService.set(
            "cuenta",
            "cuenta",
            new Date(),
            data.cuen
          ); 
            this.cacheService.set(
            "iess",
            "iess",
            new Date(),
            data.iess
          ); 
          this.cacheService.set(
            "tipocuenta",
            "tipocuenta",
            new Date(),
            data.tipo
          ); this.cacheService.set(
            "ext",
            "ext",
            new Date(),
            data.ext
          );
          this.cacheService.set(
            "seg",
            "seg",
            new Date(),
            data.seg
          );
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
        .ConsultarCentros(this.user.Nombre!, this.user.password!,this.user.IdCompania!)
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
