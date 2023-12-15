import React from "react";
import '../css/Login.css'


function logins() {
    const register = '/register'

    return (
        <div className="bodyss ">
            {/* <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-header">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/Project/Budget-Analysis.html"><b><span>Trip</span><span>Wallet</span></b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/Tripwallet/log&register/register.html"><span className= "home">LOGIN/REGISTER</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header> */}
            <div className="wrapper wrappers">
                <div className="form-box login form-boxs border-box">
                    
                    <div className="blur">
                        <div>
                            <h2 className="tripwallet">Welcome<span> TripWallet</span></h2>
                        </div>
                        <form action="#">
                            <div className="input-box input-boxss"> 
                                <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                                <input
                                    type="email"
                                    // value={email}
                                    // onChange={handleEmailChange}
                                    required
                                />
                                <label>Email</label>
                            </div>
                            <div className="input-box input-boxss"> 
                                <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                <input
                                    type="password"
                                    // value={password}
                                    // onChange={handlePasswordChange}
                                    required
                                />
                                <label>Password</label>
                            </div>
            
                            <button type="submit" className="log">Login</button>
                            <div className=" login-register"> 
                                <p>Don't have an account? <a href={register} className="register-link">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
    
     
        </div>
    );
}


const Login = logins

export default Login