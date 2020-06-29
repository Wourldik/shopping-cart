import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Review } from '@features/http-data/entities/products/models';

@Component({
  selector: 'sc-product-review-item',
  templateUrl: './product-review-item.component.html',
  styleUrls: ['./product-review-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductReviewItemComponent {
  @Input()
  review: Review;
}
