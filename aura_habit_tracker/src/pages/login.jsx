import "../css/Login.css";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignUpForm";
function Login() {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Aura</h1>
        <p className="tagline">
          Build Better Habits Every Day
        </p>
        <div className="login-box">
          <div className="tabs">
            <span
              className={!isSignup ? "active" : ""}
              onClick={() => setIsSignup(false)}
            >
              Login
            </span>
            <span
              className={isSignup ? "active" : ""}
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </span>
          </div>
          {isSignup ? (
            <SignupForm
              onLogin={() => setIsSignup(false)}
            />
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;