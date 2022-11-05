import { React, useRef } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_USER_ID
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    )

    e.target.reset()
  }

  return (
    <>
      <h1>Please feel free to contact me if you have any questions, comments or would like to collaborate!</h1>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/jessicaykim/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/jessykim" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </>
  )
}

export default Contact;