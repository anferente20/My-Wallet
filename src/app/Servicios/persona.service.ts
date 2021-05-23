import { Injectable } from '@angular/core';
import { Persona } from '../Interfaces/persona';
import { Personas } from '../Listas/lista-personas';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private http: HttpClient
  ) { }

  private idRegistrado: number = 0;
  private usersUrl = 'http://localhost:3000/users';  // URL to web api
  private personas: any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPersonas(): Persona[] {    
    return Personas;        
    //return this.http.get<Persona[]>(this.usersUrl);

    //https://howtodoinjava.com/angular/rxjs-observable-httpclient/
  }


  getPersona(correo: string, contrasena: string): Persona {    
    let p: Persona = {
      correo: '',
      nombres: '',
      contrasena: '',
      apellidos: '',
      telefono: 0,
      id: 0
    }
    for (let persona of Personas) {
      if (persona.correo == correo && persona.contrasena == contrasena) {
        p = persona;
      }
    }
    return p;    
  }

  getPersonaByID(id: number): Persona {
    let p: Persona = {
      correo: '',
      nombres: '',
      contrasena: '',
      apellidos: '',
      telefono: 0,
      id: 0
    };
    for (let persona of Personas) {
      if (persona.id == id) {
        p = persona;
      }
    }
    return p;
  }

  existPersona(correo: string, contrasena: string): boolean {
    let exist: boolean = false;
    for (let persona of Personas) {
      if (persona.correo == correo && persona.contrasena == contrasena) {
        exist = true;
      }
    }
    return exist;
  }

  setID(id: number) {
    this.idRegistrado = id;
  }

  getID(): Observable<number> {
    const id = of(this.idRegistrado)
    return id;
  }
}
