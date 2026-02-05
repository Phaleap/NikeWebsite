import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Navbar/>
        <div className="container">
          <div className="location">
            <h2>Location</h2>
           <iframe
  title="ACLEDA University Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.050497024949!2d104.8541278!3d11.6282403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109527b5a6c6599:0x947e61c3ff00c21d!2sACLEDA%20University%20of%20Business!5e0!3m2!1sen!2skh!4v1706810000000"
  width="80%"
  height="70%"
  style={{ border: "1px solid black", borderRadius: "8px" }}
  loading="lazy"
  allowFullScreen
></iframe>

          </div>
          <div className="contact">
            <h2>Send Message</h2>
            <form className="contact-form">

  <div className="two-col">
    <div className="field">
      <label>First name</label>
      <input type="text" />
    </div>

    <div className="field">
      <label>Last name</label>
      <input type="text" />
    </div>
  </div>

  <div className="two-col">
    <div className="field">
      <label>Email address</label>
      <input type="email" />
    </div>

    <div className="field">
      <label>Phone</label>
      <input type="tel" />
    </div>
  </div>

  <div className="two-col">
    <div className="field">
      <label>Country</label>
      <input type="text" />
    </div>

    <div className="field">
      <label>Company name</label>
      <input type="text" />
    </div>
  </div>

  <div className="field">
    <label>Write your message here</label>
    <textarea rows="4"></textarea>
  </div>

  <div className="form-bottom">
    <button type="submit">Send message ↗</button>

    <label className="checkbox">
      <input type="checkbox" />
      I agree to the Privacy Policy.
    </label>
  </div>

</form>

          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact
