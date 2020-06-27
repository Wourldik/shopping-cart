import { NgModule } from '@angular/core';

import {
  CartPageRoutingModule,
  routedComponents,
} from './cart-page-routing.module';
import { SharedModule } from '@shared/modules';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, CartPageRoutingModule],
})
export class CartPageModule {}
