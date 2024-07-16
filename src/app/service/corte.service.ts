import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corte } from '../models/corte';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorteService {
  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/sis/Cortes'
  constructor(private http:HttpClient) { }

  getAllCortes():Observable<Corte[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }

/*  getProyectoById(proyectopk:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.urlEndPoint+'/'+proyectopk);
  }

  createProyecto(proyecto:Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(this.urlEndPoint,proyecto);
  }
  
  updateProyecto(proyecto:Proyecto): Observable<Proyecto>{
    return this.http.put<Proyecto>(this.urlEndPoint+'/'+proyecto.proyectopk,proyecto);
  }

  deleteProyecto(proyectopk:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+proyectopk);
  }
*/
}
