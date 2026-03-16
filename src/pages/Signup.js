import React from "react";
import "./Login.css";

function Signup() {
  return (
    <div className="login-bg">
      <div className="login-card">

        {/* LEFT SIDE */}
        <div className="login-left">
          <h2>Create Account</h2>
          <p>
            Register a new account to access the system.
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
            Already have an account? <span className="signup-link">Login</span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Signup;