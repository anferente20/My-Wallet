import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Personas } from './lista-personas';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  private idRegistrado: number = 0;

  getPersonas(): Persona[]{
      return Personas;
  }

  getPersona(correo:string, contrasena:string):Persona{
     let p: Persona= {
        correo: '',
        nombres: '',
        contrasena: '',
        apellidos: '',
        telefono: 0,
        id: 0
      };
     for (let persona of Personas){
        if(persona.correo == correo && persona.contrasena == contrasena){
            p = persona;
        }
     } 
      return p;
  }

  getPersonaByID(id:number):Persona{
     let p: Persona= {
        correo: '',
        nombres: '',
        contrasena: '',
        apellidos: '',
        telefono: 0,
        id: 0
      };
     for (let persona of Personas){
        if(persona.id == id){
            p = persona;
        }
     } 
      return p;
  }

  existPersona(correo:string, contrasena:string): boolean{
      let exist: boolean = false;
      for (let persona of Personas){
        if(persona.correo == correo && persona.contrasena == contrasena){
            exist = true;
        }
     } 
      return exist;
  }

  setID(id:number){
      this.idRegistrado = id;
  }

  getID():Observable<number>{
      const id = of(this.idRegistrado) 
      return id;
  }
}
