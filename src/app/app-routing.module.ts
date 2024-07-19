import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProyectosComponent } from './Proyecto/lista-proyectos/lista-proyectos.component';
import { ListaCortesComponent } from './Corte/lista-cortes/lista-cortes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'home', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  
  {path: 'lista-proyectos', component: ListaProyectosComponent},
  {path: 'lista-cortes', component: ListaCortesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
