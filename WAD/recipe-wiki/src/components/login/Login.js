import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID:
          "638367548526-sahj6je33tl2nk6g2113ousd791rsei0.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  });

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User sign in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in failed");
    console.log(e);
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />

      <div className="login-button" onClick={popup}>
        Login
      </div>
      
      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
      
      <p className="text">Or login using</p>

      <div className="alternative-login">
        <div className="facebook"></div>
        <div className="google">
          <GoogleLogin
            className="blue"
            clientId="638367548526-sahj6je33tl2nk6g2113ousd791rsei0.apps.googleusercontent.com"
            buttonText=""
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
            icon={false}
            theme="dark"
          />
        </div>
      </div>

      
    </div>
  );
};

export default Login;
