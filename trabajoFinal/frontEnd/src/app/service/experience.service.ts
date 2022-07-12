import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Experience } from "../model/experiencie";


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiServerUrl}/experiencia/all`);
  }
  public addExperience (experience: Experience):Observable<Experience>{
    return this.http.post<Experience>(`${this.apiServerUrl}/experiencia/add`, experience);
  }
  //faltan cosas para completar. Video 2da parte, minuto 45.

}
