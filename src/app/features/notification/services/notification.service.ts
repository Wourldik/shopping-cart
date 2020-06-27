import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NotificationComponent } from '../notification.component';
import { NotificationModule } from '../notification.module';

@Injectable({
  providedIn: NotificationModule,
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showError(message: string): void {
    this.snackBar.openFromComponent<NotificationComponent>(
      NotificationComponent,
      {
        data: {
          message,
          isSuccess: false,
        },
        panelClass: 'snack-bar-error',
        duration: 5000,
      }
    );
  }

  showSuccess(message: string): void {
    this.snackBar.openFromComponent<NotificationComponent>(
      NotificationComponent,
      {
        data: {
          message,
          isSuccess: true,
        },
        panelClass: 'snack-bar-success',
        duration: 5000,
      }
    );
  }
}
