import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from '../Servicios/transacciones.service';
import { CuentasService } from '../Servicios/cuentas.service';

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';


Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);
@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  idCliente = Number(((document.getElementById("user") as HTMLInputElement).value));
  constructor(
    private service: TransaccionesService,
    private cuenta: CuentasService
    ) { 
    }
  
  cuentas:any = [];
  
  
  ngOnInit(): void { 
    this.cuenta.getCuentasName().subscribe(cuentas =>(this.cuentas = cuentas));
  }

  agregarIngreso(){
    let descripcion = ((document.getElementById("descripcion") as HTMLInputElement).value);
    let valor = Number(((document.getElementById("monto") as HTMLInputElement).value));
    let cuenta = Number((document.getElementById("cuenta") as HTMLInputElement).value);
    let fecha = ((document.getElementById("start") as HTMLInputElement).value);
    let destinatario = ((document.getElementById("destinatario") as HTMLInputElement).value);

    let ingreso ={
      "fecha":fecha,
      "descripcion": descripcion,
      "tipo": true,
      "idcuenta":cuenta,
      "monto":valor,
      "destinatario": destinatario
    }

    console.log(this.service.addTransaction(ingreso));
  }

}
