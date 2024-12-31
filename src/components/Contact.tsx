import React from 'react'
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid md:grid-cols-2'>
            <div className='contact-space'>
                <h2 className='contact-head' data-aos="zoom-in-up">
                   Get in touch
                </h2>
                <p className='contact-text' data-aos="zoom-in-up">
                    Contact me by sending message.
                </p>

                <div className='contact-flex' data-aos="zoom-in-up">
                     <IoMdMail size={30} /> gmugsk@gmail.com                
                </div>
           
               <div className='contact-flex' data-aos="zoom-in-up">
                     <BsFillTelephoneFill size={30} />  0333 2663014     
              </div>
            </div>

            <div className='contact-space'>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                     className='input-field'
                     id='name' />
                </div>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                     className='input-field'
                     id='email' />
                </div>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className='textarea-field'
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='button' data-aos="zoom-in-up">
                    SEND
                </button>
            </div>
        </div>

    </div>
  );
};

export default Contact