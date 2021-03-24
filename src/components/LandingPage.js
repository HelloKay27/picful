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
      {user.id ? (
        <>
          <h4>picful</h4>
          <p>
            <small>Hello {user.firstName}</small>
          </p>
          <h4>
            <Capture />
            <UserPage />
          </h4>
        </>
      ) : (
        <>
          <h4>picful</h4>
          <p>
            <small>
              because there's always one moment in your
              <br /> day worth capturing
            </small>
          </p>
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
