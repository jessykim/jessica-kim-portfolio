import ProjectPreview from "./ProjectPreview";

function ProjectsList({ projects }) {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => 
          <li key={project.title}>
            <ProjectPreview project={project} />
          </li>
        )}
      </ul>
    </>
  )
}

export default ProjectsList;