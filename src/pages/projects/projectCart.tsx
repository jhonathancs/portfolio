import './projectCart.css'

type Project = {
  id: number;
  name: string;
  img: string;
  linkGitHub: string;
  linkPage: string;
  technologies: string;
  text: string;
}

interface ProjectProps {
  project: Project;
}

function ProjectInterface({ project }: ProjectProps) {
  const {name, img, technologies, text, linkGitHub, linkPage} = project
  return (
    <div className="project-item">
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{text}</p>
      <p>Technologies: {technologies}</p>
      <p>
        GitHub: <a href={linkGitHub}>{linkGitHub}</a>
      </p>
      <p>
        Page: <a href={linkPage}>{linkPage}</a>
      </p>
    </div>
  );
}

export default ProjectInterface;
