import { Pessoa } from './Pessoa';
import { Produto } from './Produto';

export class Vendas {
  customer: Pessoa;
  products: [{
    product: Produto,
    quantity: number
  }];
}
