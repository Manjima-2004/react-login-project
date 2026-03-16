import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

function Signup() {
  return (
    <div className="login-bg">
      <div className="login-card">

        {/* LEFT SIDE */}
      <div className="login-left">
  <img src={logo} alt="Logo" className="login-logo" />
  <p>
    You Dream It. <span className="build-text">We Build It.</span>
  </p>
</div>

        {/* RIGHT SIDE */}
        <div className="login-right">

          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" />

          <button>Sign Up</button>

         <p className="signup-text">
  Already have an account? 
  <Link to="/" className="signup-link"> Login</Link>
</p>

        </div>

      </div>
    </div>
  );
}

export default Signup;