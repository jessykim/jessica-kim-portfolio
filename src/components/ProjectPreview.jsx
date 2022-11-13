import { hyphenateWords } from "../utilities/hyphenateWords";
// import { Link } from "react-router-dom";
import styles from '../styles/ProjectPreview.module.css'
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
              <div className={styles.image__tech}>
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
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

export default ProjectPreview;