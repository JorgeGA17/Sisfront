import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';
import { ProyectoService } from '../../service/proyecto.service';


@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css'],
 
})
export class ListaProyectosComponent implements OnInit{

  proyectos: Proyecto[] = [];
  page: number = 1;
  noOfRows: number=10;
  datas:any;
  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
      this.getProyectos();
  }


  private getProyectos(): void {
    this.proyectoService.getAllProyectos().subscribe(data => {
      this.proyectos = data;
    });
  }
  
  getStartIndex(currentPage: number, lastPage:number){
    let firstIndex=1;
    if((currentPage!== lastPage)||(currentPage>0 && lastPage>0)){
      firstIndex=(Number(this.noOfRows)*(Number(currentPage)-1)+1)
    }
    return firstIndex.toString()
    }

    getLastIndex(currentPage: number, lastPage:number){
      let lastIndex=this.datas ? this.datas.length: null;
      if((currentPage!== lastPage)){
        lastIndex=(Number(this.noOfRows)*(Number(currentPage)))
      }
      return lastIndex.toString()
      }

}
