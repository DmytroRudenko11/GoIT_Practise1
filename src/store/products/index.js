import { createSlice } from '@reduxjs/toolkit';
import { getProductsOperation } from './operations';

// Slice name
const NAME = 'products';

const initialState = {
  list: [],
};
const productsSlice = createSlice({
  name: NAME,
  initialState: initialState,

  extraReducers: {
    [getProductsOperation.pending](state, action) {},
    [getProductsOperation.fulfilled](state, action) {
      state.list = action.payload;
    },
    [getProductsOperation.rejected](state, action) {
      state.list = [];
    },
  },
});

export const productsReducer = productsSlice.reducer;
