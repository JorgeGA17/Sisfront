import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { CorteService } from '../service/corte.service';
import { Corte } from '../models/corte';
import { Eje } from '../models/Eje';
import { EjeService } from '../service/eje.service';
import { Especialidad } from '../models/especialidad';
import { EspecialidadService } from '../service/especialidad.service';
import { Jerarquia } from '../models/Jerarquia';
import { JerarquiaService } from '../service/jerarquia.service';
import { Estado } from '../models/estado';
import { EstadoService } from '../service/estado.service';
import { Etiqueta } from '../models/Etiqueta';
import { EtiquetaService } from '../service/etiqueta.service';


@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.css']
})
export class BusquedaAvanzadaComponent implements OnInit {
  
  proyectos: Proyecto[];
  proyectosFiltrados: Proyecto[];
  cortes: Corte[];
  especialidades: Especialidad[];
  ejes: Eje[];
  jerarquias: Jerarquia[];
  estados: Estado[];
  etiquetas: Etiqueta[];
  corteSeleccionada: number | null | undefined;
  ejeSeleccionado: number | null | undefined;
  especialidadSeleccionada: number | null | undefined;
  jerarquiaSeleccionada: number | null | undefined;
  estadoSeleccionado: number | null | undefined;
  etiquetaSeleccionada: number | null | undefined;

  constructor(private proyectoService: ProyectoService, 
              private corteService: CorteService, 
              private ejeService: EjeService,
              private especialidadService: EspecialidadService,
              private jerarquiaService: JerarquiaService,
              private estadoService: EstadoService,
              private etiquetaService: EtiquetaService){}

  ngOnInit(): void {
    this.getProyectos();
    this.getCortes();
    this.getEjes();
    this.getEspecialidades();
    this.getJerarquias();
    this.getEstados();
    this.getEtiquetas();
  }

  private getProyectos(){ 
    this.proyectoService.getAllProyectos().subscribe(dato =>{
      this.proyectos=dato;
      this.proyectosFiltrados = this.proyectos; // Inicializa proyectosFiltrados con todos los proyectos
    });
  }

  private getCortes(){
    this.corteService.getAllCortes().subscribe(dato =>{
      this.cortes=dato;
    });
  }

  private getEjes(){
    this.ejeService.getAllEjes().subscribe(dato =>{
      this.ejes=dato;
    });
  }

  private getEspecialidades(){
    this.especialidadService.getAllEspecialidades().subscribe(dato =>{
      this.especialidades=dato;
    });
  }

  private getJerarquias(){
    this.jerarquiaService.getAllJerarquias().subscribe(dato =>{
      this.jerarquias=dato;
    });
  }

  private getEstados(){
    this.estadoService.getAllEstados().subscribe(dato =>{
      this.estados=dato;
    });
  }

  private getEtiquetas(){
    this.etiquetaService.getAllEtiquetas().subscribe(dato =>{
      this.etiquetas=dato;
    });
  }

filtrarProyectos() {
  this.proyectosFiltrados = this.proyectos.filter(proyecto => {
      let filtroCorte = this.corteSeleccionada ? proyecto.cortefk.cortePk == this.corteSeleccionada : true;
      let filtroJerarquia = this.jerarquiaSeleccionada ? proyecto.jerarquias.some(jerarquia => jerarquia.jerarquiaPk == this.jerarquiaSeleccionada) : true;
      let filtroEspecialidad = this.especialidadSeleccionada ? proyecto.especialidades.some(especialidad => especialidad.especialidadPk == this.especialidadSeleccionada) : true;
      let filtroEje = this.ejeSeleccionado ? proyecto.ejes.some(eje => eje.ejePk == this.ejeSeleccionado) : true;
      let filtroEstado = this.estadoSeleccionado ? proyecto.estadofk.estadoPk == this.estadoSeleccionado : true;
      let filtroEtiqueta = this.etiquetaSeleccionada ? proyecto.etiquetas.some(etiqueta => etiqueta.etiquetaPk == this.etiquetaSeleccionada) : true;

      return filtroCorte && filtroJerarquia && filtroEspecialidad && filtroEje && filtroEstado && filtroEtiqueta;
  });
}


  seleccionarCorte(corte: number) {
    this.corteSeleccionada = corte;
    this.filtrarProyectos();
  }

  seleccionarEje(eje: number) {
    this.ejeSeleccionado = eje;
    this.filtrarProyectos();
  }

  seleccionarEspecialidad(especialidad: number) {
    this.especialidadSeleccionada = especialidad;
    this.filtrarProyectos();
  }

  seleccionarJerarquia(jerarquia: number) {
    this.jerarquiaSeleccionada = jerarquia;
    this.filtrarProyectos();
  }

  seleccionarEstado(estado: number) {
    this.estadoSeleccionado = estado;
    this.filtrarProyectos();
  }

  seleccionarEtiqueta(etiqueta: number) {
    this.etiquetaSeleccionada = etiqueta;
    this.filtrarProyectos();
  }

  reiniciarBusqueda() {
    this.etiquetaSeleccionada = undefined;
    this.estadoSeleccionado = undefined;
    this.jerarquiaSeleccionada = undefined;
    this.especialidadSeleccionada = undefined;
    this.ejeSeleccionado = undefined;
    this.corteSeleccionada = undefined;
    this.proyectosFiltrados = this.proyectos;
  }

  
}