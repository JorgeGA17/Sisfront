import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProyectosComponent } from './Proyecto/lista-proyectos/lista-proyectos.component';
import { ListaCortesComponent } from './Corte/lista-cortes/lista-cortes.component';
import { HomeComponent } from './home/home.component';
import { EstadisticaComponent } from './Estadistica/estadistica/estadistica.component';
import { DetalleComponent } from './Corte/lista-cortes/detalle/detalle.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
import { BusquedaProponenteComponent } from './busqueda-proponente/busqueda-proponente.component';
import { DetalleProyectoComponent } from './Proyecto/detalle-proyecto/detalle-proyecto.component';
import { LoginComponent } from './login/login.component';

// Importa el guardián de autenticación.
import { authGuard } from './guards/auth.guard'; 

const routes: Routes = [
  // Ruta de login no protegida
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  // Rutas protegidas con el AuthGuard
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'lista-proyectos', component: ListaProyectosComponent, canActivate: [authGuard] },
  { path: 'lista-cortes', component: ListaCortesComponent, canActivate: [authGuard] },
  { path: 'estadistica', component: EstadisticaComponent, canActivate: [authGuard] },
  { path: 'detalle-proyecto', component: DetalleProyectoComponent, canActivate: [authGuard] },
  { path: 'detalle-corteproyecto', component: DetalleComponent, canActivate: [authGuard] },
  { path: 'busqueda-avanzada', component: BusquedaAvanzadaComponent, canActivate: [authGuard] },
  { path: 'busqueda-proponente', component: BusquedaProponenteComponent, canActivate: [authGuard] },

  {
    path: 'detalle-proyecto/:proyectopk',
    component: DetalleProyectoComponent,
    canActivate: [authGuard] // También protege las rutas con parámetros
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }