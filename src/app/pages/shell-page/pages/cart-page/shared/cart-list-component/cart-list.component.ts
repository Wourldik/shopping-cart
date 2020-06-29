import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  Product,
  Products,
} from '../../../../../../features/http-data/entities/products/models';

@Component({
  selector: 'sc-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {
  get totalPrice(): number {
    return this.products.reduce((accum, current) => current.price + accum, 0);
  }

  @Input()
  products: Products;

  @Output()
  readonly removed = new EventEmitter<Product>();

  onRemove(product: Product): void {
    this.removed.emit(product);
  }

  trackByFn(index: number, item: Product): number {
    return item.id;
  }
}
