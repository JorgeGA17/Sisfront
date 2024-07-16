import { Component, OnInit } from '@angular/core';
import { Corte } from '../../models/corte';
import { CorteService } from '../../service/corte.service';

@Component({
  selector: 'app-lista-cortes',
  templateUrl: './lista-cortes.component.html',
  styleUrls: ['./lista-cortes.component.css']
})
export class ListaCortesComponent implements OnInit{

  cortes: Corte[];

  constructor(private corteServicie:CorteService){}

  ngOnInit(): void {
    this.getCortes();

    }

    private getCortes(){
      this.corteServicie.getAllCortes().subscribe(dato =>{
        console.log(dato);
        this.cortes=dato;
      });
    }
/*
    updateProyecto(proyectopk:number){
      this.router.navigate(['actualizar-proyecto',proyectopk]);
    }

    deleteProyecto(proyectopk:number){
      this.proyectoServicie.deleteProyecto(proyectopk).subscribe(dato=>{
        console.log(dato);
        this.getProyectos()
      })

    }

*/

}
