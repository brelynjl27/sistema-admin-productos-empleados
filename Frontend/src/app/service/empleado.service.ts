import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';



@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private api: string = 'http://localhost:8080/api/empleado';

  constructor(private http:HttpClient, private router: Router) {}

   getEmpleadoList():Observable<Empleado []> {
    return this.http.get<Empleado[]>(this.api);
  }

    createEmpleado(empleado: Empleado): Observable<Empleado> {

    alert(empleado);
    return this.http.post<Empleado>(
      "http://localhost:8080/api/empleado", empleado);
  }
  
    getEmpleadoById(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(
      "http://localhost:8080/api/empleado/"+id
    );
  }

    updateEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(
      "http://localhost:8080/api/empleado/"+empleado.id,empleado
    );
  }

   deleteEmpleadoBtId(id : number): Observable<any>{
    return this.http.delete(this.api + '/' +id);
  }
}
