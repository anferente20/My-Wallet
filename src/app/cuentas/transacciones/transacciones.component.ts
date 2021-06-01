import { CuentasService } from './../../Servicios/cuentas.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TransaccionesService } from '../../Servicios/transacciones.service';
import { DatePipe } from '@angular/common';
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
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  transacciones: any;
  cuenta:any = '';
  ingresos: any;
  egresos: any;
  datepipe: DatePipe = new DatePipe('en-US')
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: TransaccionesService,
      private cuentaService : CuentasService
    ) { }

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.service.getTransacciones(id).subscribe(transacciones => (this.transacciones = transacciones));     
      this.cuentaService.getNombreCuenta(id).subscribe(nombreCuenta =>(this.cuenta = nombreCuenta[0])); 
      this.service.getIngresosCuenta(id).subscribe(incomes => (this.ingresos = incomes));
      this.service.getEgresosCuenta(id).subscribe(outcomes => (this.egresos = outcomes));
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
  graficar(){
    let labelIngresos = [];
    let valoresIngresos= [];
    for(let i= 0;i<this.ingresos.length;i++){
      labelIngresos.push(this.datepipe.transform(this.ingresos[i].fecha, 'dd-MMM-YYYY'));
      valoresIngresos.push(this.ingresos[i].monto);
    }
    const labelsI = labelIngresos;
    const data = {
      labels: labelsI,
      datasets: [{
        label: 'Ingresos',
        data: valoresIngresos,
        fill: false,
        borderColor: 'rgb(34, 190, 3)',
        tension: 0.1
      }
      ]
    };    
    var myChart = new Chart("ingresos", {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    let labelEgresos = [];
    let valoresEgresos= [];
    for(let i= 0;i<this.egresos.length;i++){
      labelEgresos.push(this.egresos[i].fecha);
      valoresEgresos.push(this.egresos[i].monto);
    }
    const labelsE = labelEgresos;
    const dataE = {
      labels: labelsE,
      datasets: [{
        label: 'Egresos',
        data: valoresEgresos,
        fill: false,
        borderColor: 'rgb(234, 53, 5)',
        tension: 0.1
      }
      ]
    };    
    var myChart2 = new Chart("egresos", {
        type: 'line',
        data: dataE,
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    console.log(this.ingresos);
    console.log(this.egresos);
  }
}
