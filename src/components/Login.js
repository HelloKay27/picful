import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../store/user";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h5>Login</h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login({ email, password });
        }}
      >
        <input
          type='text'
          name='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='submit'>login</button>
      </form>
    </>
  );
};

const mapDispatch = (dispatch) => ({
  login: (body) => dispatch(login(body)),
});

export default connect(null, mapDispatch)(Login);
