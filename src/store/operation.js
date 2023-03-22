import { httpServer } from '../api';
import * as actions from './actions';

export const loginOperation = data => async dispatch => {
  dispatch(actions.loginInProgress());
  try {
    const response = await httpServer.post('/auth/signin', data);
    if (response) {
      dispatch(actions.loginInSuccess(response.data.data));
    } else {
      throw new Error('Cannot get data');
    }
  } catch (error) {
    dispatch(actions.loginInError());
    console.log(error);
  }
};
