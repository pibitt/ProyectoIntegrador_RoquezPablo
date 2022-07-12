import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Education } from "../model/education";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiServerUrl}/educacion/all`);
  }
  public addEducation(educacion: Education):Observable<Education>{
    return this.http.post<Education>(`${this.apiServerUrl}/educacion/add`, educacion);
  }
  //faltan cosas para completar. Video 2da parte, minuto 45.

}
