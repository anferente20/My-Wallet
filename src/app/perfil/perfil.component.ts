import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../Interfaces/persona'; 
import { PersonaService } from '../Servicios/persona.service';


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
    this.persona.nombres= (document.getElementById("newNombres") as HTMLInputElement).value; 
    this.persona.apellidos = (document.getElementById("newApellidos") as HTMLInputElement).value; 
    this.persona.telefono = Number((document.getElementById("newTelefono") as HTMLInputElement).value); 

    this.personaService.editPersona(this.persona);
    this.router.navigate(['/cuentas']);
  }

  cancelar() {
    this.router.navigate(['/perfil']);
  }
}