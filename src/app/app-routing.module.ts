import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from './cuentas/cuentas.component';
import { AgregarCuentaComponent } from './agregar-cuenta/agregar-cuenta.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

const routes: Routes = [
  { path: '', redirectTo: '/cuentas', pathMatch: 'full' },
  { path: 'cuentas', component: CuentasComponent },
  { path: 'agregar-cuenta', component: AgregarCuentaComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'egresos', component: EgresosComponent },
  { path: 'estadisticas', component: EstadisticasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }