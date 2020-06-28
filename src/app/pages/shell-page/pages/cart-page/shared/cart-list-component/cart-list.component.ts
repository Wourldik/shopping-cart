import { Component, Input } from '@angular/core';
import {
  Product,
  Products,
} from '../../../../../../features/http-data/entities/products/models';

@Component({
  selector: 'sc-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  @Input()
  products: Products;

  get totalPrice(): number {
    return this.products.reduce((accum, current) => current.price + accum, 0);
  }

  trackByFn(index: number, item: Product): number {
    return item.id;
  }
}
