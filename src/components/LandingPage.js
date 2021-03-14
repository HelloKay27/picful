import React from "react";
import Capture from "./Capture";
import UserPage from "./UserPage";
import Login from "./Login";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { me } from "../store/user";

const LandingPage = ({ user }) => {
  return (
    <div className='home-page'>
      <h4>picful</h4>
      <p>
        <small>
          because there's always one moment in your
          <br /> day worth capturing
        </small>
      </p>
      {user.id ? (
        <>
          <Capture />
          <UserPage />
        </>
      ) : (
        <>
          <Login />
          <SignUp />
        </>
      )}
    </div>
  );
};

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  me: () => dispatch(me()),
});

export default connect(mapState, mapDispatch)(LandingPage);
