import { NgModule } from '@angular/core';

import {
  CartPageRoutingModule,
  routedComponents,
} from './cart-page-routing.module';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '../../../../layout/layout.module';
import { shared } from './shared';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, LayoutModule, CartPageRoutingModule, shared],
})
export class CartPageModule {}
