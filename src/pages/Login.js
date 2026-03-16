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
            <h2>Vindia Infrasec Pvt Ltd</h2>
            <p>You Dream It.We Build It.</p>
         </div>

        {/* RIGHT SECTION */}
        <div className="login-right">
          <label>Your email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="login-options">
            <div className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <span className="recover">Forgot password</span>
            </div>
          <button>LOGIN</button>
            <p className="signup-text">
            Don't have an account? <span className="signup-link">Sign up</span>
            </p>
        </div>

      </div>
    </div>
  );
}

export default Login;