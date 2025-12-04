import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { showDisclaimer } from '../utils/PopUp';

const ForgetPW = () => {

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // ✔ Email validation function
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      showDisclaimer("Please enter your email!");
      return;
    }

    if (!isValidEmail(email)) {
      showDisclaimer("Please enter a valid email address (example: name@gmail.com)");
      return;
    }

    // SUCCESS → Go back to login
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
            <h1>FORGET PASSWORD</h1>

            <input 
              type="text" 
              placeholder="ENTER YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="Details" onClick={handleSubmit}>
              <span className="btn-text" before="Submit">Submit</span>
            </button>
          </div>

          <div className="thirdForm">
            <p>Don’t Have an Account Already?</p>
            <Link to="/signUp">Sign Up</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ForgetPW;
