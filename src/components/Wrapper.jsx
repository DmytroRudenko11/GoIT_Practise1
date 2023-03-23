import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigaion from './Navigation';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Wrapper() {
  const authToken = useSelector(state => state.auth.authToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
  }, [authToken]);

  return (
    <>
      <Navigaion />
      <Outlet />
    </>
  );
}
