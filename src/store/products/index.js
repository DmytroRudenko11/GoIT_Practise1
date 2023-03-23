import { createSlice } from "@reduxjs/toolkit";
import { getProductsOperation } from "./operations";

// Slice name
const NAME = "products";

const initialState = {
  list: [],
  filter: "",
};
const productsSlice = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
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

export const { setFilter } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
