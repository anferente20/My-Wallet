import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];
    const data = {
      labels: meses,
      datasets: [{
        label: 'Ingresos',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(34, 190, 3)',
        tension: 0.1
      },{
        label: 'Egresos',
        data: [35, 19, 60, 11, 26, 95, 70],
        fill: false,
        borderColor: 'rgb(234, 53, 5)',
        tension: 0.1
      }
      ]
    };    
    var myChart = new Chart("firstChart", {
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

    const pieData = {
      labels: [
        'Ingresos',
        'Egresos'
      ],
      datasets: [{
        label: 'Ingresos vs Egresos',
        data: [435, 196],
        fill: false,
        borderColor: [
          'rgb(34, 190, 3)',
          'rgb(234, 53, 5)'
        ],
        hoverOffset: 4,
        tension: 0.1
      }]
    };

    var secondChart = new Chart("secondChart", {
        type: 'doughnut',
        data: pieData,
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
  }

  
}
