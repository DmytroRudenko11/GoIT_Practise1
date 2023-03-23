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
