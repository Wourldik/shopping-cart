import { NgModule } from '@angular/core';

import {
  routedComponents,
  ShellPageRoutingModule,
} from './shell-page-routing.module';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '@layout/modules';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../features/store/cart/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../../features/store/cart/effects';

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
