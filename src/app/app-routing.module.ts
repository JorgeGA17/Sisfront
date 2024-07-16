import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProyectosComponent } from './Proyecto/lista-proyectos/lista-proyectos.component';
import { ListaCortesComponent } from './Corte/lista-cortes/lista-cortes.component';

const routes: Routes = [

  { path: 'lista-proyectos', component:ListaProyectosComponent},
  {path:'',redirectTo:'/lista-proyectos',pathMatch:'full'},

  {path: 'lista-cortes', component: ListaCortesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
