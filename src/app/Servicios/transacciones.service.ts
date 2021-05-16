import { Injectable } from '@angular/core';
import { Transaccion } from '../Interfaces/transaccion';
import { Transacciones } from '../Listas/lista-transacciones';


@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  constructor() { }

  getTransacciones(idCuenta:Number):Transaccion[]{
      let cuentasFiltradas:Transaccion[] = [];
      for (let transaccion of Transacciones){
        if(transaccion.idCuenta == idCuenta){
            cuentasFiltradas.push(transaccion);
        }
      } 
      return cuentasFiltradas;
  }

  getTotal(idCuenta:Number):number{
      let total: number = 0;
      for(let transaccion of Transacciones){
          if(transaccion.idCuenta == idCuenta){
            if(transaccion.tipo == true){
              total = total+transaccion.monto;
              }else{
                  total = total-transaccion.monto;
              }
          } 
      }
      return total;
  }

  getAllTransacciones(): Transaccion[]{
    return Transacciones;
  }

  getAllFechas(): string[]{
    let fechas: string[] = [];
    for(let transaccion of Transacciones){
      fechas.push(transaccion.fecha);
    }
    return fechas;
  }

  getIngresosFechas(): string[]{
    let fechas: string[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == true){
        fechas.push(transaccion.fecha);
      }
    }
    return fechas;
  }

  getIngresosValores(): number[]{
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == true){
        valores.push(transaccion.monto);
      }
    }
    return valores;
  }

  getIngresosAllValores(): number[]{
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == true){
        valores.push(transaccion.monto);
      }else{
        valores.push(0);
      }
    }
    return valores;
  }


  getEgresosAllValores(): number[]{
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == false){
        valores.push(transaccion.monto);
      }else{
        valores.push(0);
      }
    }
    return valores;
  }

  getTotalIngresos():number{
    let totalI: number = 0;
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == true){
        totalI = totalI + transaccion.monto;
      }
    }
    return totalI;
  }

  getTotalEgresos():number{
    let totalE: number = 0;
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == false){
        totalE = totalE + transaccion.monto;
      }
    }
    return totalE;
  }

  getEgresosFechas(): string[]{
    let fechas: string[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == false){
        fechas.push(transaccion.fecha);
      }
    }
    return fechas;
  }

  getEgresosValores(): number[]{
    let valores: number[] = [];
    for(let transaccion of Transacciones){
      if(transaccion.tipo == false){
        valores.push(transaccion.monto);
      }
    }
    return valores;
  }
}
