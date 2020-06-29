import { NgModule } from '@angular/core';

import {
  ProductsPageRoutingModule,
  routedComponents,
} from './products-page-routing.module';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '../../../../layout/layout.module';
import { shared } from './shared';
import { FilterFormService } from './services';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, LayoutModule, shared, ProductsPageRoutingModule],
  providers: [FilterFormService],
})
export class ProductsPageModule {}
