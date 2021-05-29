import { Component, OnInit, ElementRef } from '@angular/core';
import { TransaccionesService } from '../Servicios/transacciones.service';

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
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  constructor(
    private service: TransaccionesService
    ) { }
  ingresos: any;
  egresos: any;

  ngOnInit(): void {
    const idCliente = Number(((document.getElementById("user") as HTMLInputElement).value));
    this.service.getIngresos(idCliente).subscribe(incomes => (this.ingresos = incomes));
    this.service.getEgresos(idCliente).subscribe(outcomes => (this.egresos = outcomes));
  }

  graficar(){
    let botones = document.getElementById("botones") as HTMLElement;
    botones.style.display = 'none';
    let totalingresos = 0;
    let totalEgresos = 0;
    let grafica = Number(((document.getElementById("grafica") as HTMLInputElement).value));
    for(let i=0;i< this.ingresos.length; i++){
      totalingresos += this.ingresos[i].monto;
    }
    for(let i=0;i< this.egresos.length; i++){
      totalEgresos += this.egresos[i].monto;
    }
    let data: any;
    let secondChart: any;
    switch(grafica){
      case 1:
        data = {
          labels: [
            'Ingresos',
            'Egresos'
          ],
          datasets: [{
            label: 'Ingresos vs Egresos',
            data: [totalingresos, totalEgresos],
            fill: false,
            borderColor: [
              'rgb(34, 190, 3)',
              'rgb(234, 53, 5)'
            ],
            hoverOffset: 4,
            tension: 0.1
          }]
        };
    
        secondChart = new Chart("firstChart", {
          type: 'pie',
          data: data,
          options: {
              radius: 150,
              maintainAspectRatio: false,
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
      break;
      case 2:
        data = {
          labels: [
            'Ingresos',
            'Egresos'
          ],
          datasets: [{
            label: 'Ingresos vs Egresos',
            data: [totalingresos, totalEgresos],
            fill: false,
            borderColor: [
              'rgb(34, 190, 3)',
              'rgb(234, 53, 5)'
            ],
            hoverOffset: 4,
            tension: 0.1
          }]
        };
    
        secondChart = new Chart("firstChart", {
          type: 'doughnut',
          data: data,
          options: {
              radius: 150,
              maintainAspectRatio: false,
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
        });
      break;
      case 3:
        data = {
          labels: [
            'Ingresos',
            'Egresos'
          ],
          datasets: [{
            label: 'Ingresos vs Egresos',
            data: [totalingresos, totalEgresos],
            fill: false,
            backgroundColor: [
              'rgb(34, 190, 3)',
              'rgb(234, 53, 5)'
            ],
            borderColor: [
              'rgb(34, 190, 3)',
              'rgb(234, 53, 5)'
            ],
            hoverOffset: 4,
            tension: 0.1
          }]
        };

        secondChart = new Chart("firstChart", {
          type: 'bar',
          data: data,
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        secondChart = {
          type: 'bar',
          data: data,
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
        };
      break;
    }
    
  }

  
}
