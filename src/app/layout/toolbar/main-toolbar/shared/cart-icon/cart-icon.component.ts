import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '@features/http-data/entities/products/models';

@Component({
  selector: 'sc-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartIconComponent {
  @Input()
  products: Product[] | null;
}
