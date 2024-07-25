import { Component } from '@angular/core';
import { tableA, tableB, tableC } from 'src/mock/deliveries.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  consigTableA: string[] = ['name', 'total', 'done'];
  consigTableB: string[] = ['name', 'failed'];
  consigTableC: string[] = ['name', 'failed'];

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
