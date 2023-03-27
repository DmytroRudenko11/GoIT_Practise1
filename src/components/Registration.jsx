import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registrationOperation } from "src/store/auth/operations";

export default function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      registrationOperation({
        login,
        password,
      })
    );

    navigate("/");
  };
  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <label htmlFor="login" className="label">
          Login
        </label>
        <input
          type="text"
          name="login"
          id="login"
          className="input"
          onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="text"
          name="password"
          id="password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn__submit">
          Send
        </button>
      </form>
    </div>
  );
}
