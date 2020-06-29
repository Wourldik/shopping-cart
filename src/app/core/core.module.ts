import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HttpDataModule } from '@features/http-data/http-data.module';
import { NotificationModule } from '@features/notification';

@NgModule({
  imports: [
    NotificationModule,
    HttpDataModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
})
export class CoreModule {}
