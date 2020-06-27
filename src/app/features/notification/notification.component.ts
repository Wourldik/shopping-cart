// tslint:disable use-component-view-encapsulation no-host-metadata-property
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

import { INotification } from './interfaces';

@Component({
  selector: 'sc-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mat-simple-snackbar flex-row',
  },
})
export class NotificationComponent {
  readonly data: INotification;

  constructor(
    private snackBarRef: MatSnackBarRef<NotificationComponent>,
    @Inject(MAT_SNACK_BAR_DATA) data: INotification
  ) {
    this.data = data;
  }

  onClose(): void {
    this.snackBarRef.dismiss();
  }
}
