import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FilterFormService } from '../../services';
import { filterFormKeys } from '../../contanst';
import {
  priceRanges,
  productTypes,
} from '../../../../../../features/http-data/entities/products/constants';

import { IFilterFormValue } from '../../interfaces';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'sc-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss'],
})
export class ProductFiltersComponent implements OnInit, OnDestroy {
  get form(): FormGroup {
    return this.formService.form;
  }

  get value(): IFilterFormValue {
    const formValues = this.form.value;

    return Object.keys(this.form.value).reduce<IFilterFormValue>(
      (accum, key) => {
        const k = key as keyof IFilterFormValue;
        const formValueByKey = formValues[k];

        if (formValueByKey) {
          accum[k] = formValues[k];
        }

        return accum;
      },
      {}
    );
  }

  readonly formKeys = filterFormKeys;
  readonly priceRanges = priceRanges;
  readonly types = productTypes;

  @Output()
  readonly valueChanged = new EventEmitter<IFilterFormValue>();

  private readonly destroyed$ = new Subject<void>();

  constructor(private formService: FilterFormService) {}

  clearSearch(): void {
    this.formService.clearSearch();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.formService.buildForm();

    this.formService.valueChange$
      .pipe(debounceTime(500), takeUntil(this.destroyed$))
      .subscribe(() => this.valueChanged.emit(this.value));
  }
}
