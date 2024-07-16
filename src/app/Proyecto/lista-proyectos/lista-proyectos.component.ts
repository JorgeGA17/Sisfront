import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';
import { ProyectoService } from '../../service/proyecto.service';


@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {
 
  proyectos: Proyecto[];

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.getProyectos();
  }


  private getProyectos(): void {
    this.proyectoService.getAllProyectos().subscribe(data => {
      this.proyectos = data;
  
    });
  }
}
