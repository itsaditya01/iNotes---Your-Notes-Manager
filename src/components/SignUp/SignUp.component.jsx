import React from "react";
import "./SignUp.style.css";
import { FaUser, FaLock } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

function SignUp() {
  return (
    <div id="login">
      <div className="grid">
        <form
          action="https://httpbin.org/post"
          method="POST"
          className="form login"
        >
          <div className="form__field">
            <label for="login__username">
              <svg className="icon">
                <FaUser />
              </svg>
              <span className="hidden">Username</span>
            </label>
            <input
              autocomplete="username"
              id="login__username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Username"
              required
            />
          </div>

          <div className="form__field">
            <label for="login__password">
              <svg className="icon">
                <FaLock />
              </svg>
              <span className="hidden">Password</span>
            </label>
            <input
              id="login__password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Password"
              required
            />
          </div>

          <div className="form__field">
            <input type="submit" value="Sign In" />
          </div>
        </form>

        <p className="text--center text-white">
          Not a member?{" "}
          <a href="#" style={{ color: "#ea4c88" }}>
            {" "}
            {"  Sign up now"}
          </a>{" "}
          <svg className="icon" style={{ fontSize: "1.5em" }}>
            <BiRightArrowAlt style={{ color: "#ea4c88" }} />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
