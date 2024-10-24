import React from 'react';
import './ForgotPasswordPage.css';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2 className="forgot-password-title">Forgot Your Password?</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Enter your registered email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <button type="submit" className="reset-button">Reset Password</button>
        </form>
        <div className="back-to-login">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
