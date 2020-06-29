// load cart
// tslint:disable:ext-variable-name
import { Action } from '@ngrx/store';

import { Product } from '../../../http-data/entities/products/models';

export const LOAD_CART = '[CART] Load cart';
export const LOAD_CART_FAIL = '[CART] Load cart fail';
export const LOAD_CART_SUCCESS = '[CART] Load cart success';

export const ADD_TO_CART = '[CART] Add to cart';
export const ADD_TO_CART_FAIL = '[CART] Add to cart fail';
export const ADD_TO_CART_SUCCESS = '[CART] Add to cart success';

export const DELETE_FROM_CART = '[CART] Delete from cart';
export const DELETE_FROM_CART_FAIL = '[CART] Delete from cart fail';
export const DELETE_FROM_CART_SUCCESS = '[CART] Delete from cart success';

// action creators
// tslint:disable:max-classes-per-file
export class LoadCart implements Action {
  readonly type = LOAD_CART;
}

export class LoadCartFail implements Action {
  readonly type = LOAD_CART_FAIL;

  // tslint:disable-next-line:no-any
  constructor(public payload: any) {}
}

export class LoadCartSuccess implements Action {
  readonly type = LOAD_CART_SUCCESS;

  constructor(public payload: Product[] | null) {}
}

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;

  constructor(public payload: Product) {}
}

export class AddToCartSuccess implements Action {
  readonly type = ADD_TO_CART_SUCCESS;

  constructor(public payload: Product) {}
}

export class AddToCartFail implements Action {
  readonly type = ADD_TO_CART_FAIL;

  // tslint:disable-next-line:no-any
  constructor(public payload: any) {}
}

export class DeleteFromCart implements Action {
  readonly type = DELETE_FROM_CART;

  constructor(public payload: Product) {}
}

export class DeleteFromCartSuccess implements Action {
  readonly type = DELETE_FROM_CART_SUCCESS;

  constructor(public payload: Product) {}
}

export class DeleteFromCartFail implements Action {
  readonly type = DELETE_FROM_CART_FAIL;

  // tslint:disable-next-line:no-any
  constructor(public payload: any) {}
}

// action types
export type CartAction =
  | LoadCart
  | LoadCartFail
  | LoadCartSuccess
  | AddToCart
  | AddToCartFail
  | AddToCartSuccess
  | DeleteFromCart
  | DeleteFromCartFail
  | DeleteFromCartSuccess;
