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

const fotoUrls: { [key: string]: string } = {
 'CSJ AMAZONAS': 'assets/presidentes/csjamazonas.png',
'CSJ ANCASH': 'assets/presidentes/csjancash.jpg',
'CSJ APURIMAC': 'assets/presidentes/csjapurimac.jpg',
'CSJ AREQUIPA': 'assets/presidentes/csjarequipa.jpg',
'CSJ AYACUCHO': 'assets/presidentes/csjayacucho.jpg',
'CSJ CAJAMARCA': 'assets/presidentes/csjcajamarca.jpg',
'CSJ CALLAO': 'assets/presidentes/csjcallao.jpg',
'CSJ CAÑETE': 'assets/presidentes/csjcanete.jpg',
'CSJ CUSCO': 'assets/presidentes/csjcusco.jpg',
'CSJ EL SANTA': 'assets/presidentes/csjelsanta.jpg',
'CSJ HUANCAVELICA': 'assets/presidentes/csjhuancavelica.JPG',
'CSJ HUÁNUCO': 'assets/presidentes/csjhuanuco.jpg',
'CSJ HUAURA': 'assets/presidentes/csjhuaura.jpg',
'CSJ ICA': 'assets/presidentes/csjica.jpg',
'CSJ JUNÍN': 'assets/presidentes/csjjunin.jpg',
'CSJ LA LIBERTAD': 'assets/presidentes/csjlalibertad.jpg',
'CSJ LAMBAYEQUE': 'assets/presidentes/csjlambayeque.jpg',
'CSJ LIMA': 'assets/presidentes/csjlima.jpg',
'CSJ LIMA ESTE': 'assets/presidentes/csjlimaeste.jpg',
'CSJ LIMA NORTE': 'assets/presidentes/csjlimanorte.jpg',
'CSJ LIMA SUR': 'assets/presidentes/csjlimasur.jpg',
'CSJ LORETO': 'assets/presidentes/csjloreto.jpg',
'CSJ MADRE DE DIOS': 'assets/presidentes/csjmadrededios.jpg',
'CSJ MOQUEGUA': 'assets/presidentes/csjmoquegua.jpg',
'CSJ PASCO': 'assets/presidentes/csjpasco.jpg',
'CSJ PIURA': 'assets/presidentes/csjpiura.jpg',
'CSJ PUENTE PIEDRA VENTANILLA': 'assets/presidentes/csjpuentepiedraventanilla.jpg',
'CSJ PUNO': 'assets/presidentes/csjpuno.jpg',
'CSJ SAN MARTÍN': 'assets/presidentes/csjsanmartin.jpg',
'CSJ SELVA CENTRAL': 'assets/presidentes/csjselvacentral.jpg',
'CSJ SULLANA': 'assets/presidentes/csjsullana.jpg',
'CSJ TACNA': 'assets/presidentes/csjtacna.jpg',
'CSJ TUMBES': 'assets/presidentes/csjtumbes.jpg',
'CSJ UCAYALI': 'assets/presidentes/csjucayali.jpg',
'CSNJ PENAL ESPECIALIZADA': 'assets/presidentes/csnjpenalespecializada.jpg'
};

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
        this.presidentes = presidentes.filter(p => p.cortefk.xnombreCorto === this.filtro).map(p => ({
          ...p,
          fotoUrl: fotoUrls[p.cortefk.xnombreCorto] || '' // si no existe, establece una cadena vacía
        }));
      });
    }

}



