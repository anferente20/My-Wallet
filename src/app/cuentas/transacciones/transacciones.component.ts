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
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: TransaccionesService
    ) { }

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.transacciones = this.service.getTransacciones(id);
      this.total = this.service.getTotal(id);
  }

  getTipo(estado:boolean):string{
    if(estado == true){
      return 'Ingreso';
    }else{
      return 'Egreso';
    }
  }
}