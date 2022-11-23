import Image from '../assets/jessi-43.jpg'
// import Image2 from '../assets/jessi-21.jpg'
// import Image3 from '../assets/jessi-53.jpg'
import styles from '../styles/Home.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home(props) {

  return (
    <>
      <div className={styles.home}>
        <img src={Image} alt="downtown img" />
        <div className={styles.links}>
          <div className={styles.message}>
            <h1>Hi, I'm <span>Jessica</span></h1>
            <h2><span>Software Engineer</span></h2>
          </div>
          <Link to='/about'>
            <FontAwesomeIcon icon={props.faAddressCard} />
            <p>About</p>
          </Link>
          <Link to='/projects'>
            <FontAwesomeIcon icon={props.faCode} />
            <p>Projects</p>
          </Link>
          <Link to='/resume'>
            <FontAwesomeIcon icon={props.faBriefcase} />
            <p>Resume</p>
          </Link>
          <Link to='/contact'>
            <FontAwesomeIcon icon={props.faComments} />
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home;