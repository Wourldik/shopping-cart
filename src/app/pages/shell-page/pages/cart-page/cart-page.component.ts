import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IState } from '@features/store/cart/reducers';
import {
  Product,
  Products,
} from '@features/http-data/entities/products/models';
import { getData } from '@features/store/cart/selectors';
import { DeleteFromCart, LoadCart } from '@features/store/cart/actions';

@Component({
  selector: 'sc-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent implements OnInit {
  loadingError = false;

  products$: Observable<Products | null>;

  constructor(private store: Store<IState>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getData);
    this.store.dispatch(new LoadCart());
  }

  onRemove(product: Product): void {
    this.store.dispatch(new DeleteFromCart(product));
  }
}
