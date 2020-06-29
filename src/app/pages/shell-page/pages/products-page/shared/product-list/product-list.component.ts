import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  Product,
  Products,
} from '../../../../../../features/http-data/entities/products/models';

@Component({
  selector: 'sc-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @Input()
  products: Products;

  trackByFn(index: number, item: Product): number {
    return item.id;
  }
}
