import { projects } from "../data/projects";

const ProjectDetails = () => {
  return ( 
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src={projects[0].img} alt="project-img" />

      <a href={projects[0].repositoryLink} target="_blank" rel="noopener noreferrer">
        <button>GitHub Repository</button>
      </a>

      <a href={projects[0].deploymentLink} target="_blank" rel="noopener noreferrer">
        <button>Deployed Link</button>
      </a>
    </>
  );
}

export default ProjectDetails;