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

  cuentas: Cuenta[] = [];
  constructor(private cuentasService: CuentasService) { }

  ngOnInit(): void {    
    this.cuentasService.getCuentas().subscribe(cuentas => (this.cuentas = cuentas));
  }
}
