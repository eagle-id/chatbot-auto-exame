import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor(
    private http: HttpClient
  ) { }

  public getSymptoms(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.api}/sintomas`);
  }

  public getRiscGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.api}/risco/grupos`);
  }
  public getRiscContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.api}/risco/atividades`);
  }

}
