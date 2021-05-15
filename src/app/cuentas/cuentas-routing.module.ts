import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from './cuentas.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';

const routes: Routes = [
    { path: 'cuentas',  component: CuentasComponent },
  { path: 'transacciones/:id', component: TransaccionesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentasRoutingModule { }
