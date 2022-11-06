import Image from '../assets/headshot.jpg'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.message}>
          <h1>Hi, I'm Jessica</h1>
          <h2>Software Engineer</h2>
        </div>
        <img src={Image} alt="headshot" />
      </div>
    </>
  )
}

export default Home;