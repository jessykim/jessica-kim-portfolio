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
        <p>{project.description}</p>
        <img src={project.detailImage} alt="project-img" />

        <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer">
          <button>GitHub Repository</button>
        </a>

        <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer">
          <button>Deployed Link</button>
        </a>
      </div>
    </>
  );
}

export default ProjectDetails;