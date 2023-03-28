import { createSlice } from '@reduxjs/toolkit';
import { loginOperation, logoutOperation } from './operations';

// Slice name
const NAME = 'auth';

const initialState = {
  authToken: null,
};
const authSlice = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    setAuthToken(state, action) {
      state.authToken = action.payload
    }
  },

  extraReducers: {
    [loginOperation.pending](state, action) {},
    [loginOperation.fulfilled](state, action) {
      state.authToken = action.payload;
    },
    [loginOperation.rejected](state, action) {},

    [logoutOperation.pending](state, action) {},
    [logoutOperation.fulfilled](state, action) {
      state.authToken = null;
    },
    [logoutOperation.rejected](state, action) {},
  },
});

export const authReducer = authSlice.reducer;
export const { setAuthToken } = authSlice.actions;
