import { React, useRef } from 'react'
import styles from '../styles/Contact.module.css'
import LinkedIn from '../assets/linkedin-icon.png'
import GitHub from '../assets/github-icon.png'
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
      <div className={styles.contact}>
        <div className={styles.contactContainer}>
          <div className={styles.header}>
            <h1>Contact</h1>
            <p>Please feel free to contact me if you have any questions, comments or would like to collaborate! I hope to hear from you!</p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            {/* <label>Name</label> */}
            <input type="text" name="user_name" placeholder='Name' required />
            {/* <label>Email</label> */}
            <input type="email" name="user_email" placeholder='Email' required />
            {/* <label>Message</label> */}
            <textarea name="message" placeholder='Message' required />
            <input type="submit" value="Send" id={styles.send} />
          </form>
          <div className={styles.contactLinks}>
            <a href="https://www.linkedin.com/in/jessicaykim/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn icon" /></a>
            <a href="https://github.com/jessykim" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub icon" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;