/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Dashboard', () => {
  let service: DashboardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService]
    });

    service = TestBed.inject(DashboardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tableA data', () => {
    const mockData = {
      // Mock data structure for tableA
    };

    service.getTableA().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:3000/tablea');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get tableB data', () => {
    const mockData = {
      // Mock data structure for tableB
    };

    service.getTableB().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:3000/tableb');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get tableC data', () => {
    const mockData = {
      // Mock data structure for tableC
    };

    service.getTableC().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:3000/tablec');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
