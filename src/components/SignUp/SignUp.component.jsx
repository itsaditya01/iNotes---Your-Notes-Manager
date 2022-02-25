import React, { useState } from "react";
import "./SignUp.style.css";
import { FaUser, FaLock } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function SignUp() {
  const host = "http://localhost:5000"
  console.log("Signup Loaded");
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const createUser = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, cpassword })
        });
        const data = await response.json();
        if (data.success) {
            localStorage.setItem('token', data.authToken);
            navigate('/home');
        }
        else {
            alert(data.error);
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  return (
    <div id="login">
      <div className="grid">
        <h2 className="mb-4">Sign up</h2>
        <form
          method="POST"
          className="form login"
          onSubmit={createUser}
        >
          <div className="form__field">
            <label htmlFor="login__username" style={{position: "relative"}}>
              <svg className="icon">
                <FaUser />
              </svg>
              <span className="hidden">Username</span>
            </label>
            <input
              autoComplete={"username"}
              id="login__username"
              type="text"
              onChange={onChange} 
              value={credentials.name}
              name="name"
              className="form__input"
              placeholder="Name"
              required
            />
          </div>

          <div className="form__field">
            <label htmlFor="login__password" style={{position: "relative"}}>
              <svg className="icon">
                <MdEmail />
              </svg>
              <span className="hidden">Email</span>
            </label>
            <input
              id="login__password"
              type="email"
              name="email"
              onChange={onChange} 
              value={credentials.email}
              className="form__input"
              placeholder="Email"
              required
            />
          </div>
          <div className="form__field">
            <label htmlFor="login__password" style={{position: "relative"}}>
              <svg className="icon">
                <FaLock />
              </svg>
              <span className="hidden">Password</span>
            </label>
            <input
              id="login__password"
              type="password"
              name="password"
              onChange={onChange} 
              value={credentials.password}
              className="form__input"
              placeholder="Password"
              required
            />
          </div>
          <div className="form__field">
            <label htmlFor="login__password" style={{position: "relative"}}>
              <svg className="icon">
                <FaLock />
              </svg>
              <span className="hidden">Confirm Password</span>
            </label>
            <input
              id="login__password"
              type="password"
              name="cpassword"
              onChange={onChange} 
              value={credentials.cpassword}
              className="form__input"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form__field">
            <input type="submit" value="Sign Up" />
          </div>
        </form>

        <p className="text- center text-white">
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#ea4c88" }}>
            {" "}
            {"  Login now"}  
          </Link>{" "}
          <svg className="icon1" style={{ fontSize: "1.5em" }}>
            <BiRightArrowAlt style={{ color: "#ea4c88" }} />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
