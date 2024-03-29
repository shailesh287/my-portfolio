import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import "../../App.css"
import "./skills.css"
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

const Skills = ({ skills }) => {
  return (
    <div className='mainContainer'>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='sectionTitle'>Skills</h1 >
      </motion.div>
      <motion.section variants={container} initial='hidden' animate='visible'>
        <div className='skills_container'>
          {skills.map((skill) => (
            <motion.div key={skill.title} variants={item}>
              <SkillCard title={skill.title} icon={skill.icon} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
export default Skills;


