function Contact() {
  return (
    <>
      <h1>Please feel free to contact me if you have any questions, comments or would like to collaborate!</h1>
      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <input type="text" />
        </div>
        <button>Send</button>
      </form>
      <a href="https://www.linkedin.com/in/jessicaykim/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/jessykim" target="_blank" rel="noopener noreferrer">GitHub</a>
    </>
  )
}

export default Contact;