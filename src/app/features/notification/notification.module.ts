import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { materialConfig } from './material-configs';
import { NotificationComponent } from './notification.component';
import { SharedModule } from '@shared/modules';

@NgModule({
  declarations: [NotificationComponent],
  imports: [MatSnackBarModule, SharedModule],
  exports: [NotificationComponent],
  entryComponents: [NotificationComponent],
  providers: [materialConfig],
})
export class NotificationModule {}
