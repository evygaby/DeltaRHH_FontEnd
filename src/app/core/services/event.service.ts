import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { GlobalComponent } from 'src/app/global-component';
import { Parametros } from './parametros';
import { NubeFactura } from '../models/factura';
import { Certificado } from '../models/certificado';
import { EMP } from '../models/emp';

interface Event {
    type: string;
    payload?: any;
}

type EventCallback = (payload: any) => void;
const API_URL = GlobalComponent.API_URL;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
    providedIn: 'root'
})

export class EventService {
    public miObjeto: EMP = {};
    public miObjetoaray: EMP []= [];
    private handler = new Subject<Event>();
    // searchData$: BehaviorSubject<EMP> = new BehaviorSubject<EMP>(null!);
    constructor(private http: HttpClient) { }
    getObjeto() {
      return this.miObjeto;
  }
  // sendData(term: any) {
  //   this.searchData$.next(term);
  // }
  // getData() {
  //   return this.searchData$.asObservable();
  // }

  getObjetoarray() {
    return this.miObjetoaray;
}
  modificarObjeto(nuevoObjeto:EMP) {
    this.miObjeto = nuevoObjeto;
   
}
modificarObjetoarray(miObjetoaray: EMP []) {

  this.miObjetoaray = miObjetoaray;
}
    /**
     * Broadcast the event
     * @param type type of event
     * @param payload payload
     */
    broadcast(type: string, payload = {}) {
        this.handler.next({ type, payload });
    }

    /**
     * Subscribe to event
     * @param type type of event
     * @param callback call back function
     */
    subscribe(type: string, callback: EventCallback): Subscription {
        return this.handler.pipe(
            filter(event => event.type === type)).pipe(
                map(event => event.payload))
            .subscribe(callback);
    }
get(url:string):Observable<any> {
    return this.http.get(API_URL+url, httpOptions);
}

post(url:string,parametros: Parametros[]) {
    var link:string= url+"?"+parametros[0].nombre+"="+parametros[0].valor
    for (let i = 1; i < 3; i++) {
       link=link+"&"+parametros[i].nombre+"="+parametros[i].valor
       console.log(link)
      }
    return this.http.post(API_URL+link, httpOptions);
}
  postfactura(url:string,factura: NubeFactura):Observable<any> {
    //console.log(JSON.stringify(factura))
    //https://localhost:7271/api/NubeFactura
      return this.http.post(API_URL+url,JSON.stringify(factura), httpOptions);
      
  }
    subircertificado(file: File,certificado:Certificado){
    //var blob = new Blob([file], { type: "application/octet-stream" });
      const formData = new FormData();
     formData.append('ruc', certificado.ruc);
     formData.append('idcopmpania', certificado.idcompania.toString());
     formData.append('fecha', certificado.fecha);
     formData.append('clave', certificado.clave);
    formData.append('file', file,file.name);
   return  this.http.post<Certificado>(API_URL+ 'Archivos/UploadCertificado',formData)
  
    }
    guardarempleado(empleado:EMP,usu:string,pass:string){
        const valor=JSON.stringify(empleado)
       const header = new HttpHeaders({ 'Content-Type': 'application/json' });
     return  this.http.post<any>(API_URL+ 'Empleados/Post?usu='+usu+"&contrasena="+pass,JSON.stringify(empleado), {headers:header})
    
      }
    actualizandoempleado(empleado:EMP,usu:string,pass:string){
        const valor=JSON.stringify(empleado)
       const header = new HttpHeaders({ 'Content-Type': 'application/json' });
     return  this.http.put<any>(API_URL+ 'Empleados/Put?usu='+usu+"&contrasena="+pass,JSON.stringify(empleado), {headers:header})
    
      }
    Consultarempleados(usu:string,pass:string,idempresa:number):Observable<any> {
      return this.http.get(API_URL+"Empleados/Get?usu="+usu+"&contrasena="+pass+"&idempresa="+idempresa, httpOptions);
  }
  ConsultarSueldos(usu:string,pass:string,codemp:number):Observable<any> {
    return this.http.get(API_URL+"Empleados/Sueldos?usu="+usu+"&contrasena="+pass+"&codemp="+codemp, httpOptions);
}
      Consultarempresa(usu:string,pass:string):Observable<any> {
    return this.http.get(API_URL+"Empleados/EMPRESAS?usu="+usu+"&contrasena="+pass, httpOptions);
      }
    ConsultarCentros(usu:string,pass:string):Observable<any> {
    return this.http.get(API_URL+"Empleados/Centro?usu="+usu+"&contrasena="+pass, httpOptions);
}
}
