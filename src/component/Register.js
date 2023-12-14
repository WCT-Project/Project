import React from "react";
import '../css/Register.css';

function registers() {
    const login = '/login'

    return (
        <div>
            <div className="wrapperr">
                <div className="form-box login form-boxr">
                    <h2>Register</h2>
                    <form action="#">
                        
                        <div className="input-box input-boxsss"> 
                            <span className="icon iconr"><ion-icon name="person-outline"></ion-icon></span>
                            <input type="email" required/>
                            <label>Username</label>
                        </div>
                        <div className="input-box input-boxsss"> 
                            <span className="icon iconr"><ion-icon name="mail-outline"></ion-icon></span>
                            <input type="email" required/>
                            <label>Email</label>
                        </div>
                        
                        <div className="input-box input-boxsss"> 
                            <span className="icon iconr"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <input 
                                type="password" 
                                required
                            />
                            <label>Password</label>
                        </div>
                        <div className="input-box input-boxsss"> 
                            <span className="icon iconr"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <input
                                type="password"
                                required
                            />
                            <label>Confirm Password</label>
                        </div>
                        <button type="submit" className="log logr">Create account</button>
                        <div className=" login-register login-registerr"> 
                            <p>Don't have an account? <a href={login} className="register-link">Login</a></p>
                        </div>
                        
                    </form>
                </div>
            </div>  
        </div>
    );
}

const Register = registers
export default Register