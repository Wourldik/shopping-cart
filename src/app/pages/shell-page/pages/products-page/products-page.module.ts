import { NgModule } from '@angular/core';

import {
  ProductsPageRoutingModule,
  routedComponents,
} from './products-page-routing.module';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '../../../../layout/layout.module';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, LayoutModule, ProductsPageRoutingModule],
})
export class ProductsPageModule {}
