import { CuentasService } from './../../Servicios/cuentas.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Transaccion } from '../../Interfaces/transaccion';
import { TransaccionesService } from '../../Servicios/transacciones.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  transacciones: Transaccion[] = [];
  total: number = 0;
  cuenta:string = '';
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: TransaccionesService,
      private cuentaService : CuentasService
    ) { }

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const idCliente = Number(((document.getElementById("user") as HTMLInputElement).value));
      this.transacciones = this.service.getTransacciones(id,idCliente);
      this.total = this.service.getTotal(id,idCliente);
      this.cuenta = this.cuentaService.getNombreCuenta(id);
      console.log(this.cuenta);
  }

  getTipo(estado:boolean):string{
    if(estado == true){
      return 'Ingreso';
    }else{
      return 'Egreso';
    }
  }
}
