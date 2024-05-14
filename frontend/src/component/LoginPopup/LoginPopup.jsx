import "./LoginPopup.css";
import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({etShowLogin}) => {
    const[currState,SetcurrState] = useState("signup")
  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>} src={assets.cross_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LoginPopup
