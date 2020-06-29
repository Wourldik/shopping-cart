import { NgModule } from '@angular/core';

import { CartIconComponent } from './cart-icon.component';
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  declarations: [CartIconComponent],
  imports: [SharedModule],
  exports: [CartIconComponent],
})
export class CartIconModule {}
