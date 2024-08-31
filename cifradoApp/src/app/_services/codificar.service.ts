import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Parametro } from '../_model/parametro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodificarService {

  private url:string = `${environment.HOST}`;

  constructor(private http: HttpClient) { }


  cifrado(parametro: Parametro): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(parametro);
    return this.http.post<any>(`${this.url}/api/usuarios/encriptar`,body,{'headers':headers});
  }


    descifrado(parametro: Parametro): Observable<any> {
      console.log(parametro)
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(parametro);
      return this.http.post<any>(`${this.url}/api/usuarios/desencriptar`,body,{'headers':headers});
    }
  }
