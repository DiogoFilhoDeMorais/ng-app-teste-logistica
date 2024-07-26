import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DeliveriesService } from '../../../services/deliveries.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.scss'],
})
export class DeliveriesListComponent implements OnInit, AfterViewInit {
  configTableD!: string[];
  tableD!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private deliveriesService: DeliveriesService,
    public device: DeviceDetectorService
  ) {}

  ngOnInit() {
    if (this.device.isMobile()) {
      this.configTableD = ['id', 'name', 'status'];
    } else {
      this.configTableD = ['id', 'name', 'address', 'date', 'time', 'status'];
    }

    this.getTableD();
  }

  ngAfterViewInit(): void {
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
