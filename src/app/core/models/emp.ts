export class EMP {

        CODEMP?: number;
        APELLIDO_PAT?: string;
        APELLIDO_MAT?: string;
        APELLIDO_CAS?: string;
        NOMBRES?: string;
        RAZONSOCIAL?: string;
        SEXO?: string;
        TIPO?: string;
        RUC?: string;
        DIRECCION?: string;
        CODZONA?: string;
        TLF1?: string;
        TLF2?: string;
        PAIS?: string;
        PROVINCIA?: string;
        CIUDAD?: string;
        FECINGRESO?: string;
        FECSALIDA?: string;
        SEGSOCIAL?: string;
        NUMCEDULA?: string;
        ESTCIVIL?: string;
        PROFESION?: string;
        TIPCONTRATO?: string;
        SUELDO?: number;
        CODCCOSTO?: string;
        FECNAC?: string;
        NUMEXT?: number;
        NUMHIJOS?: number;
        NUMDIAS?: number;
        ACTIVO?: string;
        ACTIVO_REPORTES_AUMENTOS1?: boolean;
        ACTIVO1?: boolean;
        SEGURO?: string;
        CODPERSONA?: string;
        CELULAR?: string;
        MNT_DIC?: number;
        HOR_DIC?: number;
        BENEFICIO?: number;
        CODGRUPO?: number;
        MNT_ABRIL?: number;
        MNT_ABRIL1?: number;
        MNT_ABRIL2?: number;
        MNT_DIC_2000?: number;
        CODCATEGORIA?: string;
        ACTIVO_REPORTES_AUMENTOS?: string;
        DEDUCCION?: number;
        LIC_MATERNIDAD?: string;
        FEC_MATERNIDADI?: string;
        FEC_MATERNIDADF?: string;
        LIC_ENFERMEDAD?: string;
        FEC_ENFERMEDADI?: string;
        FEC_ENFERMEDADF?: string;
        NOMBRE_INVITACION?: string;
        REQUIERE_TRANSP?: string;
        CALLE_SRI?: string;
        NUMERO_SRI?: number;
        ASISTE_L?: string;
        ASISTE_M?: string;
        ASISTE_C?: string;
        ASISTE_J?: string;
        ASISTE_V?: string;
        SUELDO_DIC?: number;
        ANIOS_DOCENCIA?: number;
        CANTON?: number;
        OTRAS_ACTIVIDADES?: string;
        BENEFICIO2?: number;
        MAIL?: string;
        ID_INSTITUCION?: string;
        PRESCOLAR?: string;
        FEC_INGPRESCOLAR?: string;
        FEC_SALPRESCOLAR?: string;
        ID_CLIENTE?: number;
        FECHA_DIGITACION?: string;
        ID_EMPRESA?: number;
        TIPO_DOCUMENTO?: string;
        OBSERVACION?: string;
        CODIGO_IESS?: number;
        DISCAPACIDAD?: string;
       
        DISCAPACIDAD1?: boolean;
        PORC_DISCAPACIDAD?: number;
        COND_DISCAPACIDAD?: string;
        TIPO_DOC_DISCAPACIDAD?: string;
        ID_DISCAPACIDAD?: string;
        NIVELESTUDIO?: string;
        NOMBRECONYUGE?: string;
        FECHAMATRICIVIL?: string;
        FECHAMATRIECLE?: string;
        TELEFONOCONYUGE?: string;
        EMAILPERSONAL?: string;
        CONTACTOEMERGENCIA?: string;
        PARENTESCOEMERGENCIA?: string;
        OTROPARENTEMERGENCIA?: string;
        TELEFONOEMERGENCIA?: string;
        SEGUROPARTICULAR?: string;
        DISCAP_AUDITIVA?: string;
        DISCAP_VISUAL?: string;
        DISCAP_FISICA?: string;
        DISCAP_INTELECTUAL?: string;
        FECHAACTUALIZA?: string;
        USRACTUALIZA?: string;
        DIRECCION_CSV?: string;
        REFERENCIADOMICILIO?: string;
        CONTACTOEMERGENCIA2?: string;
        PARENTESCOEMERGENCIA2?: string;
        OTROPARENTEMERGENCIA2?: string;
        TELEFONOEMERGENCIA2?: string;
        ACTUALIZAWEB?: string;
        UNIFICADO?: string;
        CODCCOSTO_MINIS?: string;
        CODJEFA?: number;
        LIC_SINSUELDO?: string;
        FEC_SINSUELDOINI?: string;
        FEC_SINSUELDOFIN?: string;
        MOTIVO_SALIDA?: string;
        FEC_AIESS?: string;
        FEC_INI_JUBILACION?: string;
        SUELDO_JUBILADO?: number;
        LIC_SINSUELDO_EMPR?: string;
        FEC_SINSUELDOEMPR_INI?: string;
        FEC_SINSUELDOEMPR_FIN?: string;
        DIAS_PAG_SINSUELDOEMPR?: number;
        PRIMER_NOMBRE?: string;
        SEGUNDO_NOMBRE?: string;
        CODIGO_IESS_JUB?: number;
        NACIONALIDAD?: string;
        ANTIGUEDAD?: number;
        PERTENECE_OBRA?: string;
        FamiliarCargas?: FamiliarCargas[];
        FamiliarEnfermedad?:FamiliarEnfermedad[];
        FamiliarDiscapicidad?:FamiliarDiscapicidad[];
        Cargos?:Cargos[];
        CentroCosto?:Centros[];
        Departamentos?:Departamentos[];
        CuentasBancos?:CuentasBancos[];
        CuentasContables?:CuentasContables[];
        Titulos?:Titulos[];
        Sueldos?:Suekdos[];

    
}
export class FamiliarDiscapicidad {
        IDFAMILIA?: number;
        CODEMP?: number;
        NOMBRECOMPLETO?: string;
        PARENTESCO?: string;
        FECHANACIM?: string;
        TIPODOC?: string;
        NUMDOC?: string;
        ESTADO?: string;
        FECHA_INGRESO?: string;
        FECHA_ACTUALIZA?: string;
        USR_ACTUALIZA?: string;
        ID_EMPRESA?: number;
        ENVIO_SRI?: string;
     
        RESPONSABILIDAD_ECON?: string;
        PORC_DISCAPACIDAD?: number;
        TIPO_DISCAPACIDAD?: string;
    }
export class FamiliarCargas {
     
                ID_HIJO?: number;
                CODEMP?: number;
                TIPO_CARGA?: string;
                NOMBRE_CARGA?: string;
                FECHA_NACIMIENTO?: string;
                SEXO?: string;
                ID_EMPRESA?: number;
                FECHA_INGRESO?: string;
                USUARIO_INGRESO?: string;
                OTROTIPO?: string;
                INSTITUCION?: string;
                FECHA_MODIFICA?: string;
                USUARIO_MODIFICA?: string;
                GRADOCURSO?: string;
                OTRAINSTITUCION?: string;
            

}
export class FamiliarEnfermedad {
        IDFAMILIA?: number;
        CODEMP?: number;
        NOMBRECOMPLETO?: string;
        PARENTESCO?: string;
        ESTADO?: string;
        FECHA_INGRESO?: string;
        USR_INGRESO?: string;
        FECHA_ACTUALIZA?: string;
        USR_ACTUALIZA?: string;
        ID_EMPRESA?: number;
        RESPONSABILIDAD_ECON?: string;
        ENFERMEDAD?: string;
    }
    export class Cargos {
        CODCRG?: string;
        NOMCRG?: string;
        CODDEP?: number;
        NOMDEP?: string;
        PAGO_ADIC?: number;
      

    }
    export class Centros  {
        GCODCCOSTO?: string;
        CODEMPLEADO?: number;
        ESTADO_GR?: string;
        IDEMPRESA?: number;
    }
    export class Grupo  {
        IDCRGEMP?: number;
        CODEMP?: number;
        CODSEC?: string;
        ACTIVO?: string;
        ID_EMPRESA?: number;
        CARGO_PRINCIPAL?: string;
    }
    export class Departamentos  {
        CODCRG?: string;
        NOMCRG?: string;
        CODDEP?: number;
        NOMDEP?: string;
        CODSEC?: string;
        NOMSEC?: string;
    } 
    export class CuentasContables  {
        TIPO_CTA?: string;
        PLA_CODCNTA?: string;
        CODEMP?: number;
        DES?: string;
        ID_EMPRESA?: number;
        ACTIVO1?:boolean;
        ACTIVO?:string;
    }
    export class CuentasBancos  {
        CODPERSONA?: number;
        CODBANCO?: string;
        CTABCO?: string;
        PORCENT?: string;
        TIPO_CUENTA?: string;
        estado1?:boolean;
        ESTADO?:string;
    }
    export class Titulos  {
        CODEMP?: number;
        NIVEL?: string;
        TITULO?: string;
        PAIS?: string;
        INSTITUCION?: string;
        ESTADOESTUDIO?: string;
        REGSENESCYT?: string;
        NUMREGSENESCYT?: string;
        ESTADO?: string;
        ANIOGRADUAPREVISTA?: string;
        NIV_EN_CURSO?: string;
    }
    export class Suekdos  {
        
      
        
     
        CODEMP?: number;
        FECHA?: string;
        TIPCONTRATO?: string;
        CENTRO_COSTO?: string;
        A_PAGAR?: number;
        SUELDO?: number;
        EXTRAS?: number;
        OTROS?: number;
        INGRESOS?: number;
        EGRESOS?: number;
        DIAS_ENF?: number;
        DIAS_MAT?: number;
        SINSUELDO?: number;
    }

 
   