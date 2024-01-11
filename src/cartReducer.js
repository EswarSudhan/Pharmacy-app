// cartReducer.js
import { ADD_TO_CART } from './cartActionTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    // Add more cases as needed for other actions

    default:
      return state;
  }
};

export default cartReducer;
