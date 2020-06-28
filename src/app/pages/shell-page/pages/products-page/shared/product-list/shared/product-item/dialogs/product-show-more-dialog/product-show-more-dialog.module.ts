import { NgModule } from '@angular/core';

import { directives } from './directives';
import { SharedModule } from '../../../../../../../../../../shared/shared.module';
import { ProductShowMoreDialogComponent } from './product-show-more-dialog.component';
import { shared } from './shared';

@NgModule({
  declarations: [ProductShowMoreDialogComponent, directives],
  imports: [SharedModule, shared],
  exports: [directives],
  entryComponents: [ProductShowMoreDialogComponent],
})
export class ProductShowMoreDialogModule {}
