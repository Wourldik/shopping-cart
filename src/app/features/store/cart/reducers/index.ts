import { ActionReducerMap } from '@ngrx/store';

import { ICartState, reducer } from './cart.reducer';

export interface IState {
  cart: ICartState;
}

export const reducers: ActionReducerMap<IState> = {
  // @ts-ignore
  cart: reducer,
};
