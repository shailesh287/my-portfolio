import { motion } from 'framer-motion';

import "../../App.css"
import "./contact.css"
const contactIcons = [
  {
    url: './icons/gmail.svg',
    linkTo: 'mailto:shaileshbind28@gmail.com',
    altText: 'gmail',
  },
  {
    url: './icons/linkedin.svg',
    linkTo: 'https://www.linkedin.com/in/shaileshbind23',
    altText: 'linkedin',
  },
];

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

const Contact = () => {
  return (
    <div className='mainContainer'>
      <div className='contact_cont'
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='text_cont'>
          <h1 className='c_heading'>Contact</h1>

          <p className='c_text'>
            I am actively seeking opportunities in frontend development. If you have any openings, I would greatly appreciate it if you could reach out to me.
          </p>

          <motion.div className='icons_cont' variants={container} initial='hidden' animate='visible'>
            {contactIcons.map((icon, i) => (
              <motion.a className='icon_link' href={icon.linkTo} key={i} variants={item}>
                <img src={icon.url} alt={icon.altText} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <div className='flex-[0.5]'>
          <img className='contact_img' src='./images/contact.svg' alt='' />
        </div >
      </div>
    </div>
  );
};
export default Contact;

