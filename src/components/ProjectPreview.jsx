import { hyphenateWords } from "../utilities/hyphenateWords";
// import { Link } from "react-router-dom";
import styles from '../styles/ProjectPreview.module.css'

function ProjectPreview({project}) {
  const newUrl = hyphenateWords(project.title)

  return (
    <>
      <a href={`/projects/${newUrl}`}>
        <div className={styles.projectContainer}>
          <div className={styles.imageContainer}>   
            <img 
              src={project.image} 
              alt={project.title}
              className={styles.img}
            />
            <div className={styles.image__overlay}>
              <div className={styles.image__title}>{project.title}</div>
              <div className={styles.image__tech}>hello</div>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

export default ProjectPreview;