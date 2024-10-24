import React, { useState } from 'react';
import './LoginPage.css'; 
import { Link } from 'react-router-dom'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Eye icons for password visibility

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Welcome Back</h2>
        <form>
          {/* Name field */}
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          {/* Email field */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          {/* Password field with visibility toggle */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
              />
              <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Forgot password link now below the password field */}
          <p className="forgot-password-link">
            <Link to="/forgot-password">Forgot your password?</Link>
          </p>

          {/* Login button */}
          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
