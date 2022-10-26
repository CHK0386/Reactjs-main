import React from "react";
import logo from "../Asset/logo.jpg";
import "./Heading.css";
// import {useState} from 'react'

function Login() {
  
    return (
      <div class="login-box">
          <img src={logo} alt={logo} className="logo-icon" />
              {/* <div className="h1 fw-bold mb-0">Appointment Booking System</div> */}
          <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
    );
  }
  
  export default Login;