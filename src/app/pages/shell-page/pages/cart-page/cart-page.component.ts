import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Product,
  Products,
} from '../../../../features/http-data/entities/products/models';
import { IProductBackend } from '../../../../features/http-data/entities/products/interfaces';
import { environment } from '../../../../../environments/environment';
import { ApiUrl } from '../../../../features/http-data/enums';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpUtilityService } from '../../../../features/http-data/utils/internal';

@Component({
  selector: 'sc-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  loadingError = false;

  products$: Observable<Products | null>;

  totalProducts: number;

  // NOTE Delete after implementing store
  constructor(
    private httpClient: HttpClient,
    private httpUtilityService: HttpUtilityService
  ) {}

  ngOnInit(): void {
    this.products$ = this.httpClient
      .get<IProductBackend[]>(`${environment.apiPath}${ApiUrl.product}`)
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
}
