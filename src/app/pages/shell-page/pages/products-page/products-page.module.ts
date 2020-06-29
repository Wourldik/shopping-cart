import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  ProductsPageRoutingModule,
  routedComponents,
} from './products-page-routing.module';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '../../../../layout/layout.module';
import { shared } from './shared';
import { reducers } from '../../../../features/store/cart/reducers';
import { effects } from '../../../../features/store/cart/effects';

@NgModule({
  declarations: [routedComponents],
  imports: [
    SharedModule,
    LayoutModule,
    shared,
    ProductsPageRoutingModule,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class ProductsPageModule {}
