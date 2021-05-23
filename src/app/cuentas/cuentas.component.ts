import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../Servicios/cuentas.service';
import { Cuenta } from '../Interfaces/cuenta';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  cuentas: any;
  constructor(private cuentasService: CuentasService) { }

  ngOnInit(): void {    
      this.cuentas = this.cuentasService.getCuentas();
  }

}
