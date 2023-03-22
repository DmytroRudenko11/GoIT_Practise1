import { createReducer } from '@reduxjs/toolkit';
import * as actions from './types';

const initialState = {
  authToken: null,
};
export const authReducer = createReducer(initialState, {
  [actions.LOGIN_PENDING]: (state, action) => state,
  [actions.LOGIN_FULLFILLED]: (state, action) => {
    return {
      ...state,
      authToken: action.payload,
    };
  },
  [actions.LOGIN_REJECTED]: (state, action) => state,

  [actions.LOGOUT_PENDING]: (state, action) => state,
  [actions.LOGOUT_FULLFILLED]: (state, action) => {
    return {
      ...state,
      authToken: null,
    };
  },
  [actions.LOGOUT_REJECTED]: (state, action) => state,
});
