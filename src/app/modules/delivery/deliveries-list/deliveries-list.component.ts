import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tableD } from 'src/mock/deliveries.mock';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.scss']
})
export class DeliveriesListComponent implements AfterViewInit {
  configTableD: string[] = ['id', 'name', 'address', 'date', 'time', 'status'];
  tableD!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.getTableD();
  }

  ngAfterViewInit() {
    this.tableD.paginator = this.paginator;
  }

  getTableD(): void {
    this.tableD = new MatTableDataSource<any>(tableD);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
