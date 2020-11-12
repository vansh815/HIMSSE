import React from 'react';

import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <span className='container-title'>Contact us:</span>
      <div className='contact-form'>
        <div id='sect1'>
          <span>Contact us and we will get back to you within 24 hours.</span>
          <span>
            Bloomington, IN
          </span>
          <span>
            
          </span>
          <span>
            j.weickert32@gmail.com
          </span>
        </div>

        <div id='sect2'>
          <span>
              Contact
          </span>

          <div className="form-content">
            <input type="text" placeholder="email address" className="input-field"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
            <button className="contact-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
