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

  getPersonas():Observable<Persona[]> {    
    return this.http.get<Persona[]>(this.usersUrl);
  }


  /** getPersona(correo: string, contrasena: string): Observable<Persona> {
    let url = this.usersUrl+'/'+correo+'/'+contrasena;    
    return this.http.get<Persona>(this.usersUrl);   
  }**/

  getPersonaByID(id: number): Observable<Persona[]> {
    var usersUrl = 'http://localhost:3000/users';  // URL to web api  
    const url = `${usersUrl}/${id}`;  
    return this.http.get<Persona[]>(url);
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

  addPersona(persona:any){
    let url = 'http://localhost:3000/addUser'; 
    this.http.post(url,persona).subscribe((response)=>{
      console.log('response from post data is ', response);
    },(error)=>{
      console.log('error during post is ', error)
    });
  }

  editPersona(persona:Persona){
    let url = 'http://localhost:3000/editUser'; 
    this.http.post(url,persona).subscribe((response)=>{
      console.log('response from post data is ', response);
    },(error)=>{
      console.log('error during post is ', error)
    });
  }
}
