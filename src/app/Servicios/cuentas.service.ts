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

  getCuentas(): Observable<Cuenta[]>{
    var accountsUrl = 'http://localhost:3000/accounts';  // URL to web api
    var id = Number(((document.getElementById("user") as HTMLInputElement).value));
    /** GET Accounts from the server */
    const url = `${accountsUrl}/${id}`;
    return this.http.get<Cuenta[]>(url)
  }
}
