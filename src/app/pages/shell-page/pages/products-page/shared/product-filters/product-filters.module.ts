import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../../../shared/shared.module';
import { ProductFiltersComponent } from './product-filters.component';

@NgModule({
  declarations: [ProductFiltersComponent],
  imports: [SharedModule],
  exports: [ProductFiltersComponent],
})
export class ProductFiltersModule {}
