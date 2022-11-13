import { findProject } from "../utilities/findProject";
import { useParams } from "react-router-dom";
import styles from '../styles/ProjectDetails.module.css'

const ProjectDetails = () => {
  let { projectDetails } = useParams()

  const project = findProject(projectDetails)[0]

  return ( 
    <>
      <div className={styles.projectDetails}>
        <h1>{project.title}</h1>
        <div className={styles.info}>

          <p>{project.description}</p>
          <div className={styles.links}>

            <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer">
              <button>GitHub Repository</button>
            </a>

            <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer">
              <button>Deployed Link</button>
            </a>
          </div>
        </div>

        <div className={styles.images}>
          <img src={project.laptopImage} alt="project-img" className={styles.laptop} />
          <div className={styles.mobile}>
            <img src={project.mobileImage_1} alt="project-img" />
            <img src={project.mobileImage_2} alt="project-img" />
          </div>
        </div>

      </div>
    </>
  );
}

export default ProjectDetails;