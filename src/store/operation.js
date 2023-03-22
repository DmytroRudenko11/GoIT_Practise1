import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpServer } from '../api';

export const loginOperation = createAsyncThunk('auth/login', async data => {
  const response = await httpServer.post('/auth/signin', data);
  return response.data.data;
});

export const logoutOperation = createAsyncThunk('auth/logout', () => {});
