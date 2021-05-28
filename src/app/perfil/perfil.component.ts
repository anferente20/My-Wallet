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
    id:0, 
    nombres:'',
    apellidos:'', 
    telefono: 0, 
    contrasena: '', 
    correo:''
  };

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    let id = Number(((document.getElementById("user") as HTMLInputElement).value));
    this.personaService.getPersonaByID(id).subscribe(person => (this.persona = person[0]));
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