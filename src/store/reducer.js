import { createReducer } from '@reduxjs/toolkit';
import { loginOperation, logoutOperation } from './operation';

const initialState = {
  authToken: null,
};
export const authReducer = createReducer(initialState, {
  [loginOperation.pending]: (state, action) => state,
  [loginOperation.fulfilled]: (state, action) => {
    return {
      ...state,
      authToken: action.payload,
    };
  },
  [loginOperation.rejected]: (state, action) => state,

  [logoutOperation.pending]: (state, action) => state,
  [logoutOperation.fulfilled]: (state, action) => {
    return {
      ...state,
      authToken: null,
    };
  },
  [logoutOperation.rejected]: (state, action) => state,
});
