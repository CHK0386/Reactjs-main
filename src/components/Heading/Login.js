// import React, { useEffect, useState } from "react";
// import logo from "../Asset/logo.jpg";
import "./Heading.css";
import "./API.js";

// import {useState} from 'react'
// import {useHistory} from 'react-route-dom'


function Login() {
  // const [email, setEmail] =useState("");
  // const [password, setPassword] =useState("");
  // const history = useHistory()
  // useEffect(()=> {
  //   if (localStorage.getItem('user-info')){
  //     history.push("/add")
  //   }
  // },[])
  // function login() {
  //   console.warn(email,password)
  //   let item={email,password}
  //   let result= fetch("http://localhost:3000/posts",{
  //     method:'POST',
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Accept":'application/json'
  //     },
  //     body: JSON.stringify(item)

  //     });
  // }
  
  return (
    <div class="main">

      <form action="" method="POST" class="form" id="form-1">
        <h3 class="heading">Thành viên đăng ký</h3>
        <p class="desc">Cùng nhau học lập trình miễn phí tại F8 ❤️</p>

        <div class="spacer"></div>

        <div class="form-group">
          <label for="fullname" class="form-label">Tên đầy đủ</label>
          <input id="fullname" name="fullname" type="text" placeholder="VD: Sơn Đặng" class="form-control"/>
          <span class="form-message"></span>
        </div>

        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input id="email" name="email" type="text" placeholder="VD: email@domain.com" class="form-control"/>
          <span class="form-message"></span>
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Mật khẩu</label>
          <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" class="form-control"/>
          <span class="form-message"></span>
        </div>

        <div class="form-group">
          <label for="password_confirmation" class="form-label">Nhập lại mật khẩu</label>
          <input id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type="password" class="form-control"/>
          <span class="form-message"></span>
        </div>

        <button class="form-submit">Đăng ký</button>
      </form>

      <form action="" method="POST" class="form" id="form-2">
        <h3 class="heading">Đăng nhập</h3>
        <p class="desc">Cùng nhau học lập trình miễn phí tại F8 ❤️</p>

        <div class="spacer"></div>

        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input id="email" name="email" type="text" placeholder="VD: email@domain.com" class="form-control"/>
          <span class="form-message"></span>
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Mật khẩu</label>
          <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" class="form-control"/>
          <span class="form-message"></span>
        </div>

        <button class="form-submit">Đăng nhập</button>
      </form>

    </div>
     );
  }
  
export default Login;