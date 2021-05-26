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

  transacciones: any;
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
      this.service.getTransacciones(id).subscribe(transacciones => (this.transacciones = transacciones));      
      this.cuenta = this.cuentaService.getNombreCuenta(id);
      console.log(this.cuenta);            
  }
  getTotal():number{
    if(this.transacciones == null){
      return 0;
    }else{
      return this.service.getTotal(this.transacciones);
    }
  }
  getTipo(estado:boolean):string{
    if(estado == true){
      return 'Ingreso';
    }else{
      return 'Egreso';
    }
  }

  eliminarCuenta(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cuentaService.deleteCuenta(id);
    this.router.navigate(['/cuentas']);
  }
}
