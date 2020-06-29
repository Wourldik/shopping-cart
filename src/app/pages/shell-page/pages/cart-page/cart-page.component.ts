import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  Product,
  Products,
} from '../../../../features/http-data/entities/products/models';
import { IState } from '../../../../features/store/cart/reducers';
import {
  DeleteFromCart,
  LoadCart,
} from '../../../../features/store/cart/actions';
import { getData } from '../../../../features/store/cart/selectors';

@Component({
  selector: 'sc-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent implements OnInit {
  loadingError = false;

  products$: Observable<Products | null>;

  totalProducts: number;

  constructor(private store: Store<IState>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getData);
    this.store.dispatch(new LoadCart());
  }

  onRemove(product: Product): void {
    this.store.dispatch(new DeleteFromCart(product));
  }
}
