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

  getCuentasName(): Observable<string[]>{
    var accountsUrl = 'http://localhost:3000/accountsName';  // URL to web api
    var id = Number(((document.getElementById("user") as HTMLInputElement).value));    
    const url = `${accountsUrl}/${id}`;
    return this.http.get<string[]>(url);
  }
  getSaldo(idCuenta:number):Observable<number[]>{
    var accountsUrl = 'http://localhost:3000/accountAmount';  // URL to web api
    var id = Number(((document.getElementById("user") as HTMLInputElement).value));    
    const url = `${accountsUrl}/${id}`;
    return this.http.get<number[]>(url);
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

