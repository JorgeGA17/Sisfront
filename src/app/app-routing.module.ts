import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProyectosComponent } from './Proyecto/lista-proyectos/lista-proyectos.component';
import { ListaCortesComponent } from './Corte/lista-cortes/lista-cortes.component';
import { HomeComponent } from './home/home.component';
import { EstadisticaComponent } from './Estadistica/estadistica/estadistica.component';
import { DetalleProyectoComponent } from './Proyecto/lista-proyectos/detalle-proyecto/detalle-proyecto.component';

const routes: Routes = [

  { path: 'home', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  
  {path: 'lista-proyectos', component: ListaProyectosComponent},
  {path: 'lista-cortes', component: ListaCortesComponent},
  {path: 'estadistica', component: EstadisticaComponent},
  {path: 'detalle-proyecto', component: DetalleProyectoComponent},

  {
    path: 'detalle-proyecto/:proyectopk',
    component: DetalleProyectoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
