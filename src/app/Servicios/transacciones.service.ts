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
}
