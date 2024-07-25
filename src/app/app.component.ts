import { Component } from '@angular/core';
import { delivaries, Delivery, Neighborhood } from 'src/mock/deliveries.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  table01: string[] = ['position', 'name', 'total', 'alldone'];
  table02: string[] = ['position', 'name', 'failed'];
  table03: string[] = ['position', 'name', 'failed'];

  deliveryList!: Array<Delivery>;

  neighborhoodDeliveryLis: Array<Neighborhood> = [];

  constructor() {
    this.getDeliveryList();
    this.getNeighborhoodDeliveryList(this.deliveryList);
  }

  getDeliveryList(): void {
    this.deliveryList = delivaries
  }

  getNeighborhoodDeliveryList(d: Array<Delivery>): void {
      // Criar um objeto para armazenar os resultados, agrupando por ID
      let resultado = {};

      // Iterar sobre cada objeto em d (varB)
      d.forEach((n: any) => {
        const { id, ...rest } = (n: any);

        // Se o ID já existe no resultado, soma os valores
        if (resultado[id]) {
          Object.keys(rest).forEach(key => {
            resultado[id][key] += rest[key];
          });
        } else {
          // Se o ID não existe, cria um novo objeto
          resultado[id] = { ...rest, id };
        }
      });

    console.log(resultado);


  }

}
