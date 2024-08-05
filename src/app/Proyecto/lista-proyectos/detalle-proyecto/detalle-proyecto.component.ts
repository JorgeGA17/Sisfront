import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from '../../../service/proyecto.service';
import { Proyecto } from '../../../models/proyecto';



@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {
  proyecto: Proyecto;
  proyectopk: number;

  constructor(private route: ActivatedRoute, private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const proyectopkParam = params.get('proyectopk');
      if (proyectopkParam) {
        this.proyectopk = parseInt(proyectopkParam, 10);
        this.proyectoService.getProyectoById(this.proyectopk).subscribe(data => {
          console.log(data);
          this.proyecto = data;
        });
  
      } else {
        // Manejar el caso en que el parámetro proyectopk no esté presente
        console.error('El parámetro proyectopk no está presente');
      }
    });
  }

  volver(): void {
    this.router.navigate(['/lista-proyectos']);
  }

} 