import Image from '../assets/IMG_3659.jpg'
import styles from '../styles/About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About(props) {
  return (
    <>
      <div className={styles.about}>
        <h1>About</h1>
        <div className={styles.imgText}>
          <img src={Image} alt="front of the Met" />
          <div className={styles.aboutText}>
            <p>Hello! I'm Jessica, a full stack software engineer who enjoys creating <span>innovative</span> and <span>thoughtful</span> websites that deeply considers the impact made on the user experience.</p>
            <p>When building projects, I use my chemistry background to <span>think critically</span> and <span>problem solve</span> while utilizing my counseling/advising background to communicate the intention of a project with <span>purpose</span> and <span>clarity</span>.</p>
            <p>Producing meaningful work that leaves a lasting impression on others is my <span>passion</span>.</p>
          </div>
        </div>
        <div className={styles.joyList}>
          <h4>What brings me joy...</h4>
          <div className={styles.interests}>
            <div className={styles.left}>
              <div className={styles.interestContainer}>
                <FontAwesomeIcon icon={props.faEarthAmericas} />
                <p>traveling</p>
              </div>
              <div className={styles.interestContainer}>
                <FontAwesomeIcon icon={props.faPalette} />
                <p>creating</p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.interestContainer}>
                <FontAwesomeIcon icon={props.faCookieBite} />
                <p>baking</p>
              </div>
              <div className={styles.interestContainer}>
                <FontAwesomeIcon icon={props.faMusic} />
                <p>singing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;