import { findProject } from "../utilities/findProject";
import { useParams } from "react-router-dom";
import styles from '../styles/ProjectDetails.module.css'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/js.png'
import Bootstrap from '../assets/bootstrap.png'
import MongoDB from '../assets/mongodb.png'
import Node from '../assets/node.png'
import React from '../assets/react.png'
import Django from '../assets/django.png'
import PostgreSQL from '../assets/postgresql.png'
import Python from '../assets/python.png'

const ProjectDetails = () => {
  let { projectDetails } = useParams()

  const project = findProject(projectDetails)[0]

  return ( 
    <>
      <div className={styles.projectDetails}>
        <h1>{project.title}</h1>
        <div className={styles.info}>

          <p>{project.description}</p>
          <div className={styles.tech}>
            {
              project.technologies.map(function(tech, idx) {
                if (tech === 'HTML') {
                  return <img src={HTML} alt="html icon" key={idx} />
                } else if (tech === 'CSS') {
                  return <img src={CSS} alt="css icon" key={idx} />
                } else if (tech === 'JavaScript') {
                  return <img src={JavaScript} alt="javascript icon" key={idx} />
                } else if (tech === 'Bootstrap') {
                  return <img src={Bootstrap} alt="bootstrap icon" key={idx} />
                } else if (tech === 'MongoDB') {
                  return <img src={MongoDB} alt="mongodb icon" key={idx} />
                }  else if (tech === 'Node') {
                  return <img src={Node} alt="node icon" key={idx} />
                } else if (tech === 'React') {
                  return <img src={React} alt="react icon" key={idx} />
                } else if (tech === 'Django') {
                  return <img src={Django} alt="django icon" key={idx} />
                } else if (tech === 'PostgreSQL') {
                  return <img src={PostgreSQL} alt="postgresql icon" key={idx} />
                } else {
                  return <img src={Python} alt="python icon" key={idx} />
                } 
              })
            }
          </div>
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