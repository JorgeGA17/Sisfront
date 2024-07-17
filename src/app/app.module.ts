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
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
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
    DataTablesModule,
    MatCardModule,
    MatTableModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
