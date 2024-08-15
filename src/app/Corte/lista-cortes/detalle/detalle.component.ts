import { Component, OnInit } from '@angular/core';
import { Miembro } from '../../../models/Miembro';
import { MiembroService } from '../../../service/miembro.service';
import { ProyectoService } from '../../../service/proyecto.service';
import { Proyecto } from '../../../models/proyecto';
import { Presidente } from '../../../models/Presidente';
import { PresidenteService } from '../../../service/presidente.service';
import { ActivatedRoute } from '@angular/router';
import { ComisionService } from '../../../service/comision.service';
import { Comision } from '../../../models/Comision';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  miembros: Miembro[];
  proyectos: Proyecto[];
  presidentes: Presidente[];
  filtro: string;

  constructor(private miembroService: MiembroService, 
              private proyectoService: ProyectoService, 
              private presidenteService: PresidenteService, 
              private comisionService: ComisionService,
              private route: ActivatedRoute) { }
              
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filtro = params['filtro'];
       this.getProyectos();
       this.getMiembros();
      this.getPresidentes();
    });
  }


  getMiembros(): void {
    this.miembroService.getAllMiembros().subscribe((miembros: Miembro[]) => {
      this.comisionService.getAllComisiones().subscribe((comisiones: Comision[]) => {
        const comisionesFiltradas = comisiones.filter(c => c.cortefk.xnombreCorto === this.filtro);
        const miembrosFiltrados = miembros.filter(m => comisionesFiltradas.some(c => c.comisionPk === m.comisionfk.comisionPk));
        this.miembros = miembrosFiltrados;
      });
    });
  }

  getProyectos(): void {
    this.proyectoService.getAllProyectos().subscribe((proyectos: Proyecto[]) => {
      this.proyectos = proyectos.filter(p => p.cortefk.xnombreCorto === this.filtro);
    });
  }

  getPresidentes(): void {
    this.presidenteService.getAllPresidentes().subscribe((presidentes: Presidente[]) => {
      this.presidentes = presidentes.filter(p => p.cortefk.xnombreCorto === this.filtro);
    });
  }
}



