/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveriesListComponent } from './deliveries-list.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeliveriesService } from '../../../services/deliveries.service';
import { StoreModule, Store } from '@ngrx/store';
import { tableDReducer } from '../../../ngrx/tabled.reducers';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeliveriesListComponent', () => {
  let component: DeliveriesListComponent;
  let fixture: ComponentFixture<DeliveriesListComponent>;
  let deliveriesService: DeliveriesService;
  let store: Store<any>;

  const mockData = [
    {
      id: 1,
      motorista: 'João',
      cliente_origem: {
        nome: 'Cliente A',
        endereco: 'Rua 03, Setor Central',
        bairro: 'Centro',
        cidade: 'Brasília'
      },
      cliente_destino: {
        nome: 'Cliente B',
        endereco: 'Rua 02, Setor Oeste',
        bairro: 'Oeste',
        cidade: 'Brasília'
      },
      status_entrega: 'Concluída'
    },
    {
      id: 2,
      motorista: 'Carlos',
      cliente_origem: {
        nome: 'Cliente C',
        endereco: 'Rua 01, Setor Norte',
        bairro: 'Norte',
        cidade: 'Brasília'
      },
      cliente_destino: {
        nome: 'Cliente D',
        endereco: 'Rua 04, Setor Sul',
        bairro: 'Sul',
        cidade: 'Brasília'
      },
      status_entrega: 'Falhou'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveriesListComponent],
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        NoopAnimationsModule,
        StoreModule.forRoot({ tabled: tableDReducer }),
      ],
      providers: [
        DeliveriesService,
        {
          provide: DeviceDetectorService,
          useValue: {
            isMobile: () => false // Simulate desktop environment
          }
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesListComponent);
    component = fixture.componentInstance;
    deliveriesService = TestBed.inject(DeliveriesService);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize tableD with data from store', () => {
    store.dispatch({ type: 'tabled', deliveries: { payload: mockData } });
    fixture.detectChanges();
    expect(component.tableD.data).toBeTruthy();
  });

  it('should initialize configTableD with correct columns for desktop', () => {
    expect(component.configTableD).toEqual([
      'id', 'motorista', 'cliente_origem.nome', 'cliente_origem.endereco',
      'cliente_origem.bairro', 'cliente_origem.cidade', 'cliente_destino.nome',
      'cliente_destino.endereco', 'cliente_destino.bairro', 'cliente_destino.cidade',
      'status_entrega'
    ]);
  });

  it('should apply filter to tableD', () => {
    const filterValue = 'test';
    const filterEvent: any = { target: { value: filterValue } };
    component.applyFilter(filterEvent);
    expect(component.tableD.filter).toBe(filterValue.trim().toLowerCase());
  });
});
