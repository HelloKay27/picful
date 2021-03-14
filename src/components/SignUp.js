import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/user";

const SignUp = ({ signUp }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h5>Sign up</h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp({ firstName, lastName, email, password });
        }}
      >
        <input
          type='text'
          name='firstName'
          placeholder='Enter your first name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          type='text'
          name='lastName'
          placeholder='Enter your last name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Enter new password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='submit'>sign up</button>
      </form>
    </>
  );
};

const mapDispatch = (dispatch) => ({
  signUp: (body) => dispatch(signUp(body)),
});

export default connect(null, mapDispatch)(SignUp);
