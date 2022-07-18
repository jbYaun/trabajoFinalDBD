import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { VentaComponent } from './venta/venta.component';
import { AddempleadoComponent } from './addempleado/addempleado.component';
import {RouterModule} from "@angular/router";
import { RotacionComponent } from './rotacion/rotacion.component';
import { BoletaComponent } from './boleta/boleta.component';
import { FacturaComponent } from './factura/factura.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentaComponent,
    AddempleadoComponent,
    RotacionComponent,
    BoletaComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
