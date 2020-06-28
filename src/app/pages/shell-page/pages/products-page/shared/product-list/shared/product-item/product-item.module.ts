import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../../../../../shared/shared.module';
import { ProductItemComponent } from './product-item.component';
import { dialogs } from './dialogs';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [SharedModule, dialogs],
  exports: [ProductItemComponent],
})
export class ProductItemModule {}
