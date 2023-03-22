import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginOperation } from '../store/operation';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      loginOperation({
        login,
        password,
      })
    );

    navigate('/');
  };
  return (
    <div className="form__wrapper">
      <form className="form">
        <h2>Login</h2>
        <label htmlFor="login" className="label">
          Login
        </label>
        <input
          type="text"
          name="login"
          className="input"
          defaultValue={login}
          onChange={e => setLogin(e.target.value)}
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="text"
          name="password"
          className="input"
          defaultValue={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="btn__submit"
          onClick={e => handleSubmit(e)}
        >
          Send
        </button>
      </form>
    </div>
  );
}
