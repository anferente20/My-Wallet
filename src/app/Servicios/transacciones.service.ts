import { Injectable } from '@angular/core';
import { Transaccion } from '../Interfaces/transaccion';
import { Transacciones } from '../Listas/lista-transacciones';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getTransacciones(idCuenta:Number):Observable<Transaccion[]>{
    var transactionsUrl = 'http://localhost:3000/transactions';  // URL to web api    
    const url = `${transactionsUrl}/${idCuenta}`;
    return this.http.get<Transaccion[]>(url);
  }

  addTransaction (transaccion:any){
    var transactionsUrl = 'http://localhost:3000/addTransaction';  // URL to web api    
    return this.http.post(transactionsUrl,transaccion,this.httpOptions).subscribe((response)=>{
      console.log('response from post data is ', response);
    },(error)=>{
      console.log('error during post is ', error)
    });
  }

  getTotal(transacciones:Transaccion[]):number{    
    let total: number = 0;
    for(let transaccion of transacciones ){        
        if(transaccion.tipo == true){
          total = total+transaccion.monto;
          }else{
              total = total-transaccion.monto;
          }        
    }
    return total;      
  }

  getIngresos(idCliente:Number): Observable<string[]>{
    var transactionsUrl = 'http://localhost:3000/income';  // URL to web api    
    const url = `${transactionsUrl}/${idCliente}`;
    return this.http.get<string[]>(url);
  }

  getEgresos(idCliente:Number): Observable<string[]>{
    var transactionsUrl = 'http://localhost:3000/outcome';  // URL to web api    
    const url = `${transactionsUrl}/${idCliente}`;
    return this.http.get<string[]>(url);
  }
}
