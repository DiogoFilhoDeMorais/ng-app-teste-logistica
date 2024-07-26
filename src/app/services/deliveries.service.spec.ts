/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { DeliveriesService } from './deliveries.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatTableDataSource } from '@angular/material/table';

describe('Service: Deliveries', () => {
  let service: DeliveriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeliveriesService]
    });

    service = TestBed.inject(DeliveriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tableD data', () => {
    service.getTableD().subscribe(data => {
      expect(data).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:3000/tabled');
    expect(req.request.method).toBe('GET');
  });
});
