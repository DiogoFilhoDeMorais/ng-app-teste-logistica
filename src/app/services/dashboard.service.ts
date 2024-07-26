import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

constructor(
  private http: HttpClient
) { }

getTableA(): Observable<any> {
  return this.http.get('http://localhost:3000/tablea');
}

getTableB(): Observable<any> {
  return this.http.get('http://localhost:3000/tableb');
}

getTableC(): Observable<any> {
  return this.http.get('http://localhost:3000/tablec');
}

}
