import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from 'src/app/model/vacancy/vacancy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  vacancyURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Vacancy[]> {
    return this.httpClient.get<Vacancy[]>(this.vacancyURL + 'lista');
  }

  public detail(id: number): Observable<Vacancy> {
    return this.httpClient.get<Vacancy>(this.vacancyURL + `detail/${id}`);
  }

  public detailName(jobName: string): Observable<Vacancy> {
    return this.httpClient.get<Vacancy>(this.vacancyURL + `detailname/${jobName}`);
  }

  public save(vacancy: Vacancy): Observable<any> {
    return this.httpClient.post<any>(this.vacancyURL + 'create', vacancy);
  }

  public update(id: number, vacancy: Vacancy): Observable<any> {
    return this.httpClient.put<any>(this.vacancyURL + `update/${id}`, vacancy);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.vacancyURL + `delete/${id}`);
  }

}
