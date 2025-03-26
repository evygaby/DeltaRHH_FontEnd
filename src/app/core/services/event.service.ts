import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
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
    private handler = new Subject<Event>();
    constructor(private http: HttpClient) { }
    getObjeto() {
      return this.miObjeto;
  }
  modificarObjeto(nuevoObjeto:EMP) {
    this.miObjeto = nuevoObjeto;
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
    Consultarempleados():Observable<any> {
      return this.http.get(API_URL+"Empleados/Get", httpOptions);
  }
  
}
