import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { BsChevronDown } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import "../../App.css"
import "./project.css"

const container = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  transition: 0.5,
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const ProjectList = ({ projects }) => {
  const { pathname } = useLocation();

  return (
    <div className='mainContainer'>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='sectionTitle'>Projects</h1>
      </motion.div>
      <motion.section variants={container} initial='hidden' animate='visible'>
        <div className='project_cont'>
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {projects.length === 3 && pathname === '/' && (
          <Link className='transparent_link' to='/projects'>
            See more <BsChevronDown />
          </Link>
        )}
      </motion.section>
    </div>
  );
};

export default ProjectList;


