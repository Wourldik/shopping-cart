import { MatSnackBarConfig } from '@angular/material/snack-bar';

export function snackBarDefaultOptionsFactory(): MatSnackBarConfig {
  return { verticalPosition: 'top' };
}
