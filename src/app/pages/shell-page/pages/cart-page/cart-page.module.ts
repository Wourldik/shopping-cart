import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import {
  CartPageRoutingModule,
  routedComponents,
} from './cart-page-routing.module';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '../../../../layout/layout.module';
import { shared } from './shared';
import { reducers } from '../../../../features/store/cart/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../../../../features/store/cart/effects';

@NgModule({
  declarations: [routedComponents],
  imports: [
    SharedModule,
    LayoutModule,
    CartPageRoutingModule,
    shared,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class CartPageModule {}
