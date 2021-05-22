import { Injectable } from '@angular/core';
import { Cuentas } from '../Listas/lista-cuentas';
import { Cuenta } from '../Interfaces/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor() { }

  getCuentas(): Cuenta[]{
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
