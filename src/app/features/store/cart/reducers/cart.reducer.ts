import { Product } from '../../../http-data/entities/products/models';
import {
  ADD_TO_CART_SUCCESS,
  CartAction,
  DELETE_FROM_CART_SUCCESS,
  LOAD_CART,
  LOAD_CART_FAIL,
  LOAD_CART_SUCCESS,
} from '../actions';

export interface ICartState {
  entities: { [id: number]: Product };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ICartState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: CartAction): ICartState {
  switch (action.type) {
    case LOAD_CART: {
      return { ...state, loading: true };
    }

    case LOAD_CART_SUCCESS: {
      const products = action.payload ? action.payload : [];

      const entities: { [id: number]: Product } = products.reduce(
        (accum: { [id: number]: Product }, product) => {
          return { ...accum, [product.id]: product };
        },
        {
          ...state.entities,
        }
      );

      return { ...state, loading: false, loaded: true, entities };
    }

    case LOAD_CART_FAIL: {
      return { ...state, loading: false, loaded: false };
    }

    case ADD_TO_CART_SUCCESS: {
      const product = action.payload;
      const entities = { ...state.entities, [product.id]: product };

      return { ...state, entities };
    }

    case DELETE_FROM_CART_SUCCESS: {
      const product = action.payload;
      const { [product.id]: removed, ...entities } = state.entities;

      return { ...state, entities };
    }
  }

  return state;
}

export const getCartLoading = (state: ICartState) => state.loading;
export const getCartLoaded = (state: ICartState) => state.loaded;
export const getCartEntities = (state: ICartState) => state.entities;
