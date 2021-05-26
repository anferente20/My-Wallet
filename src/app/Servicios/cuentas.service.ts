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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCuentas(): Observable<Cuenta[]>{
    var accountsUrl = 'http://localhost:3000/accounts';  // URL to web api
    var id = Number(((document.getElementById("user") as HTMLInputElement).value));    
    const url = `${accountsUrl}/${id}`;
    return this.http.get<Cuenta[]>(url);
  }

  getNombreCuenta(idCuenta:number):string{
    let nombreCuenta : string = '';
    for(let cuenta of Cuentas){
      if(cuenta.id = idCuenta){
        nombreCuenta = cuenta.nombre;
      }
    }
    return nombreCuenta;
  }

  addCuenta(nombre:string, descripcion:string,idCliente:number){
    let url ='http://localhost:3000/addAccount';
    this.http.post(
      url,
      {
        "nombre":nombre,
        "descripcion":descripcion,
        "idcliente":idCliente
      },
      this.httpOptions).subscribe((response)=>{
        console.log('response from post data is ', response);
      },(error)=>{
        console.log('error during post is ', error)
      });
  }

  deleteCuenta(id:number){
    let url ='http://localhost:3000/deleteAccount';
    this.http.post(url,{'id':id}).subscribe((response)=>{
      console.log('response from post data is ', response);
    },(error)=>{
      console.log('error during post is ', error)
    });
  }
}

