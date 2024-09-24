import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from '../../../service/proyecto.service';
import { Proyecto } from '../../../models/proyecto';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {
  proyecto: Proyecto;
  proyectopk: number;
  archivosProyectosPath = 'assets/archivoproyectos/';
  private location: Location;

  constructor(private route: ActivatedRoute, private proyectoService: ProyectoService,location: Location ) { 
    this.location = location; // Inicialización de la propiedad location
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const proyectopkParam = params.get('proyectopk');
      if (proyectopkParam) {
        this.proyectopk = parseInt(proyectopkParam, 10);
        this.proyectoService.getProyectoById(this.proyectopk).subscribe(data => {
          this.proyecto = data;
           });
      } else {
        console.error('El parámetro proyectopk no está presente');
      }
    });
  }

  
  volver(): void {
    this.location.back();
  }

 

}