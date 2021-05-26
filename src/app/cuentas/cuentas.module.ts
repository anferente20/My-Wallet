import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasRoutingModule } from './cuentas-routing.module';
import { TransaccionesComponent } from './transacciones/transacciones.component';


@NgModule({
  declarations: [
    TransaccionesComponent,
  ],
  imports: [
    CommonModule,
    CuentasRoutingModule
  ]
})
export class CuentasModule { }
