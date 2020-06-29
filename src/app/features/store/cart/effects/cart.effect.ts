import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, share, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  ADD_TO_CART,
  AddToCart,
  AddToCartFail,
  AddToCartSuccess,
  DELETE_FROM_CART,
  DeleteFromCart,
  DeleteFromCartSuccess,
  LOAD_CART,
  LoadCartFail,
  LoadCartSuccess,
} from '../actions';
import { CartService } from '../services/cart.service';

@Injectable()
export class CartEffects {
  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_TO_CART),
      map((action: AddToCart) => action.payload),
      switchMap(product =>
        this.cartService.add(product).pipe(
          map(() => new AddToCartSuccess(product)),
          catchError(err => of(new AddToCartFail(err)))
        )
      ),
      share()
    )
  );

  deleteFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DELETE_FROM_CART),
      map((action: DeleteFromCart) => action.payload),
      switchMap(product =>
        this.cartService.add(product).pipe(
          map(() => new DeleteFromCartSuccess(product)),
          catchError(err => of(new DeleteFromCartSuccess(err)))
        )
      ),
      share()
    )
  );

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_CART),
      switchMap(() =>
        this.cartService.getCart().pipe(
          map(product => new LoadCartSuccess(product)),
          catchError(err => of(new LoadCartFail(err)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private cartService: CartService) {}
}
