import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DeliveriesService } from '../services/deliveries.service';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.scss'],
})
export class DeliveriesListComponent implements OnInit {
  configTableD: string[] = ['id', 'name', 'address', 'date', 'time', 'status'];
  tableD!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private deliveriesService: DeliveriesService
  ) {}

  ngOnInit() {
    this.getTableD();
    this.tableD.paginator = this.paginator;
  }

  getTableD(): void {
    this.tableD = this.deliveriesService.getTableD();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableD.filter = filterValue.trim().toLowerCase();

    if (this.tableD?.paginator) {
      this.tableD?.paginator?.firstPage();
    }
  }
}
