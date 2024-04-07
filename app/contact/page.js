"use client";
import {useRef} from 'react';
import Navbar from '../Components/Navbar'
import emailjs from '@emailjs/browser';
import './page.scss';

const page = () => {
    const form =useRef();
      const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_e3l0fqh', 'template_s9a3wlh', form.current, '7n4_f2nJIMWQW_i7H')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              }
              );
              e.target.reset()
            }
  return (
    <div>
        <Navbar/>
      <section>
      <h5>Contact  Me</h5>
        <div className='container'>
            <form ref={form} onSubmit={sendEmail} className='form'>
              <label>NAME</label>
               <input type='text'placeholder='Full Name' name='user_name' required/>
               <label>EMAIL</label>
               <input type='email'placeholder='Email' name='user_email' required/>
               <label>SUBJECT</label>
               <input type='text'placeholder='Subject' name='Subject' required/>
               <label>QUERY</label>
               <textarea name='message'cols="30" rows="10" ></textarea>
               <button>Send message</button>
            </form>
        </div>
      </section>
    </div> 
  )
  
  }
export default page
