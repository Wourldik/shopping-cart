import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IState } from '../../../features/store/cart/reducers';
import { getData } from '../../../features/store/cart/selectors';
import { Product } from '../../../features/http-data/entities/products/models';

@Component({
  selector: 'sc-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainToolbarComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<IState>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getData);
  }
}
