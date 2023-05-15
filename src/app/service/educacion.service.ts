import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  details(id: any) {
    throw new Error('Method not implemented.');
  }
  URL =  'https://backendap-g3hk.onrender.com/';

  //URL = environment.URL + 'educacion/';

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.HttpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.HttpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.HttpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.URL + `delete/${id}`);
  }
  
}
