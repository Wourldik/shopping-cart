import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { snackBarDefaultOptionsFactory } from './snack-bar';

export const materialConfig = [
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: snackBarDefaultOptionsFactory(),
  },
];
