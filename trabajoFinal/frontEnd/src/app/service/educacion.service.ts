import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080/educacion/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<educacion[]> {
    return this.http.get<educacion[]>(`$this.URL}/educacion/all`);
  }
  public addEducacion(educacion: educacion): Observable<educacion> {
    return this.http.post<educacion>(`${this.URL}/educacion/add`, educacion);
  }
  public updateEducacion(educacion: educacion): Observable<educacion> {
    return this.http.put<educacion>(`${this.URL}/educacion/add`, educacion);
  }
  public deleteEducacion(id: number):Observable<void>{
    return this.http.delete<void>(`${this.URL}/educacion/delete/${id}`);
  }
}
