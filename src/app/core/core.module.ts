import { NgModule } from '@angular/core';

import { NotificationModule } from '@features/notification';
import { HttpDataModule } from '@features/http-data/http-data.module';

@NgModule({
  imports: [NotificationModule, HttpDataModule],
})
export class CoreModule {}
