import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpServer } from '../../api';
import { setTokenToLocaleStorage, removeTokenFromLocaleStorage } from '../services/authServise';

export const loginOperation = createAsyncThunk('auth/login', async (data) => {
  const response = await httpServer.post('/auth/signin', data);
  setTokenToLocaleStorage(response.data.data);
  return response.data.data;
});

export const logoutOperation = createAsyncThunk('auth/logout', async (data, { getState }) => {
  const state = getState();

  const response = await httpServer.post('/auth/signout', data, {
    headers: { Authorization: state.auth.authToken },
  });
  if (response.data.status === 'logout') {
    removeTokenFromLocaleStorage();
  }

  return;
});

export const registrationOperation = createAsyncThunk(
  'auth/registration',
  async (data, { dispatch }) => {
    const response = await httpServer.post('/auth/signup', data);

    if (response.data.user) {
      dispatch(
        loginOperation({
          login: response.data.user.login,
          password: response.data.user.password,
        })
      );
    }
  }
);
