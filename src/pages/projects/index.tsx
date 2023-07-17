import allProjects from "../../data/allProjects"
import ProjectIterface from "./projectCart"

function Projects () {
    return(
    <div>
        {allProjects.map((project) => (
        <ProjectIterface key={project.id} project={project} />
    ))}
    </div>
    )
}

export default Projects