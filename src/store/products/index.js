import { createSlice } from '@reduxjs/toolkit';
import { getProductsOperation, deleteProductOperation } from './operations';

// Slice name
const NAME = 'products';

const initialState = {
  list: [],
  filter: '',
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
    // Метод deleteProductOperation не используется,
    // для удаления продукта из массива,
    // смотреть файл index.js в папке products
    [deleteProductOperation.pending](state, action) {},
    [deleteProductOperation.fulfilled](state, action) {},
    [deleteProductOperation.rejected](state, action) {},
  },
});

export const { setFilter } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
