import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/sis/Proyectos'
  //private proyectos: Proyecto[];


  constructor(private http:HttpClient) { }

  getAllProyectos():Observable<Proyecto[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }

  getProyectoById(proyectopk:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.urlEndPoint+'/'+proyectopk);
  }

}
