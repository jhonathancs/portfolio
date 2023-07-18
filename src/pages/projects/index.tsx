import allProjects from "../../data/allProjects"
import ProjectIterface from "./projectCart"
import './projectCart.css'

function Projects () {
    return(
    <div className="grid-container">
        {allProjects.map((project) => (
        <ProjectIterface key={project.id} project={project} />
    ))}
    </div>
    )
}

export default Projects