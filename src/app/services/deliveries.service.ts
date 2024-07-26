import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

constructor(
  private http: HttpClient
) { }

getTableD(): Observable<any> {
  return this.http.get<MatTableDataSource<any>>('http://localhost:3000/tabled');
}

}
