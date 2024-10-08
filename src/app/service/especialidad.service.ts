import { Injectable } from '@angular/core';
import { Especialidad } from '../models/especialidad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/sis/Especialidades'
  constructor(private http:HttpClient) { }

  getAllEspecialidades():Observable<Especialidad[]>{
    return this.http.get<any[]>(this.urlEndPoint)
  }

}
