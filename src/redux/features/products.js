import { createNextState } from '@reduxjs/toolkit';
import { arrToMap, isLoading, shouldLoad } from '../utils';
import { REQUEST, SUCCESS, FAILURE, STATUS } from '../constants';
import api from '../../api';


export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

// reducer

const initialState = {
  status: {},
  entities: {},
  error: null,
};

export default createNextState((draft = initialState, action) => {
  const { type, restaurantId, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST: {
      draft.status[restaurantId] = STATUS.pending;
      draft.error = null;
      break;
    }
    case LOAD_PRODUCTS + SUCCESS: {
      draft.status[restaurantId] = STATUS.fulfilled;
      Object.assign(draft.entities, arrToMap(data));
      break;
    }
    case LOAD_PRODUCTS + FAILURE: {
      draft.status[restaurantId] = STATUS.rejected;
      draft.error = error;
      break;
    }
    default:
      return draft;
  }
});

// actions

export const loadProducts = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS + REQUEST });
  try {
    const data = await api.loadProducts(restaurantId);
    dispatch({ type: LOAD_PRODUCTS + SUCCESS, data });
  } catch (error) {
    dispatch({ type: LOAD_PRODUCTS + FAILURE, error });
  }
}

// selectors

export const productsSelector = (state) => state.products.entities;
export const productSelector = (state, { id }) => productsSelector(state)[id];

const productsStatusSelector = (state, props) => state.products.status[props.restaurantId];
export const productsLoadingSelector = isLoading(productsStatusSelector);
export const shouldLoadProductsSelector = shouldLoad(productsStatusSelector);
