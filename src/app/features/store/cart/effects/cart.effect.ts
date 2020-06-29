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
  DeleteFromCartFail,
  DeleteFromCartSuccess,
  LOAD_CART,
  LoadCart,
  LoadCartFail,
  LoadCartSuccess,
} from '../actions';
import { CartService } from '../services/cart.service';
import { getRandomId } from '../../../../core/helpers/get-random-id';

@Injectable()
export class CartEffects {
  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_TO_CART),
      map((action: AddToCart) => action.payload),
      switchMap(product => {
        // NOTE For correct work with json-server
        const productWithUnicId = { ...product, id: getRandomId(1, 5000) };

        return this.cartService.add(productWithUnicId).pipe(
          map(() => new AddToCartSuccess(productWithUnicId)),
          catchError(err => of(new AddToCartFail(err)))
        );
      }),
      share()
    )
  );

  deleteFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DELETE_FROM_CART),
      map((action: DeleteFromCart) => action.payload),
      switchMap(product =>
        this.cartService.delete(product).pipe(
          map(() => new DeleteFromCartSuccess(product)),
          catchError(err => of(new DeleteFromCartFail(err)))
        )
      )
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
      ),
      share()
    )
  );

  constructor(private actions$: Actions, private cartService: CartService) {}
}
