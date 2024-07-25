import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  total: number;
  done: number;
  failed: number;
  neighborhood: [
    {
      id: number;
      name: string;
      total: number;
      done: number;
      failed: number;
    }
  ]
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'João',
    total: 10,
    done: 3,
    failed: 1,
    neighborhood: [
      {
        id: 1,
        name: 'Setor Oeste',
        total: 8,
        done: 0,
        failed: 0,
      }
    ]
  },
  { position: 2, name: 'Carlos', total: 5, done: 1, failed: 2 },
  { position: 3, name: 'Katarina', total: 6, done: 5, failed: 1 },
  { position: 4, name: 'Pedro', total: 3, done: 3, failed: 0 },
  { position: 5, name: 'Gustavo', total: 11, done: 7, failed: 3 },
  { position: 6, name: 'Ramon', total: 14, done: 10, failed: 2 },
  { position: 7, name: 'Júlio', total: 7, done: 6, failed: 1 },
  { position: 8, name: 'Eduardo', total: 4, done: 4, failed: 0 },
  { position: 9, name: 'Marcelo', total: 6, done: 6, failed: 0 },
  { position: 10, name: 'Tiago', total: 9, done: 2, failed: 2 },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-app-teste-logistica';
  table01: string[] = ['position', 'name', 'total', 'done'];
  table02: string[] = ['position', 'name', 'failed'];
  table03: string[] = ['position', 'name', 'failed'];
  dataSource = ELEMENT_DATA;
}
