// cartActions.js
import { ADD_TO_CART } from './cartActionTypes';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
