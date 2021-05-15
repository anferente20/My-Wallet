import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona'; 
import { PersonaService } from '../persona.service';


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

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    let id = Number(((document.getElementById("user") as HTMLInputElement).value));
    this.persona = this.personaService.getPersonaByID(id);
  }
  
  actualizar() {
    this.router.navigate(['/cuentas']);
  }

  cancelar() {
    this.router.navigate(['/perfil']);
  }
}