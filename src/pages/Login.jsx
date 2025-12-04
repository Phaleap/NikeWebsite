import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { showDisclaimer } from "../utils/PopUp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      showDisclaimer("Please enter email and password!");
      return;
    }
    if (!isValidEmail(email)) {
          showDisclaimer("Please enter a valid email address (example: name@gmail.com)");
          return;
        }

    // IF SUCCESS → GO TO HOME PAGE
    navigate("/");
  };

  return (
    <div>
      <div className="LoginForm">
        <div className="imageContianer">
          <img src="https://jdsportsblog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2024/09/Nike_JD_CPH26572-560x840.jpg" alt="" />
        </div>

        <div className="formContainer">
          
          <div className="firstForm">
            <h1>NIKE</h1>
            <Link to="/">return to Home</Link>
          </div>

          <div className="secondForm">
            <h1>Login</h1>
            <p>By accessing your NIKE Account you can track and manage your orders...</p>

            <input 
              type="text" 
              placeholder="ENTER YOUR EMAIL" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input 
              type="password" 
              placeholder="PASSWORD" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Link to="/forgetPW">Forget password?</Link>

            {/* LOGIN BUTTON */}
            <button className="Details" onClick={handleLogin}>
              <span className="btn-text" before="Log in">Log in</span>
            </button>
            <br />
            <div className="linksToOther">
              <FcGoogle size={25} />
              <FaFacebook size={25} />
              <FaTiktok size={25} />
              <FaInstagram size={25} />
            </div>
          </div>

          <div className="thirdForm">
            <p>Don’t Have an Account Already?</p>
            <Link to="/signUp">Sign Up</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;
