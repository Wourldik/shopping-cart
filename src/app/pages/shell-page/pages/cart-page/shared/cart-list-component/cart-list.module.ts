import { NgModule } from '@angular/core';

import { CartListComponent } from './cart-list.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { shared } from './shared';

@NgModule({
  declarations: [CartListComponent],
  imports: [SharedModule, shared],
  exports: [CartListComponent],
})
export class CartListModule {}
