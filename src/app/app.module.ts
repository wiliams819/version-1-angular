import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* modulo para trabajar con ngModel []  */
import { FormsModule } from '@angular/forms';
/* modulo para trabajar con solicitudes http */
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductosComponent,
    NavegacionComponent,
    ReversePipe,
    TimeAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
