import { NgModule } from '@angular/core';

import {
  ProductsPageRoutingModule,
  routedComponents,
} from './products-page-routing.module';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '../../../../layout/layout.module';
import { shared } from './shared';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, LayoutModule, shared, ProductsPageRoutingModule],
})
export class ProductsPageModule {}
