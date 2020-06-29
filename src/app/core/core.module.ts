import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NotificationModule } from '@features/notification';
import { HttpDataModule } from '@features/http-data/http-data.module';

@NgModule({
  imports: [
    NotificationModule,
    HttpDataModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
})
export class CoreModule {}
