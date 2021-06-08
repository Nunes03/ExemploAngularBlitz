import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list', //Tag para ser chamada no index
  templateUrl: './product-list.component.html', // O template que esse componente chama ao ser carregado, é um arquivo html com nossas tags(button, p, select, etc).
  styleUrls: ['./product-list.component.css'] //Uma estilização para nosso template aplicada quando nosso componente carregar
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Produto compartilhado com sucesso!');
  }

  onNotify() {
    window.alert('Você será notificado!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
