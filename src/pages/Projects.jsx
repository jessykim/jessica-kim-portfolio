import ProjectsList from "../components/ProjectsList";
import { projects } from "../data/projects";

function Projects() {
  return (
    <>
      <ProjectsList projects={projects} />
    </>
  )
}

export default Projects;