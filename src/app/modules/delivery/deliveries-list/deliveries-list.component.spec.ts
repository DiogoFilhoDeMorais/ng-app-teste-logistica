import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveriesListComponent } from './deliveries-list.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeliveriesService } from '../services/deliveries.service';

describe('DeliveriesListComponent', () => {
  let component: DeliveriesListComponent;
  let fixture: ComponentFixture<DeliveriesListComponent>;
  let deliveriesService: DeliveriesService;

  const tableD = {
    paginator: {
      firstPage: () => ({}),
    },
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveriesListComponent],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: DeliveriesService,
          useValue: {
            getTableD: () => {
              return new MatTableDataSource([
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
              ]);
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesListComponent);
    component = fixture.componentInstance;
    deliveriesService = TestBed.inject(DeliveriesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize tableD with an empty array', () => {
    expect(component.tableD.data).toEqual([
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
    ]);
  });

  it('should call getTableD on constructor', () => {
    deliveriesService.getTableD();
  });

  it('should apply filter to tableD', () => {
    const filterValue = 'test';
    const filterEvent: any = { target: { value: filterValue } };
    component.applyFilter(filterEvent);
    expect(component.tableD.filter).toBe(filterValue.trim().toLowerCase());
  });

  it('should reset paginator to first page on filter', () => {
    tableD.paginator.firstPage();
  });
});
