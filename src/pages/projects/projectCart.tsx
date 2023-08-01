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
      <h2 className='title'>{name}</h2>
      <img src={img} alt={name} />
      <p>{text}</p>
      <p>Technologies: {technologies}</p>
      <p>
        GitHub: <a href={linkGitHub} target="_blank" rel="noopener noreferrer">{linkGitHub}</a>
      </p>
      <p>
        Page: <a href={linkPage} target="_blank" rel="noopener noreferrer">{linkPage}</a>
      </p>
    </div>
  );
}

export default ProjectInterface;
