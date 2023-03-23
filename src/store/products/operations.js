import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpServer } from '../../api';

export const getProductsOperation = createAsyncThunk('product/getAll', async (_, { getState }) => {
  const state = getState();
  if (state.auth.authToken) {
    const response = await httpServer.get('/product/all', {
      headers: { Authorization: state.auth.authToken },
    });
    return response.data.data;
  } else {
    return [];
  }
});

export const deleteProductOperation = createAsyncThunk(
  'product/delete',
  async (id, { getState, dispatch }) => {
    const state = getState();
    console.log(state, id);
    if (state.auth.authToken) {
      const { data } = await httpServer.post(
        `/product/${id}/delete`,
        {},
        {
          headers: { Authorization: state.auth.authToken },
        }
      );

      console.log(data);
      if (data.status === 'deleted') {
        dispatch(getProductsOperation());
      }
    }
    return;
  }
);
