import React from 'react'
import "./contact.css";
import {MdEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {

const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_0jjuwrc', 'template_dk1gq2j', form.current, '2XTBzjrdceOEo4aMW')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
        <MdEmail className='contact__option-icon' />
        <h4>Email</h4>
        <h5>fjoralbakaranxha@gmail.com</h5>
        <a href='mailto:fjoralbakaranxha@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
        </article>

        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon' />
        <h4>WhatsApp</h4>
        <h5>+355693105397</h5>
        <a href="https://api.whatsapp.com/send?phone=+355693105397" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message'  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
