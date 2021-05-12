import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  acceder() {
    this.router.navigate(['/cuentas']);
  }
  registrarse() {
    this.router.navigate(['/login']);
  }
  cancelar() {
    this.router.navigate(['/login']);
  }
}
