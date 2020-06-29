import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  routedComponents,
  ShellPageRoutingModule,
} from './shell-page-routing.module';
import { SharedModule } from '@shared/modules';
import { reducers } from '@features/store/cart/reducers';
import { effects } from '@features/store/cart/effects';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  declarations: [routedComponents],
  imports: [
    SharedModule,
    LayoutModule,
    ShellPageRoutingModule,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class ShellPageModule {}
