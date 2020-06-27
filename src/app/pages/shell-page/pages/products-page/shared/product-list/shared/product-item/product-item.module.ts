import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../../../../../shared/shared.module';
import { ProductItemComponent } from './product-item.component';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [SharedModule],
  exports: [ProductItemComponent],
})
export class ProductItemModule {}
