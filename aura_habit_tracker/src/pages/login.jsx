import "../css/Login.css";
import googleIcon from "../assets/images/SVG.png";
import { useState } from "react";

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(
    localStorage.getItem("auraEmail") || ""
  );
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (isSignup) {
      const user = {
        name: name,
        email: email,
        password: password
      };
      localStorage.setItem("auraUser", JSON.stringify(user));
      alert("Account created successfully!");
      setIsSignup(false);
      setPassword("");

    } else {
      const savedUser = JSON.parse(
        localStorage.getItem("auraUser")
      );

      if (!savedUser) {
        alert("Please Sign Up first.");
        return;
      }

      if (
        email === savedUser.email &&
        password === savedUser.password
      ) {

        localStorage.setItem("auraEmail", email);
        localStorage.setItem("auraName", savedUser.name);

        alert("Login successful!");

      } else {
        alert("Invalid email or password.");
      }
    }
  }

  return (
    <div className="login-page">

      <div className="login-container">

        <h1>Aura</h1>

        <p className="tagline">
          Build Better Habits Every Day
        </p>

        <form
          className="login-box"
          onSubmit={handleSubmit}
        >

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

            <>
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                required
              />

              <label>Email Address</label>

              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />

              <button
                className="login-btn"
                type="submit"
              >
                CREATE ACCOUNT
              </button>
            </>

          ) : (

            <>
              <label>Email Address</label>

              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />

              <div className="password-label">

                <label>Password</label>

                <a href="#">
                  Forgot?
                </a>

              </div>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />

              <button
                className="login-btn"
                type="submit"
              >
                SECURE LOGIN
              </button>

              <div className="or">

                <span></span>

                <p>OR</p>

                <span></span>

              </div>

              <button
                type="button"
                className="google-btn"
              >
                <img
                  src={googleIcon}
                  alt="Google"
                />

                Continue with Google
              </button>
            </>

          )}

        </form>

      </div>

    </div>
  );
}

export default Login;