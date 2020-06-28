import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpUtilityService } from '../../../utils/internal';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { IProductBackend, IProductQueryParams } from '../interfaces';
import { environment } from '../../../../../../environments/environment';
import { ApiUrl } from '../../../enums';
import { catchError, map } from 'rxjs/operators';
import { HttpDataModule } from '../../../http-data.module';
import { limitQueryParamsToBackend } from '../constants';

@Injectable({
  providedIn: HttpDataModule,
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient,
    private httpUtilityService: HttpUtilityService
  ) {}

  getAll(queryParams: IProductQueryParams = {}): Observable<Product[] | null> {
    const params = this.formatQueryParams(queryParams);

    return this.httpClient
      .get<IProductBackend[]>(`${environment.apiPath}${ApiUrl.product}`, {
        params,
      })
      .pipe(
        map(res =>
          this.httpUtilityService.isResponseArray(
            res,
            `Error during get all products`
          )
        ),
        map(res => res.map(product => Product.fromBackendFactory(product))),
        // NOTE Extend json-server range select logic to filter between multiple ranges
        map(res =>
          res.filter(product => {
            if (!queryParams.price || !queryParams.price.length) {
              return true;
            }

            return queryParams.price.some(price => {
              return (
                price.rangeStart <= product.price &&
                product.price <= price.rangeEnd
              );
            });
          })
        ),
        catchError(err => this.httpUtilityService.handleError(err))
      );
  }

  private formatQueryParams(queryParams: IProductQueryParams = {}) {
    let params = new HttpParams();

    if (queryParams.search) {
      params = params.append(
        limitQueryParamsToBackend.search,
        queryParams.search
      );
    }

    if (queryParams.type) {
      queryParams.type.forEach(type => {
        params = params.append(limitQueryParamsToBackend.type, type.toString());
      });
    }

    if (queryParams.price) {
      queryParams.price.forEach(price => {
        params = params.append(
          limitQueryParamsToBackend.rangeStart,
          price.rangeStart.toString()
        );

        params = params.append(
          limitQueryParamsToBackend.rangeEnd,
          price.rangeEnd.toString()
        );
      });
    }

    return params;
  }
}
