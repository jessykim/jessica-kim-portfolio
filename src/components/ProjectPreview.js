import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

function ProjectPreview({project}) {
  const newUrl = hyphenateWords(project.title)

  return (
    <>
      <div>
      <img 
          src={project.image} 
          alt={project.title}
      />

      <section>
        <h3>
            {project.title}
        </h3>
        <Link to={`/projects/${newUrl}`}>
          <button>
              Learn more
          </button>
        </Link>
      </section>
    </div>
    </>
  )
}

export default ProjectPreview;