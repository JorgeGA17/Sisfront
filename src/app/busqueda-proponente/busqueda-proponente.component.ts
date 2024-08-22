import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../service/proyecto.service';
import { Proyecto } from '../models/proyecto';

@Component({
  selector: 'app-busqueda-proponente',
  templateUrl: './busqueda-proponente.component.html',
  styleUrls: ['./busqueda-proponente.component.css']
})

export class BusquedaProponenteComponent implements OnInit  {
   proyectosFiltrados: any[] = [];
  proyectosOriginales: any[] = [];
  searchTextDni: string = '';
  searchTextNombre: string = '';
  searchTextApellido: string = '';

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getAllProyectos();
  }

  getAllProyectos(): void {
    this.proyectoService.getAllProyectos().subscribe(response => {
      this.proyectosOriginales = response;
      this.proyectosFiltrados = response;
    });
  }

  filtrarProyectos(): void {
    if (!this.searchTextDni && !this.searchTextNombre && !this.searchTextApellido) {
      this.proyectosFiltrados = this.proyectosOriginales;
    } else {
      this.proyectosFiltrados = this.proyectosOriginales.map(proyecto => {
        const personasFiltradas = proyecto.personas.filter((persona: { nnumeroDocumento: string; xnombre: string; xapellido: string; }) => {
          return (this.searchTextDni && persona.nnumeroDocumento.toLowerCase().includes(this.searchTextDni.toLowerCase())) ||
                 (this.searchTextNombre && persona.xnombre.toLowerCase().includes(this.searchTextNombre.toLowerCase())) ||
                 (this.searchTextApellido && persona.xapellido.toLowerCase().includes(this.searchTextApellido.toLowerCase()));
        });
        return { ...proyecto, personas: personasFiltradas };
      }).filter(proyecto => proyecto.personas.length > 0);
    }
  }
  
  filtrarPersona(personas: any[]): boolean {
    console.log('Personas a filtrar:', personas);
    return personas.some(persona => {
      console.log('Persona:', persona);
      return (this.searchTextDni && persona.nnumeroDocumento.toLowerCase().includes(this.searchTextDni.toLowerCase())) ||
             (this.searchTextNombre && persona.xnombre.toLowerCase().includes(this.searchTextNombre.toLowerCase())) ||
             (this.searchTextApellido && persona.xapellido.toLowerCase().includes(this.searchTextApellido.toLowerCase()));
    });
  }

  
}