import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigaion from './Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../store/auth/index';
import { getTokenFromLocaleStorage } from 'src/store/services/authServise';

export default function Wrapper() {
  const authToken = useSelector((state) => state.auth.authToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getTokenFromLocaleStorage();
    token && dispatch(setAuthToken(token));

    if (!token) {
      navigate('/login');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  return (
    <>
      <Navigaion />
      <Outlet />
    </>
  );
}
