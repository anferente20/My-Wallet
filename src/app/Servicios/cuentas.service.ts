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
}
