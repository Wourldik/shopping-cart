import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mapTo } from 'rxjs/operators';

import { ShellPageModule } from '../../../../pages/shell-page/shell-page.module';
import {
  IProduct,
  IProductBackend,
} from '../../../http-data/entities/products/interfaces';
import { HttpUtilityService } from '../../../http-data/utils/internal';
import { environment } from '../../../../../environments/environment';
import { ApiUrl } from '../../../http-data/enums';
import { Product } from '../../../http-data/entities/products/models';

@Injectable({
  providedIn: ShellPageModule,
})
export class CartService {
  constructor(
    private httpClient: HttpClient,
    private httpUtilityService: HttpUtilityService
  ) {}

  add(product: Product): Observable<boolean | null> {
    const id = this.getRandomId(100, 200);

    return this.httpClient
      .post(`${environment.apiPath}${ApiUrl.cart}`, { ...product, id })
      .pipe(
        map(res =>
          this.httpUtilityService.isResponseObject(
            res,
            'Error during adding to cart'
          )
        ),
        mapTo(true),
        catchError(err => this.httpUtilityService.handleError(err))
      );
  }

  delete(product: Product): Observable<boolean | null> {
    return this.httpClient
      .delete(`${environment.apiPath}${ApiUrl.cart}/${product.id}`)
      .pipe(
        map(res =>
          this.httpUtilityService.isResponseNull(
            res,
            `Error during delete product with id "${product.id}"`
          )
        ),
        mapTo(true),
        catchError(err => this.httpUtilityService.handleError(err))
      );
  }

  getCart(): Observable<IProduct[] | null> {
    return this.httpClient
      .get<IProductBackend[]>(`${environment.apiPath}${ApiUrl.cart}`)
      .pipe(
        map(res =>
          this.httpUtilityService.isResponseArray(
            res,
            `Error during get all cart products`
          )
        ),
        map(res => res.map(product => Product.fromBackendFactory(product))),
        catchError(err => this.httpUtilityService.handleError(err))
      );
  }

  private getRandomId(min: number, max: number): number {
    const rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
  }
}
