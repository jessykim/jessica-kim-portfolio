import Image from '../assets/IMG_3659.jpg'

function About() {
  return (
    <>
      <h1>About</h1>
      <img src={Image} alt="front of the Met" />
      <p>Hello! I'm Jessica, a full stack software engineer who enjoys creating innovative and thoughtful websites that deeply considers the impact made on the user experience.</p>
      <p>When building projects, I use my chemistry background to think critically and problem solve while utilizing my counseling/advising background to communicate the intention of a project with purpose and clarity.</p>
      <p>Producing meaningful work that leaves a lasting impression on others is my passion.</p>
      <h2>What brings me joy...</h2>
      <ul>
        <li>traveling</li>
        <li>drawing</li>
        <li>baking</li>
        <li>singing</li>
      </ul>
    </>
  )
}

export default About;