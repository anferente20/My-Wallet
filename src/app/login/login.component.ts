import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  persona: Persona = {
    correo: '',
    nombres: '',
    contrasena: '',
    apellidos: '',
    telefono: 0,
    id: 0
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.persona = {
      correo: 'pepito@gmail.com',
      nombres: 'Pepito',
      contrasena: 'asdf1234',
      apellidos: 'Perez',
      telefono: 12345,
      id: 1
    };
  }

  acceder() {
    var correo = ((document.getElementById("Correo") as HTMLInputElement).value);
    var contrasena = ((document.getElementById("Contrasena") as HTMLInputElement).value);
    if (correo == this.persona.correo && contrasena == this.persona.contrasena) {
      this.router.navigate(['/cuentas']);
      //setear el ID del usuario de forma global       
      
    } else {
      this.router.navigate(['/login']);
    }

  }
  registrarse() {
    this.router.navigate(['/login']);
  }
  cancelar() {
    this.router.navigate(['/login']);
  }
}
