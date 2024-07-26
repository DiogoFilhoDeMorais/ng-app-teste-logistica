import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

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

  constructor(
    private dashboardService: DashboardService
  ) {
    this.getTableA();
    this.getTableB();
    this.getTableC();
  }

  getTableA(): void {
    this.tableA = this.dashboardService.getTableA();
  }

  getTableB(): void {
    this.tableB = this.dashboardService.getTableB();
  }

  getTableC(): void {
    this.tableC = this.dashboardService.getTableC();
  }

}
