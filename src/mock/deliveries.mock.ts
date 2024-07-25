export interface Delivery {
  name: string;
  position: number;
  total: number;
  alldone: number;
  failed: number;
  neighborhood?: Array<Neighborhood>
}

export interface Neighborhood {
  id: number;
  name: string;
  total: number;
  alldone: number;
  failed: number;
}

export const delivaries: Array<Delivery> = [
  {
    position: 1,
    name: 'João',
    total: 10,
    alldone: 3,
    failed: 1,
    neighborhood: [
      {
        id: 1,
        name: 'Setor Oeste',
        total: 5,
        alldone: 2,
        failed: 0,
      },
      {
        id: 2,
        name: 'Setor Central',
        total: 5,
        alldone: 0,
        failed: 1,
      }
    ]
  },
  {
    position: 2,
    name: 'Carlos',
    total: 5,
    alldone: 1,
    failed: 2,
    neighborhood: [
      {
        id: 1,
        name: 'Setor Oeste',
        total: 3,
        alldone: 1,
        failed: 0,
      },
      {
        id: 2,
        name: 'Setor Central',
        total: 2,
        alldone: 0,
        failed: 2,
      }
    ]
  },
  {
    position: 3,
    name: 'Katarina',
    total: 6,
    alldone: 5,
    failed: 1,
    neighborhood: [
      {
        id: 1,
        name: 'Setor Oeste',
        total: 3,
        alldone: 4,
        failed: 0,
      },
      {
        id: 2,
        name: 'Setor Central',
        total: 3,
        alldone: 1,
        failed: 0,
      }
    ]
  }
];
