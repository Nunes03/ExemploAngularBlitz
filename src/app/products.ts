export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy Fold',
    price: 799,
    description: 'Celular com tela consideravelmente grande.'
  },
  {
    id: 2,
    name: 'Google Pixel 3',
    price: 699,
    description: 'Pequeno mas com uma ótima camêra.'
  },
  {
    id: 3,
    name: 'Samsung A31',
    price: 299,
    description: 'Celular perfeito para o dia-a-dia.'
  },
  {
    id: 4,
    name: 'AirDots S',
    price: 150,
    description: 'Fone de ouvido Xiaomi, conexão bluetooth.'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
