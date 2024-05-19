import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../assets/styles/notify.scss'
import { EmailAPIKey, NotifyKey } from '../data/EmailKey'
import { toast } from 'react-toastify'

const Notify = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(NotifyKey.service, NotifyKey.template, form.current, EmailAPIKey.publicKey)
    .then((result) => {
      console.log(result.text);
      toast.success("Mail sent succesfully");
    }, (error) => {
      console.log(error.text);
    });
  };
  
  return (
    <form ref={form} onSubmit={handleSubmit}>
        <input type="email" name="from_email" className='input-email' placeholder='Enter your email'/>
        <button className='input-submit'>Submit</button>
    </form>
  )
}

export default Notify