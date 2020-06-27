import { NgModule } from '@angular/core';

import {
  routedComponents,
  ShellPageRoutingModule,
} from './shell-page-routing.module';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '@layout/modules';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, LayoutModule, ShellPageRoutingModule],
})
export class ShellPageModule {}
