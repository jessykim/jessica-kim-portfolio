import ProjectPreview from "./ProjectPreview";
import styles from '../styles/ProjectsList.module.css'


function ProjectsList({ projects }) {
  return (
    <>
      <div className={styles.projects}>
        <h1>Projects</h1>
        <div className={styles.projectList}>
          {projects.map((project) => 
            <div key={project.title}>
              <ProjectPreview project={project} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectsList;