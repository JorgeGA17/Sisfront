import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../models/proyecto';
import { Especialidad } from '../../../models/especialidad';
import { Jerarquia } from '../../../models/Jerarquia';
import { ProyectoService } from '../../../service/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadService } from '../../../service/especialidad.service';
import { JerarquiaService } from '../../../service/jerarquia.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EjeService } from '../../../service/eje.service';
import { CorteService } from '../../../service/corte.service';
import { EtiquetaService } from '../../../service/etiqueta.service';
import { PersonalService } from '../../../service/personal.service';
import { EstadoService } from '../../../service/estado.service';

@Component({
  selector: 'app-editar-proyecto',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './editar-proyecto.component.html',
  styleUrl: './editar-proyecto.component.css'
})
export class EditarProyectoComponent implements OnInit {
  creacion!: FormGroup;
  id!: number;

  // catálogos
  especialidades: any[] = [];
  jerarquias: any[] = [];
  ejes: any[] = [];
  etiquetas: any[] = [];
  personal: any[] = [];
  cortes: any[] = [];
  estados: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private proyectoService: ProyectoService,
    private especialidadService: EspecialidadService,
    private jerarquiaService: JerarquiaService,
    private ejeService: EjeService,
    private etiquetaService: EtiquetaService,
    private personalService: PersonalService,
    private corteService: CorteService,
    private estadoService: EstadoService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('proyectopk')!;

    this.creacion = this.fb.group({
      proyectoPk: [this.id],
      xnombreProyecto: ['', Validators.required],
      xproblematica: [''],
      xresumen: [''],
      xobjetivoGeneral: [''],
      xinnovacion: [null],
      ximpacto: [null],
      xsostenibilidad: [null],
      xreplicabilidad: [null],
      xconceptoEval: [''],
      xdescripEval: [''],
      corteId: [null, Validators.required],
      estadoId: [null, Validators.required],
      especialidadIds: [[]],
      jerarquiaIds: [[]],
      ejeIds: [[]],
      etiquetaIds: [[]],
      personalIds: [[]]
    });

    // cargar catálogos
    this.especialidadService.getAllEspecialidades().subscribe(d => this.especialidades = d);
    this.jerarquiaService.getAllJerarquias().subscribe(d => this.jerarquias = d);
    this.ejeService.getAllEjes().subscribe(d => this.ejes = d);
    this.etiquetaService.getAllEtiquetas().subscribe(d => this.etiquetas = d);
    this.personalService.getAllPersonas().subscribe(d => this.personal = d);
    this.corteService.getAllCortes().subscribe(d => this.cortes = d);
    this.estadoService.getAllEstados().subscribe(d => this.estados = d);

    // cargar proyecto
    this.proyectoService.getProyectoById(this.id).subscribe(p => {
      this.creacion.patchValue({
        ...p,
        corteId: p.corteId,
        estadoId: p.estadoId,
        especialidadIds: p.especialidadIds || [],
        jerarquiaIds: p.jerarquiaIds || [],
        ejeIds: p.ejeIds || [],
        etiquetaIds: p.etiquetaIds || [],
        personalIds: p.personalIds || []
      });
    });
  }

  // ==== Métodos para selects múltiples ====
  onEspecialidadSelect(event: Event) {
    this.addSeleccionado(event, 'especialidadIds');
  }
  onJerarquiaSelect(event: Event) {
    this.addSeleccionado(event, 'jerarquiaIds');
  }
  onEjeSelect(event: Event) {
    this.addSeleccionado(event, 'ejeIds');
  }
  onEtiquetaSelect(event: Event) {
    this.addSeleccionado(event, 'etiquetaIds');
  }
  onPersonalSelect(event: Event) {
    this.addSeleccionado(event, 'personalIds');
  }

  private addSeleccionado(event: Event, controlName: string) {
    const target = event.target as HTMLSelectElement;
    const id = parseInt(target.value, 10);
    const control = this.creacion.get(controlName)!;
    const current = control.value as number[];
    if (id && !current.includes(id)) {
      control.setValue([...current, id]);
    }
    target.value = '';
  }

  removeSeleccionado(controlName: string, id: number) {
    const control = this.creacion.get(controlName)!;
    control.setValue((control.value as number[]).filter(x => x !== id));
  }

  // ==== Helpers para mostrar nombres ====
  getNombreEspecialidad(id: number) {
    return this.especialidades.find(e => e.especialidadPk === id)?.xnombre || 'N/A';
  }
  getNombreJerarquia(id: number) {
    return this.jerarquias.find(j => j.jerarquiaPk === id)?.xnombre || 'N/A';
  }
  getNombreEje(id: number) {
    return this.ejes.find(e => e.ejePk === id)?.xnombre || 'N/A';
  }
  getNombreEtiqueta(id: number) {
    return this.etiquetas.find(et => et.etiquetaPk === id)?.xnombre || 'N/A';
  }
  getNombrePersonal(id: number) {
    const p = this.personal.find(pe => pe.personalPk === id);
    return p ? `${p.xnombre} ${p.xapellido}` : 'N/A';
  }

  onSubmit() {
    if (this.creacion.valid) {
      this.proyectoService.updateProyecto(this.creacion.value).subscribe(() => {
        this.router.navigate(['/lista-proyectos']);
      });
    }
  }
}