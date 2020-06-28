import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../../../../../../../../../shared/shared.module';
import { shared } from './shared';
import { ProductReviewListComponent } from './product-review-list.component';

@NgModule({
  declarations: [ProductReviewListComponent],
  imports: [SharedModule, shared],
  exports: [ProductReviewListComponent],
})
export class ProductReviewListModule {}
