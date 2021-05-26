import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../Servicios/cuentas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.component.html',
  styleUrls: ['./agregar-cuenta.component.css']
})
export class AgregarCuentaComponent implements OnInit {

  constructor(private service:CuentasService,private router: Router) { }

  ngOnInit(): void {
  }

  agregarCuenta(){
    var id = Number(((document.getElementById("user") as HTMLInputElement).value)); 
    var nombre:string = (document.getElementById("nombre") as HTMLInputElement).value; 
    var descripcion:string = (document.getElementById("descripcion") as HTMLInputElement).value; 

    this.service.addCuenta(nombre,descripcion,id);
    this.router.navigate(['/cuentas']);
  }
}
