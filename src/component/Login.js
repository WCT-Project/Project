import React, { useState, useEffect } from 'react';
import login_bg from '../img/login_bg.png'

import $ from 'jquery'


import '../css/Login.css'



const Login = () => {
    const register = '/register'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = async (e) => {
        e.preventDefault();

        $.ajax({
            url: 'http://127.0.0.1:5000/user/authenticate',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',  // Set content type to JSON
            data: JSON.stringify({
                email: email,  // Replace with your actual email
                password: password,    // Replace with your actual password
            }),

            success: function (response) {
                // Update state with fetched data
                if (response) console.log(response)
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    };

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <body className='body-login'>
        <div className="loginlogin">
          <img src={login_bg} alt="login image" className="login__img" />

          <form action="" className="login__formlogin">
              <h1 className="login__title">Login</h1>

              <div className="login__content">
                <div className="login__box">
                    <i className="ri-user-3-line login__icon"></i>

                    <div className="login__box-input">
                      <input type="email" required className="login__input input-login" id="login-email" placeholder=" " />
                      <label for="login-email" className="login__label">Email</label>
                    </div>
                </div>

                <div className="login__box">
                    <i className="ri-lock-2-line login__icon"></i>

                    <div className="login__box-input">
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      required
                      className="login__input input-login"
                      id="login-pass"
                      placeholder=" "
                    />
                    <label htmlFor="login-pass" className="login__label">
                      Password
                    </label>
                    <i
                      className={`ri-${isPasswordVisible ? 'eye-line' : 'eye-off-line'} login__eye`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="login__check">
                <div className="login__check-group">
                    <input type="checkbox" className="login__check-input input-login" id="login-check" />
                    <label for="login-check" className="login__check-label">Remember me</label>
                </div>

                <a href="#" className="login__forgotlogin">Forgot Password?</a>
              </div>

              <button type="submit" className="login__buttonlogin button-login">Login</button>

              <p className="login__registerlogin">
                Don't have an account? <a href='/register' className='a'>Register</a>
              </p>
          </form>
        </div>
      </body>
      );
    
}



export default Login