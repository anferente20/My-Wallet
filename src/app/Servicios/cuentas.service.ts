import { Injectable } from '@angular/core';
import { Cuentas } from '../Listas/lista-cuentas';
import { Cuenta } from '../Interfaces/cuenta';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient) { }

  getCuentas(): Cuenta[]{
    /*var accountsUrl = 'http://localhost:3000/accounts';  // URL to web api
    var id = Number(((document.getElementById("user") as HTMLInputElement).value));
    
    const url = `${accountsUrl}/${id}`;
    return this.http.get<Cuenta[]>(url);
    */
   return Cuentas;
  }

  getNombreCuenta(idCuenta:number):string{
    let nombreCuenta : string = '';
    for(let cuenta of Cuentas){
      if(cuenta.idCuenta = idCuenta){
        nombreCuenta = cuenta.nombre;
      }
    }
    return nombreCuenta;
  }
}
