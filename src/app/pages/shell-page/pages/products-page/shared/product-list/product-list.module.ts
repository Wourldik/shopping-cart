import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../../../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { shared } from './shared';

@NgModule({
  declarations: [ProductListComponent],
  imports: [SharedModule, shared],
  exports: [ProductListComponent],
})
export class ProductListModule {}
