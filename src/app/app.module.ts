import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListaCortesComponent } from "./Corte/lista-cortes/lista-cortes.component";
import { ListaProyectosComponent } from "./Proyecto/lista-proyectos/lista-proyectos.component";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { FooterComponent } from './home/footer/footer.component';
import { EstadisticaComponent } from './Estadistica/estadistica/estadistica.component';
import { DetalleProyectoComponent } from './Proyecto/lista-proyectos/detalle-proyecto/detalle-proyecto.component';
import { DetalleComponent } from './Corte/lista-cortes/detalle/detalle.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaProyectosComponent,
    ListaCortesComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent,
    EstadisticaComponent,
    DetalleProyectoComponent,
    DetalleComponent,
    BusquedaAvanzadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    MatCardModule,
    MatTableModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
