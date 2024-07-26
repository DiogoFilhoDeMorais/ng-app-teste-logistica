/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { DeliveriesService } from './deliveries.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreModule, Store } from '@ngrx/store';
import { increment } from '../ngrx/tabled.actions';
import { tableDReducer } from '../ngrx/tabled.reducers';

describe('Service: Deliveries', () => {
  let service: DeliveriesService;
  let httpMock: HttpTestingController;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({ tabled: tableDReducer }),
      ],
      providers: [DeliveriesService],
    });

    service = TestBed.inject(DeliveriesService);
    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(Store);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should dispatch increment action with tableD data', () => {
    const mockData = [
      {
        id: 1,
        name: 'João',
        address: 'Rua 03, Setor Central',
        date: '01/02/2024',
        time: '13:45',
        status: 'Concluída'
      },
      {
        id: 2,
        name: 'Carlos',
        address: 'Rua 02, Setor Oeste',
        date: '02/02/2024',
        time: '12:45',
        status: 'Falhou'
      }
    ];

    spyOn(store, 'dispatch');

    service.getTableD();

    const req = httpMock.expectOne('http://localhost:3000/tabled');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

    expect(store.dispatch).toHaveBeenCalledWith(increment({ payload: mockData }));
  });
});
