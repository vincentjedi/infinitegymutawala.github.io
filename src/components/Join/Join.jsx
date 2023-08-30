import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Join = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oozjo6c', 'template_zsb1w5v', form.current, 'PXZlA2DJNZlFzI7MF')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className='stroker-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroker-text'>WITH US?</span>
            </div>
        </div>

        <div className="right-j">

            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="text" name="user_email" placeholder="Enter name-phone number" />
                <button className="btn btn-join">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
