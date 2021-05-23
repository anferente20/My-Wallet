import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../Interfaces/persona';
import { PersonaService } from '../Servicios/persona.service';
import { AppComponent } from '../app.component';

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
   personas: Persona[] = [];

  constructor(private router: Router, private personaService: PersonaService, private app: AppComponent) {     
  }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(personas =>(this.personas = personas));
  }

  acceder() {
    var correo = ((document.getElementById("Correo") as HTMLInputElement).value);
    var contrasena = ((document.getElementById("Contrasena") as HTMLInputElement).value);

    if (this.personaService.existPersona(correo,contrasena)) {
      this.persona = this.personaService.getPersona(correo, contrasena);
      this.personaService.setID(this.persona.id);
      this.router.navigate(['/cuentas']);
      this.app.getID();
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
