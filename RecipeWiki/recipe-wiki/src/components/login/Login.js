import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="cover">
      <h1 className="title">Sign In</h1>
      <input type="text" placeholder="email or username" />
      <input type="password" placeholder="password" />
      <div className="login-button">Login</div>
      <p className="text">Or sign in with</p>
      <div className="alt-login">
        <div className="google"></div>
      </div>
      <p className="alternative">Don't have an account? <a href="signup" className="signup-button">Sign up!</a></p>
    </div>
  );
};

export default Login;
