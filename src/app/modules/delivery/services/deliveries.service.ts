import { Injectable } from '@angular/core';
import { tableD } from 'src/mock/deliveries.mock';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

constructor() { }

getTableD(): any {
  return new MatTableDataSource<any>(tableD);
}

}
