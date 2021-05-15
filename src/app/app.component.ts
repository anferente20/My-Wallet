import { Component } from '@angular/core';
import { PersonaService } from './Servicios/persona.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    id:number = 0;
    constructor(private personaService: PersonaService){}
    title = 'My Wallet';

    getID(): void {
        this.personaService.getID()
          .subscribe(id => this.id = id);
    }
}
