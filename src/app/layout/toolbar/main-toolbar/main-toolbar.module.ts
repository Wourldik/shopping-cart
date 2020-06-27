import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/modules';
import { MainToolbarComponent } from './main-toolbar.component';

@NgModule({
  declarations: [MainToolbarComponent],
  imports: [SharedModule],
  exports: [MainToolbarComponent],
})
export class MainToolbarModule {}
