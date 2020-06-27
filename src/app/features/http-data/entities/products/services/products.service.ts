import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpUtilityService } from '../../../utils/internal';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { IProductBackend } from '../interfaces';
import { environment } from '../../../../../../environments/environment';
import { ApiUrl } from '../../../enums';
import { catchError, map } from 'rxjs/operators';
import { HttpDataModule } from '../../../http-data.module';

@Injectable({
  providedIn: HttpDataModule,
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient,
    private httpUtilityService: HttpUtilityService
  ) {}

  getAll(): Observable<Product[] | null> {
    return this.httpClient
      .get<IProductBackend[]>(`${environment.apiPath}${ApiUrl.product}`)
      .pipe(
        map(res =>
          this.httpUtilityService.isResponseArray(
            res,
            `Error during get all products`
          )
        ),
        map(res => res.map(product => Product.fromBackendFactory(product))),
        catchError(err => this.httpUtilityService.handleError(err))
      );
  }
}
