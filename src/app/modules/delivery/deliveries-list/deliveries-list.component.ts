import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DeliveriesService } from '../../../services/deliveries.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.scss'],
})
export class DeliveriesListComponent implements OnInit, AfterViewInit {
  configTableD!: string[];
  tableD: any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private store: Store<any>,
    private deliveriesService: DeliveriesService,
    public device: DeviceDetectorService,
  ) {
    this.deliveriesService.getTableD();
  }

  ngOnInit() {
    this.configTableD = this.device.isMobile() ? ['motorista', 'cliente_origem.endereco', 'status_entrega'] : ['id', 'motorista', 'cliente_origem.nome', 'cliente_origem.endereco','cliente_origem.bairro', 'cliente_origem.cidade', 'cliente_destino.nome', 'cliente_destino.endereco', 'cliente_destino.bairro', 'cliente_destino.cidade', 'status_entrega']
    this.getTableD();
  }

  ngAfterViewInit(): void {
  }

  getTableD(): void {
    this.store.select('tabled').subscribe({
      next: (state: any) => {
        this.tableD = new MatTableDataSource<any>(state?.deliveries?.payload);
        this.tableD.paginator = this.paginator;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableD.filter = filterValue.trim().toLowerCase();

    if (this.tableD?.paginator) {
      this.tableD.paginator?.firstPage();
    }
  }
}
