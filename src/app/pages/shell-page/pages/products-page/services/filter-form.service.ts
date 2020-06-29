import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { filterFormKeys } from '../contanst';
import { IFilterFormValue } from '../interfaces';

@Injectable()
export class FilterFormService {
  get form(): FormGroup {
    return this._form;
  }

  private _form: FormGroup;
  constructor(private fb: FormBuilder) {}

  buildForm(): void {
    this._form = this._buildForm();
  }

  clearSearch(): void {
    const control = this.form.get(filterFormKeys.search) as FormControl;

    control.setValue('');
  }

  get value(): IFilterFormValue {
    return this.form.value;
  }

  get valueChange$(): Observable<IFilterFormValue> {
    return this.form.valueChanges;
  }

  private _buildForm(): FormGroup {
    return this.fb.group({
      [filterFormKeys.search]: [''],
      [filterFormKeys.type]: [null],
      [filterFormKeys.price]: [null],
    });
  }
}
