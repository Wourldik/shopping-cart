import { NgModule } from '@angular/core';

import {
  NotFoundPageRoutingModule,
  routedComponents,
} from './not-found-page-routing.module';
import { SharedModule } from '@shared/modules';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, NotFoundPageRoutingModule],
})
export class NotFoundPageModule {}
