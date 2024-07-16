import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProyectosComponent } from './Proyecto/lista-proyectos/lista-proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaCortesComponent } from './Corte/lista-cortes/lista-cortes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProyectosComponent,
    ListaCortesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
