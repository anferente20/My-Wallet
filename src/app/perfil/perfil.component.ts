import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona'; 

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  persona: Persona = {
    correo:'', 
    nombres:'', 
    contrasena: '',
    apellidos:'', 
    telefono: 0, 
    id:0
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.persona = {
      correo:'pepito@gmail.com', 
      nombres:'Pepito', 
      contrasena: 'asdf1234',
      apellidos:'Perez', 
      telefono:12345, 
      id:1
    };
  }
  
  actualizar() {
    this.router.navigate(['/cuentas']);
  }

  cancelar() {
    this.router.navigate(['/perfil']);
  }
}