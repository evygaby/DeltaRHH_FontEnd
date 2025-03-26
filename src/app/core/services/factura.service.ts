import { Injectable } from '@angular/core';
import { NubeFactura } from '../models/factura';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { 

  }
  post(url:string,factura: NubeFactura):Observable<any> {
    //console.log(JSON.stringify(factura))
    //https://localhost:7271/api/NubeFactura
      return this.http.post(url,JSON.stringify(factura), httpOptions);
      
  }

}
