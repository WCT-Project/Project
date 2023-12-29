import React from "react";
import '../css/profile.css';
import { useLogin } from '../js/LoginHandler';
import btb from '../img/battambang.jpg'


function Profile(props) {

    const {userName, email} = useLogin();


    return  (props.trigger) ? (
        <div className="popup">
            <div className="second-popup">
                <img src={btb} className="image-of-profile"></img>
                <h3 className="username">{userName}</h3>
                <p className="email">{email}</p>
                <div className="popup-inner">
                    <button className="close-opup-btn" onClick={() => props.setTrigger(false)}>
                        Close
                    </button>
                    {props.children}
                </div>
            </div>
        </div>
    ) : "";
}


export default Profile;