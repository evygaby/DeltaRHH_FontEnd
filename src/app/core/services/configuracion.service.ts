export class estado {
  ID!: number;

  Name!: string;
}

export class opciones {
  ID!: string;

  Name!: string;
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export const environment = {
  myCustomProperty: "original value",
};

const motivosalida: opciones[] = [
  {  
    ID: "R",
    Name: "Renuncia",
  },
  {
    ID: "D",
    Name: "Despido",
  },
  {
    ID: "T",
    Name: "Término de Contrato",
  },
  {
    ID: "C",
    Name: "Cambio de Sección",
  },{
    ID: "J",
    Name: "Jubilación",
  },
  {
    ID: "F",
    Name: "Fallecimiento",
  },
];

const parentesco: opciones[] = [
  {
    ID: "CONYUGE",
    Name: "Conyuge",
  },
  {
    ID: "MADRE",
    Name: "Madre",
  },
  {
    ID: "PADRE",
    Name: "Padre",
  },
  {
    ID: "HIJO/A)",
    Name: "Hijo(a)",
  },
  {
    ID: "OTRO",
    Name: "Otro",
  },
];
const carga: opciones[] = [
  {
    ID: "C",
    Name: "Conyuge",
  },
  {
    ID: "H",
    Name: "Hijo(a)",
  },
  {
    ID: "M",
    Name: "Madre",
  },
  {
    ID: "O",
    Name: "Otro",
  },
  {
    ID: "P",
    Name: "Padre",
  },
];
const estados: estado[] = [
  {
    ID: 1,
    Name: "ACTIVO",
  },
  {
    ID: 0,
    Name: "INACTIVO",
  },
];
const generos: opciones[] = [
  {
    ID: "F",
    Name: "FEMENINO",
  },
  {
    ID: "M",
    Name: "MASCULINO",
  },
];
const tipocuentas: opciones[] = [
  {
    ID: "A",
    Name: "AHORRO",
  },
  {
    ID: "C",
    Name: "CORRIENTE",
  },
];
const tipodiscapcidad: opciones[] = [
  {
    ID: "A",
    Name: "Auditiva",
  },
  {
    ID: "M",
    Name: "Visual",
  },
  
  {
    ID: "F",
    Name: "Física",
  },
  
  {
    ID: "I",
    Name: "Intelectual",
  },
]
const titulos: opciones[] = [
  {
    ID: "BACHILLER",
    Name: "Bachiller",
  },
  {
    ID: "TECNOLOGICO",
    Name: "Tecnológico",
  },
  {
    ID: "UNIVERSITARIO",
    Name: "Universitario",
  },
  {
    ID: "DIPLOMADO",
    Name: "Diplomado",
  },{
    ID: "MASTERADO",
    Name: "Masterado",
  },
  {
    ID: "DOCTORADO",
    Name: "Doctorado",
  },
];
const estudios: opciones[] = [
  {
    ID: "GRADUADO",
    Name: "Graduado",
  },
  {
    ID: "EGRESADO",
    Name: "Egresado",
  },
  {
    ID: "EN CURSO",
    Name: "En curso",
  },
  {
    ID: "INCONCLUSO",
    Name: "Inconcluso",
  },
];
const colegios: opciones[] = [
  {
    ID: "NINGUNA",
    Name: "Ninguna",
  },
  {
    ID: "DELTA",
    Name: "Delta",
  },
  {
    ID: "PREESCOLAR",
    Name: "Preescolar",
  },
  {
    ID: "TORREMAR",
    Name: "Torremar",
  },
  {
    ID: "OTRA",
    Name: "Otra",
  },
];
const tipocontrato: opciones[] = [
  {
    ID: "R",
    Name: "ROL",
  },
  {
    ID: "E",
    Name: "EVENTUAL",
  },
  {
    ID: "V",
    Name: "PASANTE",
  },
  {
    ID: "P",
    Name: "POR HORA",
  },
  {
    ID: "H",
    Name: "HONORARIO",
  }, {
    ID: "J",
    Name: "JUBILADO",
  },
];
const tipodocumento: opciones[] = [
  {
    ID: "C",
    Name: "CÉDULA",
  },
  {
    ID: "R",
    Name: "RUC",
  },
  {
    ID: "P",
    Name: "PASAPORTE",
  },
];

const sino: opciones[] = [
  {
    ID: "S",
    Name: "SI",
  },
  {
    ID: "N",
    Name: "NO",
  },
  
];
const tipovivienda: opciones[] = [
  {
    ID: "URB.",
    Name: "URBANIZACIÓN",
  },
  {
    ID: "COND",
    Name: "CONDOMINIO",
  },
  {
    ID: "CDLA",
    Name: "CIUDADELA",
  },
  {
    ID: "COOP",
    Name: "COOPERATIVA",
  },
];
const estadocivil: opciones[] = [
  {
    ID: "S",
    Name: "SOLTERO",
  },
  {
    ID: "C",
    Name: "CASADO",
  },
  {
    ID: "D",
    Name: "DIVORCIADO",
  },
  {
    ID: "U",
    Name: "UNION DE HECHO",
  },{
    ID: "V",
    Name: "VIUDO",
  },
];


@Injectable({
  providedIn: "root",
})
export class ConfiguracionService {
  private config: any;
  constructor(private http: HttpClient) {}
  getestados(): estado[] {
    return estados;
  }

  getConfig() : Promise<any>{
    const noCacheUrl = `/assets/config.json?v=${new Date().getTime()}`;
    return this.http.get(noCacheUrl)
      .toPromise()
      .then(config => this.config = config)
      .catch(err => {
        console.error('Error al cargar config.json:', err);
        return Promise.reject(err);
      });
  }
  get apiUrlFoto(): string {
    return this.config?.apiUrlFoto;
  }
  get apiUrl(): string {
    return this.config?.apiUrl;
  }

  getegeneros(): opciones[] {
    return generos;
  }
  getfamiliar(): opciones[] {
    return parentesco;
  }
  getTipocuemtas(): opciones[] {
    return tipocuentas;
  }
  getcarga(): opciones[] {
    return carga;
  }

  getcolegios(): opciones[] {
    return colegios;
  }
  getmotivosalida(): opciones[] {
    return motivosalida;
  }
  getestudio(): opciones[] {
    return estudios;
  }
  gettitulos(): opciones[] {
    return titulos;
  }
  gettipocontrato(): opciones[] {
    return tipocontrato;
  }
  gettipodocumento(): opciones[] {
    return tipodocumento;
  }
  gettipovivienda(): opciones[] {
    return tipovivienda;
  }
  getestadocivil(): opciones[] {
    return estadocivil;
  }
  getsino(): opciones[] {
    return sino;
  }
  gettipodiscapcidad(): opciones[] {
    return tipodiscapcidad;
  }
}
