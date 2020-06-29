import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  getCartEntities,
  getCartLoaded,
  getCartLoading,
} from '../reducers/cart.reducer';
import { IState } from '../reducers';

export const getState = createFeatureSelector<IState>('cart');

export const getCartState = createSelector(
  getState,
  (state: IState) => state.cart
);

export const getDataEntities = createSelector(getCartState, getCartEntities);
export const getData = createSelector(getDataEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getLoaded = createSelector(getCartState, getCartLoaded);
export const getLoading = createSelector(getCartState, getCartLoading);
