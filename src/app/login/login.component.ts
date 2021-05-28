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

  persona: any;
  personas: Persona[] = [];

  constructor(private router: Router, private personaService: PersonaService, private app: AppComponent) {     
  }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(personas =>(this.personas = personas));
  }

  acceder() {
    var correo = ((document.getElementById("Correo") as HTMLInputElement).value);
    var contrasena = ((document.getElementById("Contrasena") as HTMLInputElement).value);

    if (this.existPersona (correo, contrasena)) {

      this.personaService.setID(this.persona.id);
      this.router.navigate(['/cuentas']);
      this.app.getID();
    } else {
      this.router.navigate(['/login']);
    }

  }
  registrarse() {
    var correo = ((document.getElementById("addCorreo") as HTMLInputElement).value);
    var contrasena = ((document.getElementById("addContrasena") as HTMLInputElement).value);
    var confirmContrasena = ((document.getElementById("ContrasenaConfirmada") as HTMLInputElement).value);
    var nombres = ((document.getElementById("addNombres") as HTMLInputElement).value);
    var apellidos = ((document.getElementById("addApellidos") as HTMLInputElement).value);
    var telefono = ((document.getElementById("addTelefono") as HTMLInputElement).value);
    
    if(contrasena === confirmContrasena){
      let person = {
        'correo' : correo,
        'contrasena' : contrasena,
        'nombres' : nombres,
        'apellidos' : apellidos,
        'telefono' : Number(telefono)
      }
      this.personaService.addPersona(person);
    }
    this.router.navigate(['/login']);
  }
  cancelar() {
    this.router.navigate(['/login']);
  }

  existPersona(correo:string, contrasena: string):boolean{
    let exists : boolean = false;
    for(let persona of this.personas){
      if(persona.correo == correo && persona.contrasena == contrasena ){
        exists = true;
        this.persona = persona;
      }
    }
    return exists
  }
}
