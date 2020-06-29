import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { isArray, isNull, isPlainObject } from 'lodash-es';
import { Observable, of } from 'rxjs';

import { NotificationService } from '../../../notification';
import { HttpDataModule } from '../../http-data.module';
import { stringify } from '@core/helpers';

@Injectable({
  providedIn: HttpDataModule,
})
export class HttpUtilityService {
  constructor(
    private errorHandler: ErrorHandler,
    private notificationService: NotificationService
  ) {}

  handleError(err: unknown): Observable<null> {
    if (err instanceof HttpErrorResponse) {
      return of(null);
    }

    this.notificationService.showError('Unexpected response from the server');

    this.errorHandler.handleError(err);

    return of(null);
  }

  isResponseArray<T>(res: T, errorText: string): T {
    if (!isArray(res)) {
      this.errorHandler.handleError(
        `Response type: "${typeof res}"\nResponse: "${stringify(res)}"`
      );
      throw new Error(errorText);
    }

    return res;
  }

  isResponseNull<T>(res: T, errorText: string): T {
    if (!isNull(res)) {
      this.errorHandler.handleError(
        `Response type: "${typeof res}"\nResponse: "${stringify(res)}"`
      );
      throw new Error(errorText);
    }

    return res;
  }

  isResponseObject<T>(res: T, errorText: string): T {
    if (!isPlainObject(res)) {
      this.errorHandler.handleError(
        `Response type: "${typeof res}"\nResponse: "${stringify(res)}"`
      );
      throw new Error(errorText);
    }

    return res;
  }

  isResponseObjectOrNull<T>(res: T, errorText: string): T {
    if (!isPlainObject(res) && !isNull(res)) {
      this.errorHandler.handleError(
        `Response type: "${typeof res}"\nResponse: "${stringify(res)}"`
      );
      throw new Error(errorText);
    }

    return res;
  }
}
