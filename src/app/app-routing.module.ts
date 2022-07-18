import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {VentaComponent} from "./venta/venta.component";
import {AddempleadoComponent} from "./addempleado/addempleado.component";
import {RotacionComponent} from "./rotacion/rotacion.component";
import {InventarioComponent} from "./inventario/inventario.component";
import {BoletaComponent} from "./boleta/boleta.component";
import {FacturaComponent} from "./factura/factura.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "venta", component: VentaComponent},
  {path:"empleado", component: AddempleadoComponent},
  {path: "rotacion", component: RotacionComponent},
  {path: "inventario", component:InventarioComponent},
  {path: "boleta", component: BoletaComponent},
  {path: "factura", component: FacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
