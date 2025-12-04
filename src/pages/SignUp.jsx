import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { showDisclaimer } from "../utils/PopUp";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  const handleSignUp = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      showDisclaimer("Please fill in all fields!");
      return;
    }
    if (!isValidEmail(email)) {
          showDisclaimer("Please enter a valid email address (example: name@gmail.com)");
          return;
        }

    // SUCCESS → GO TO HOME PAGE
    navigate("/");
  };

  return (
    <div>
      <div className="LoginForm">

        <div className="imageContianer">
          <img 
            src="https://media1.popsugar-assets.com/files/thumbor/Ez6lL-szuB4YkW0E_f1MrcHSVN0=/fit-in/792x1188/filters:format_auto():upscale()/2020/07/01/986/n/1922564/8c44d3c5eefe1cf1_GettyImages-1216059086.jpg" 
            alt="" 
          />
        </div>

        <div className="formContainer">

          <div className="firstForm">
            <h1>NIKE</h1>
            <Link to="/">return to Home</Link>
          </div>

          <div className="secondForm">
            <h1>Sign Up</h1>
            <p>
              By creating your NIKE Account you can track orders, manage addresses, 
              and unlock more features.
            </p>

            <input 
              type="text" 
              placeholder="ENTER YOUR FULL NAME"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <input 
              type="text" 
              placeholder="ENTER YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="password" 
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* SIGN UP BUTTON */}
            <button className="Details" onClick={handleSignUp}>
              <span className="btn-text" before="Sign Up">Sign Up</span>
            </button>
          </div>

          <div className="thirdForm">
            <p>Have an Account Already?</p>
            <Link to="/account">Log In</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
