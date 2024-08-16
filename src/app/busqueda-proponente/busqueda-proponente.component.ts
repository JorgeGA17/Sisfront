import { Component } from '@angular/core';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-busqueda-proponente',
  templateUrl: './busqueda-proponente.component.html',
  styleUrls: ['./busqueda-proponente.component.css']
})


export class BusquedaProponenteComponent {
  proyectosFiltrados: any[] = [];

  concatenarNombres(personas: any[]): string {
  return personas.map(p => p.xnombreCompleto).join(', ');
}

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getAllProyectos();
  }

  getAllProyectos(): void {
    this.proyectoService.getAllProyectos().subscribe(response => {
      this.proyectosFiltrados = response;
    });
  }
}
