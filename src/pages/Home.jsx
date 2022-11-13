import Image from '../assets/headshot.jpg'
import styles from '../styles/Home.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home(props) {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.message}>
          <h1>Hi, I'm Jessica</h1>
          <h2>Software Engineer</h2>
        </div>
        <img src={Image} alt="headshot" />
        <div className={styles.links}>
          <Link to='/about'>
            <FontAwesomeIcon icon={props.faAddressCard} />
            <h3>About</h3>
          </Link>
          <Link to='/projects'>
            <FontAwesomeIcon icon={props.faCode} />
            <h3>Projects</h3>
          </Link>
          <Link to='/resume'>
            <FontAwesomeIcon icon={props.faBriefcase} />
            <h3>Resume</h3>
          </Link>
          <Link to='/contact'>
            <FontAwesomeIcon icon={props.faComments} />
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home;