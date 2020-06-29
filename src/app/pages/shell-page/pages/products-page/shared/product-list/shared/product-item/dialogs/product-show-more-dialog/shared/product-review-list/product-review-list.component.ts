import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import {
  Review,
  Reviews,
} from '../../../../../../../../../../../../features/http-data/entities/products/models';

@Component({
  selector: 'sc-product-review-list',
  templateUrl: './product-review-list.component.html',
  styleUrls: ['./product-review-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductReviewListComponent {
  @Input()
  reviews: Reviews;

  trackByFn(index: number, item: Review): number {
    return item.id;
  }
}
