import React from "react";
import Capture from "./Capture";
import UserPage from "./UserPage";

const LandingPage = () => {
  return (
    <div className='home-page'>
      <h4>picful</h4>
      <p>
        because theres always one moment in your
        <br /> day worth capturing
      </p>
      <button>login</button>
      <br />
      <button>sign up</button>
      <Capture />
      <UserPage />
    </div>
  );
};

export default LandingPage;
