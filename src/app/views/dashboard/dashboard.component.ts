import { Component } from '@angular/core';
import { tableA, tableB, tableC } from 'mock/deliveries.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  configTableA: string[] = ['name', 'total', 'done'];
  configTableB: string[] = ['name', 'fail'];
  configTableC: string[] = ['name', 'total', 'done'];

  tableA!: any;
  tableB!: any;
  tableC!: any;

  neighborhoodDeliveryLis: any = [];

  constructor() {
    this.getTableA();
    this.getTableB();
    this.getTableC();
  }

  getTableA(): void {
    this.tableA = tableA
  }

  getTableB(): void {
    this.tableB = tableB
  }

  getTableC(): void {
    this.tableC = tableC
  }

}
