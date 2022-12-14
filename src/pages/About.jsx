import Image from '../assets/jessi-28.jpg'
import styles from '../styles/About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About(props) {
  return (
    <>
      <div className={styles.about}>
        <h1>About</h1>
        <div className={styles.imgText}>
          <img src={Image} alt="downtown img" />
          <div className={styles.aboutText}>
            <p>Hello! I'm Jessica, a full stack software engineer who enjoys creating <span>innovative</span> and <span>effective</span> websites that considers the impact made on the user experience.</p>
            <p>When building projects, I use my background in chemistry to <span>think critically</span> and <span>problem solve</span> while incorporating skills from my experience in counseling/advising to approach needs for improvement with <span>empathy</span> and <span>strategic planning</span>.</p>
            <p>Producing meaningful work that serves a greater purpose is my <span>passion</span>.</p>
            <p>Photo credits:
              <a href="https://www.melshinphotography.com/" target="_blank" rel="noopener noreferrer"> Mel Shin</a>
            </p>
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