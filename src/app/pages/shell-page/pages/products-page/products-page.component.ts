import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { switchMap } from 'rxjs/operators';

import { Products } from '@features/http-data/entities/products/models';
import { ProductsService } from '@features/http-data/entities/products/services';
import { IFilterFormValue } from './interfaces';
import { IProductQueryParams } from '@features/http-data/entities/products/interfaces';

@Component({
  selector: 'sc-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit {
  get filterValues(): IProductQueryParams {
    return this._filterValues;
  }

  set filterValues(value: IProductQueryParams) {
    this._filterValues = value;
  }

  get pageIndex(): number {
    return this._pageIndex;
  }

  set pageIndex(value: number) {
    this._pageIndex = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }

  get backendPageIndex(): number {
    return this.pageIndex + 1;
  }

  get totalProducts(): number {
    return this.productsService.total;
  }

  loadingError = false;

  products$: Observable<Products | null>;

  private _filterValues: IProductQueryParams;

  private _pageIndex = 0;
  private _pageSize = 10;

  private readonly filterUpdated$ = new BehaviorSubject<boolean>(true);

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.initFilterValues();

    this.products$ = this.filterUpdated$
      .asObservable()
      .pipe(switchMap(() => this.productsService.getAll(this.filterValues)));
  }

  onFilterValueChanged(value: IFilterFormValue): void {
    this.filterValues = {
      ...value,
      pageIndex: this.backendPageIndex,
      pageSize: this.pageSize,
    };

    this.filterUpdated$.next(true);
  }

  onPageChanged(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.filterValues = {
      ...this.filterValues,
      pageIndex: this.backendPageIndex,
      pageSize: this.pageSize,
    };

    this.filterUpdated$.next(true);
  }

  private initFilterValues(): void {
    this.filterValues = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    };
  }
}
