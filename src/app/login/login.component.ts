import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
persona: Persona={correo:'pepito@gmail.com', nombres:'Pepito', apellidos:'Perez', telefono:12345, id:1};
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  acceder() {
    this.router.navigate(['/cuentas']);
  }
  registrarse() {
    this.router.navigate(['/login']);
  }
  cancelar() {
    this.router.navigate(['/login']);
  }
}
