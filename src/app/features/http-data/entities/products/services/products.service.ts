import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { isNull, isNumber } from 'lodash-es';

import { HttpUtilityService } from '../../../utils/internal';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { IProductBackend, IProductQueryParams } from '../interfaces';
import { environment } from '../../../../../../environments/environment';
import { ApiUrl } from '../../../enums';
import { HttpDataModule } from '../../../http-data.module';
import { productQueryParamsToBackend } from '../constants';

@Injectable({
  providedIn: HttpDataModule,
})
export class ProductsService {
  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  private _total: number;
  constructor(
    private httpClient: HttpClient,
    private httpUtilityService: HttpUtilityService
  ) {}

  getAll(queryParams: IProductQueryParams = {}): Observable<Product[] | null> {
    const params = this.formatQueryParams(queryParams);

    return this.httpClient
      .get<IProductBackend[]>(`${environment.apiPath}${ApiUrl.product}`, {
        params,
        observe: 'response',
      })
      .pipe(
        tap(res => this.getTotalFromHeaders(res.headers)),
        map(res =>
          this.httpUtilityService.isResponseArray(
            res.body,
            `Error during get all products`
          )
        ),
        map(res =>
          (res as IProductBackend[]).map(product =>
            Product.fromBackendFactory(product)
          )
        ),
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

    if (isNumber(queryParams.pageIndex)) {
      params = params.append(
        productQueryParamsToBackend.pageIndex,
        queryParams.pageIndex.toString()
      );
    }

    if (isNumber(queryParams.pageSize)) {
      params = params.append(
        productQueryParamsToBackend.pageSize,
        queryParams.pageSize.toString()
      );
    }

    if (queryParams.search) {
      params = params.append(
        productQueryParamsToBackend.search,
        queryParams.search
      );
    }

    if (queryParams.type) {
      queryParams.type.forEach(type => {
        params = params.append(
          productQueryParamsToBackend.type,
          type.toString()
        );
      });
    }

    if (queryParams.price) {
      queryParams.price.forEach(price => {
        params = params.append(
          productQueryParamsToBackend.rangeStart,
          price.rangeStart.toString()
        );

        params = params.append(
          productQueryParamsToBackend.rangeEnd,
          price.rangeEnd.toString()
        );
      });
    }

    return params;
  }

  private getTotalFromHeaders(headers: HttpHeaders): void {
    const total = headers.get('x-total-count');

    if (isNull(total)) {
      this.total = 0;

      return;
    }

    this.total = Number(total);
  }
}
