import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/modules';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [SharedModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
