import { NgModule } from '@angular/core';

import { CartItemComponent } from './cart-item.component';
import { SharedModule } from '../../../../../../../../shared/shared.module';

@NgModule({
  declarations: [CartItemComponent],
  imports: [SharedModule],
  exports: [CartItemComponent],
})
export class CartItemModule {}
