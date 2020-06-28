import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import { Products } from '../../../../features/http-data/entities/products/models';
import { ProductsService } from '../../../../features/http-data/entities/products/services';
import { filter, switchMap } from 'rxjs/operators';
import { IFilterFormValue } from './interfaces';

@Component({
  selector: 'sc-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit {
  get filterValues(): IFilterFormValue {
    return this._filterValues;
  }

  set filterValues(value: IFilterFormValue) {
    this._filterValues = value;
  }

  get pageIndex(): number {
    // TODO
    return 0;
  }

  get pageSize(): number {
    // TODO
    return 10;
  }

  loadingError = false;

  products$: Observable<Products | null>;

  totalProducts: number;

  private _filterValues: IFilterFormValue;

  private readonly filterUpdated$ = new BehaviorSubject<boolean>(true);

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.filterUpdated$
      .asObservable()
      .pipe(switchMap(() => this.productsService.getAll(this.filterValues)));
  }

  onFilterValueChanged(value: IFilterFormValue): void {
    this.filterValues = value;

    this.filterUpdated$.next(true);
  }

  onPageChanged(event: PageEvent): void {
    // TODO
  }
}
