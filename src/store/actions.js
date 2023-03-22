import { createAction } from '@reduxjs/toolkit';
import * as types from './types';

export const loginInProgress = createAction(types.LOGIN_PENDING);
export const loginInSuccess = createAction(types.LOGIN_FULLFILLED);
export const loginInError = createAction(types.LOGIN_REJECTED);

export const logoutInProgress = createAction(types.LOGOUT_PENDING);
export const logoutInSuccess = createAction(types.LOGOUT_FULLFILLED);
export const logoutInError = createAction(types.LOGOUT_REJECTED);
