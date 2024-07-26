import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { increment } from '../ngrx/tabled.actions';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  constructor(
    private http: HttpClient,
    private store: Store<Array<any>>
  ) { }

  getTableD(): void {
    this.http.get<any>('http://localhost:3000/tabled').subscribe({
      next: (res: any) => {
        this.store.dispatch(increment({payload: res}));
      }
    });
  }

}
