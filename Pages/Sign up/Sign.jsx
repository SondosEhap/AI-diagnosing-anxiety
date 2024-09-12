import React, { useState } from "react";
import google from "./google.svg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "./Sign.css";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const navigate = useNavigate();

  const signUpUser = (event) => {
    event.preventDefault();

    // Validation checks
    if (username.trim().length === 0) {
      alert("Username cannot be empty!");
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      alert("Username can only contain letters and numbers!");
    } else if (email.trim().length === 0) {
      alert("Email cannot be empty!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email format!");
    } else if (password.length === 0) {
      alert("Password cannot be empty!");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
    } else if (password !== confirmedPassword) {
      alert("Passwords do not match!");
    } else {
      axios
        .post(
          "http://127.0.0.1:5000/signup",
          {
            email: email,
            password: password,
            username: username,
          },
          {
            withCredentials: true,
          }
        )
        .then(function (response) {
          console.log(response);
          navigate("/");
        })
        .catch(function (error) {
          console.log(error, "error");
          if (error.response && error.response.status === 401) {
            alert("Invalid credentials");
          } else if (error.response && error.response.status === 409) {
            alert("User already exists");
          }
        });
    }
  };

  return (
    <div>
      <div className="background">
        <div className="container">
          <h1>Sign Up</h1>
          <form onSubmit={signUpUser}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <button type="submit">
              Sign Up
            </button>
            <div className="or-line">
              <span className="line"></span>
              <span className="or-text">OR</span>
              <span className="line"></span>
            </div>
            <button type="button" className="google-btn">
              <img src={google} alt="Sign up with Google" />
              Sign Up with Google
            </button>
          </form>
          <div className="footer">
            <NavLink to="/login">Already have an account? Log In</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
