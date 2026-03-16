import React from "react";
import "./Login.css";
import logo from "./assets/logo.png";

function Login() {
  return (
    <div className="login-bg">
      <div className="login-card">

        {/* LEFT SECTION */}
       <div className="login-left">
            <img src={logo} alt="Logo" className="login-logo" />
            <p>
            You Dream It. <span className="build-text">We Build It.</span>
            </p>
         </div>

        {/* RIGHT SECTION */}
        <div className="login-right">
          <label>Your email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="login-options">
            <span className="recover">Forgot password</span>
            </div>
          <button>LOGIN</button>
            <p className="signup-text">
            Don't have an account? <span className="signup-link">Sign in</span>
            </p>
        </div>

      </div>
    </div>
  );
}

export default Login;