import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import styles from '../styles/ProjectPreview.module.css'

function ProjectPreview({project}) {
  const newUrl = hyphenateWords(project.title)

  return (
    <>
      <a href={`/projects/${newUrl}`}>
        <div className={styles.projectContainer}>
          <div>   
            <img 
              src={project.image} 
              alt={project.title}
              className={styles.img}
            />
          </div>
          <h3>{project.title}</h3>
          {/* <section> */}
            {/* <Link to={`/projects/${newUrl}`}>
              <button>Learn more</button>
            </Link> */}
          {/* </section> */}
        </div>
      </a>
    </>
  )
}

export default ProjectPreview;