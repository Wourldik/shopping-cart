import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/modules';
import { MainToolbarComponent } from './main-toolbar.component';
import { shared } from './shared';

@NgModule({
  declarations: [MainToolbarComponent],
  imports: [SharedModule, shared],
  exports: [MainToolbarComponent],
})
export class MainToolbarModule {}
