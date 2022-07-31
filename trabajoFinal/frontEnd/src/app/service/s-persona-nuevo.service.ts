import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaNuevo } from '../model/persona-nuevo';

@Injectable({
  providedIn: 'root'
})
export class SPersonaNuevoService {
  expURL = 'https://portfoliopmr.herokuapp.com/personaNuevo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<PersonaNuevo[]> {
    return this.httpClient.get<PersonaNuevo[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<PersonaNuevo> {
    return this.httpClient.get<PersonaNuevo>(this.expURL + `detail/${id}`);
  }

  public save(persona: PersonaNuevo): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', persona);
  }

  public update(id: number, persona: PersonaNuevo): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}

