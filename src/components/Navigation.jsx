import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInSuccess } from '../store/actions';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export default function Navigaion() {
  const authToken = useSelector(state => state.auth.authToken);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutInSuccess());
  };

  return (
    <>
      <div className="navigation">
        {authToken ? (
          <>
            <StyledLink className="nav__item" to="/products">
              Products
            </StyledLink>{' '}
            <button className="nav__item mla action__btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <StyledLink className="nav__item mla" to="/login">
              Login
            </StyledLink>
            <StyledLink className="nav__item" to="/registration">
              Registration
            </StyledLink>
          </>
        )}
      </div>
    </>
  );
}

//class button logout: nav__item mla action__btn
//class StyledLink: nav__item
//class StyledLink to signin: nav__item mla
