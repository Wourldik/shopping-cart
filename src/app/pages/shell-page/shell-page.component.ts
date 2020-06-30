import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadCart } from '@features/store/cart/actions';
import { IState } from '@features/store/cart/reducers';
import { getData } from '@features/store/cart/selectors';
import { Product } from '@features/http-data/entities/products/models';

@Component({
  selector: 'sc-shell-page-component',
  templateUrl: './shell-page.component.html',
  styleUrls: ['./shell-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellPageComponent implements OnInit {
  constructor(private store: Store<IState>) {}

  products$: Observable<Product[] | null>;

  ngOnInit(): void {
    this.products$ = this.store.select(getData);

    this.store.dispatch(new LoadCart());
  }
}
