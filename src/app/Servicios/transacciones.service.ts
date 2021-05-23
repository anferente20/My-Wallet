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

  getTransacciones(idCuenta:Number, idCliente:Number):Transaccion[]{
      let cuentasFiltradas:Transaccion[] = [];
      for (let transaccion of Transacciones){
        if(transaccion.idCuenta == idCuenta && transaccion.idCliente == idCliente){
            cuentasFiltradas.push(transaccion);
        }
      }      
      return cuentasFiltradas;
  }

  getTotal(idCuenta:Number, idCliente:Number):number{
      let total: number = 0;
      for(let transaccion of Transacciones ){
          if(transaccion.idCuenta == idCuenta && transaccion.idCliente == idCliente){
            if(transaccion.tipo == true){
              total = total+transaccion.monto;
              }else{
                  total = total-transaccion.monto;
              }
          } 
      }
      return total;
  }

  getAllTransacciones(idCliente: Number): Transaccion[]{
    let cuentasFiltradas:Transaccion[] = [];
      for (let transaccion of Transacciones){
         if(transaccion.idCliente == idCliente){
            cuentasFiltradas.push(transaccion);
        }
      } 
      return cuentasFiltradas;
  }

  getAllFechas(idCliente: Number): string[]{
    let fechas: string[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.idCliente == idCliente){
        fechas.push(transaccion.fecha);
      }
    }
    return fechas;
  }

  getIngresosFechas(idCliente:Number): string[]{
    let fechas: string[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == true && transaccion.idCliente == idCliente){
        fechas.push(transaccion.fecha);
      }
    }
    return fechas;
  }

  getIngresosValores(idCliente:Number): number[]{
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == true && transaccion.idCliente == idCliente){
        valores.push(transaccion.monto);
      }
    }
    return valores;
  }

  getIngresosAllValores(idCliente:Number): number[]{
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.idCliente == idCliente){
        if(transaccion.tipo == true ){
          valores.push(transaccion.monto);
        }else{
          valores.push(0);
        }
      }
    }
    return valores;
  }


  getEgresosAllValores(idCliente:Number): number[]{
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.idCliente == idCliente){
        if(transaccion.tipo == false ){
          valores.push(transaccion.monto);
        }else{
          valores.push(0);
        }
      }
    }
    return valores;
  }

  getTotalIngresos(idCliente:Number):number{
    let totalI: number = 0;
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == true && transaccion.idCliente == idCliente){
        totalI = totalI + transaccion.monto;
      }
    }
    return totalI;
  }

  getTotalEgresos(idCliente:Number):number{
    let totalE: number = 0;
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == false && transaccion.idCliente == idCliente){
        totalE = totalE + transaccion.monto;
      }
    }
    return totalE;
  }

  getEgresosFechas(idCliente:Number): string[]{
    let fechas: string[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == false && transaccion.idCliente == idCliente){
        fechas.push(transaccion.fecha);
      }
    }
    return fechas;
  }

  getEgresosValores(idCliente:Number): number[]{
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == false && transaccion.idCliente == idCliente){
        valores.push(transaccion.monto);
      }
    }
    return valores;
  }
}
