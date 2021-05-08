import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   isCollapse = false;

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
       if(location.path()=='/login'){
         this.isCollapse = true;
       }else{
         this.isCollapse = false;
       }
      
    });
  }



  ngOnInit() {}

  toggleState() { // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false; 
  }
}

