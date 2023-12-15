import { useState } from "react";
import React from "react";
import '../css/Register.css';
import login_bg from '../img/login_bg.png'


const Register = () => {
    const login = '/login'


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const [isPasswordVisibles, setIsPasswordVisibles] = useState(false);

    const togglePasswordVisibilitys = () => {
      setIsPasswordVisibles(!isPasswordVisibles);
    };
    return (
        <body className='body-login'>
          <div className="loginlogin">
            <img src={login_bg} alt="login image" className="login__img" />
  
            <form action="" className="login__formlogin">
                <h1 className="login__title">Register</h1>
  
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
  
                <div className="login__box">
                      <i className="ri-lock-2-line login__icon"></i>
  
                      <div className="login__box-input">
                      <input
                        type={isPasswordVisibles ? 'text' : 'password'}
                        required
                        className="login__input input-login"
                        id="login-pass"
                        placeholder=" "
                      />
                      <label htmlFor="login-pass" className="login__label">
                        Re-Password
                      </label>
                      <i
                        className={`ri-${isPasswordVisibles ? 'eye-line' : 'eye-off-line'} login__eye`}
                        onClick={togglePasswordVisibilitys}
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
                  Don't have an account? <a href='/login' className='a'>Login</a>
                </p>
            </form>
          </div>
        </body>
    );
}


export default Register