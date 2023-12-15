import React, { useState, useEffect } from 'react';

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


    return (
        <div className="bodyss">
          <div className="wrapper wrappers">
            <div className="form-box login form-boxs border-box">
              <div className="blur">
                <div>
                  <h2 className="tripwallet">Welcome<span> TripWallet</span></h2>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="input-box input-boxss"> 
                        <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <label>Email</label>
                    </div>
                    <div className="input-box input-boxss"> 
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <label>Password</label>
                    </div>
                  <button type="submit" className="log">
                    Login
                  </button>
                  <div className="login-register">
                    <p>
                      Don't have an account?{' '}
                      <a href={register} className="register-link">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    
}



export default Login