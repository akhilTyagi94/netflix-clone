import React, { useState } from "react";
import "./LoginScreen.css";
import loginscreenlogo from "../assets/logo.png";
import SignInScreen from "./SignInScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginscreen-background">
        <img className="loginscreen-logo" src={loginscreenlogo} alt="" />
        <button onClick={() => setSignIn(true)} className="loginscreen-button">
          Sign In
        </button>
        <div className="loginscreen-gradient" />
      </div>
      <div className="loginscreen-body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginscreen-input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginscreen-getstarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
