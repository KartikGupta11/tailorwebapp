import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

import logo from "./LOGO.png";
const LogOtp = () => {
  return (
    <div className="login">
      <div className="card  card_det">
        <div className="card-body">
          <img src={logo} alt="logo" className="logo" />
          <h5 className="card-title">Welcome to Silaan!</h5>

          <div className="inp">
            <div className="first">
              <select
                className="form-select form-select-sm country_num"
                aria-label=".form-select-sm example"
              >
                <option selected>+91</option>
                <option value="1">+123</option>
                <option value="2">+235</option>
                <option value="3">+154</option>
              </select>
            </div>

            <div className="second">
              <input type="text" placeholder="Enter OTP" />
            </div>
          </div>
          <div className="infor">
            <p>Didn't recieve code</p>
            <p>Resend in 1:30</p>
          </div>
          <br />
                  <Link to='/dashboard'>
            <button className="btn_getotp">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogOtp;
