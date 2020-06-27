import { Injectable } from '@angular/core';

import { ProductsPageModule } from '../products-page.module';
import { HttpClient } from '@angular/common/http';
import { HttpUtilityService } from '../../../../../features/http-data/utils/internal';

@Injectable({
  providedIn: ProductsPageModule,
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient,
    private httpUtilityService: HttpUtilityService
  ) {}

/*  getAll(): Observable<Readonly<Page<Products> | null>> {
    return this.httpClient
      .get<IPageBackend<IProductBackend>>(
        `${environment.apiPath}${ApiUrl.products}`
      )
      .pipe(
        map(res => {
          const productList = res.items.map(product =>
            Product.fromBackendFactory(product)
          );

          return Page.fromBackendFactory({
            items: productList,
            total: res.total,
          });
        }),
        catchError(err => this.httpUtilityService.handleError(err))
      );
  }*/
}
