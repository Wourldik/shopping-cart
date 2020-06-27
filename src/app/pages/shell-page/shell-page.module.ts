import { NgModule } from '@angular/core';

import {
  routedComponents,
  ShellPageRoutingModule,
} from './shell-page-routing.module';
import { SharedModule } from '@shared/modules';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, ShellPageRoutingModule],
})
export class ShellPageModule {}
