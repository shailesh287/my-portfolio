import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import "../../App.css"
import "./project.css"

const ProjectCard = ({ project }) => {
  return (
    <article className='card'>
      <img className='card-img' src={project.img} alt={project.title} loading='lazy' />
      <div className='card-info'>
        <h2 className='card-title'>{project.title}</h2>
        <small className='card-desc'>{project.desc}</small>

        <div className='card-links'>
          {project.github && (
            <a className='normalLink card-link' href={project.github} target='_blank' rel='noreferrer'>
              Source <FaGithub />
            </a>
          )}
          <a
            href={project.live}
            className='normalLink card-link primary'
            target='_blank'
            rel='noreferrer'
          >
            Live <HiOutlineExternalLink />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

