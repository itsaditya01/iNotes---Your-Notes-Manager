import React, { useState } from "react";
import "./Login.style.css";
import { FaUser, FaLock } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const host = process.env.REACT_APP_BACKEND_HOST;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (data.success) {
      localStorage.setItem("token", data.authToken);
      navigate("/home");
    } else {
      alert(data.error);
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div id="login">
      <div className="grid">
        <h2 className="mb-4" style={{ color: "white" }}>
          Login
        </h2>
        <form method="POST" className="form login" onSubmit={loginUser}>
          <div className="form__field">
            <label htmlFor="login__username" style={{ position: "relative" }}>
              <svg className="icon">
                <FaUser style={{ color: "var(--dark-blue)" }} />
              </svg>
              <span className="hidden">Username</span>
            </label>
            <input
              autoComplete="username"
              value={credentials.email}
              onChange={onChange}
              id="login__username"
              type="email"
              name="email"
              className="form__input"
              placeholder="Username"
              required
            />
          </div>

          <div className="form__field">
            <label htmlFor="login__password" style={{ position: "relative" }}>
              <svg className="icon">
                <FaLock style={{ color: "var(--dark-blue)" }} />
              </svg>
              <span className="hidden">Password</span>
            </label>
            <input
              id="login__password"
              type="password"
              value={credentials.password}
              onChange={onChange}
              name="password"
              className="form__input"
              placeholder="Password"
              required
            />
          </div>

          <div className="form__field">
            <input type="submit" value="Sign In" style={{ color: "#183153" }} />
          </div>
        </form>

        <p className="text-center text-white" style={{ position: "relative" }}>
          Not a member?{" "}
          <Link to="/signup" style={{ color: "var(--yellow)" }}>
            {" "}
            {"  Sign up now"}
          </Link>{" "}
          <svg className="icon1" style={{ fontSize: "1.5em" }}>
            <BiRightArrowAlt style={{ color: "var(--yellow)" }} />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default Login;
