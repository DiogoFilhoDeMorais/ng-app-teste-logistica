import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [MatCardModule, MatTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize tableA with correct data', () => {
    expect(component.tableA).toEqual([
      { name: 'João', total: 10, done: 3 },
      { name: 'Carlos', total: 5, done: 1 },
      { name: 'Katarina', total: 6, done: 5 },
    ]);
  });

  it('should initialize tableB with correct data', () => {
    expect(component.tableB).toEqual([
      { name: 'João', fail: 3 },
      { name: 'Carlos', fail: 1 },
      { name: 'Katarina', fail: 5 },
    ]);
  });

  it('should initialize tableC with correct data', () => {
    expect(component.tableC).toEqual([
      { name: 'Setor Oeste', total: 10, done: 5 },
      { name: 'Setor Central', total: 11, done: 6 },
      { name: 'Setor Sul', total: 3, done: 2 },
    ]);
  });

  it('should call getTableA on constructor', () => {
    component.getTableA();
  });

  it('should call getTableB on constructor', () => {
    component.getTableB();
  });

  it('should call getTableC on constructor', () => {
    component.getTableC();
  });
});
