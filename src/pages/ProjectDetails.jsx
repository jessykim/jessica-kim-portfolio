import { findProject } from "../utilities/findProject";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  let { projectDetails } = useParams()

  const project = findProject(projectDetails)[0]

  return ( 
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.img} alt="project-img" />

      <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer">
        <button>GitHub Repository</button>
      </a>

      <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer">
        <button>Deployed Link</button>
      </a>
    </>
  );
}

export default ProjectDetails;