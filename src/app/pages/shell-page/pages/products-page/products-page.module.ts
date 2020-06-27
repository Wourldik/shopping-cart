import { NgModule } from '@angular/core';

import {
  ProductsPageRoutingModule,
  routedComponents,
} from './products-page-routing.module';
import { SharedModule } from '@shared/modules';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, ProductsPageRoutingModule],
})
export class ProductsPageModule {}
