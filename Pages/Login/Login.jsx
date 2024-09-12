import React from "react";
import google from "./google.svg";
import "./Login.css";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const logInUser = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate email and password inputs
    if (email.trim().length === 0) {
      alert("Email cannot be empty!");
      return;

    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email format!");
      return;
    } else if (password.length === 0) {
      alert("Password cannot be empty!");
      return;
    }
    
    if(email=="admin@gmail.com" && password == "123456")
      { axios
        .post(
          "http://127.0.0.1:5000/login",
          {
            email: email,
            password: password,
          },
          {
            withCredentials: true,
          }
        )
        .then(function (response) {
          console.log(response);
  
          navigate("/admin");
        })
        .catch(function (error) {
          console.log(error, "error");
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        });}
    else{
    axios
    .post(
        "http://127.0.0.1:5000/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response);

        navigate("/profile");
      })
      .catch(function (error) {
        console.log(error, "error");
        if (error.response.status === 401) {
          alert("Invalid credentials");
        }
      });}
   
  
  };

  // const handleLogin = (event) => {
  //   event.preventDefault(); // Prevent default form submission behavior

  //   // Validate email and password inputs
  //   if (email.trim().length === 0) {
  //     alert("Email cannot be empty!");
  //     return;

  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     alert("Invalid email format!");
  //     return;
  //   } else if (password.length === 0) {
  //     alert("Password cannot be empty!");
  //     return;
  //   }
  //   axios.post('http://127.0.0.1:5000/login', { email, password })
  //     .then(response => {
  //       console.log(response.data);  // Store user information in the state
  //       if (response.data.email === 'admin@gmail.com') {
  //        navigate('/admin');
  //       } else {
  //         navigate('/profile');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Login failed:', error);
  //       if (error.response && error.response.status === 401) {
  //         alert("Invalid credentials");
  //       }
  //     });
  // };
  return (
    <div>
      <div className="background">
        <div className="container">
          <h1>Login</h1>
          <form>
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
            <button type="submit" onClick={logInUser}>
              Login
            </button>
            <div className="or-line">
              <span className="line"></span>
              <span className="or-text">OR</span>
              <span className="line"></span>
            </div>

            <button type="submit" className="google-btn">
              <img src={google} />
              Continue with Google
            </button>
          </form>
          <div className="footerLogin">
            <NavLink to="/">Forgot password?</NavLink>
            <NavLink to="/signup">Create Account</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
