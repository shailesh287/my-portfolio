import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./intro.css";
import "../../App.css";
import Particle from "../Particle";
import resume from "../../assets/Shailesh-Resume.pdf";

const Intro = () => {
  return (
    <div>
      <Particle />
      <motion.div
        className="mainContainer h-[650px]  md:h-[460px]"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="description_box">
          <div className="self_img"></div>
          <div className="description">
            <h1 className="text-[#fff]">Shailesh Bind</h1>
            <p className="title">Frontend Developer</p>
            <p className="bio">
              Enthusiastic about Innovation and Technology | Committed Lifelong
              Learner
            </p>
            <a className="highlightedLink" href={resume} target="_blank">
              Download Resume <FiDownload />
            </a>
            <div className="icon_wrapper">
              <a
                className="icon_link"
                href="https://github.com/shailesh287"
                target="_blank"
              >
                <BsGithub />
              </a>
              <a
                className="icon_link"
                href="https://www.linkedin.com/in/shaileshbind23"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
