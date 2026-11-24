import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] text-justify"
      >
        I'm an independent full-stack developer focused on building responsive web applications and practical AI-powered tools.
        I work with React, JavaScript, Node.js, Express, MongoDB, and Python. Through independent projects such as an AI Resume
        Analyzer and an AI Pizza OrderBot, I've gained practical experience building user interfaces, connecting backend services,
        working with databases, and integrating AI APIs.
        I enjoy solving real-world problems through technology and continuously improving my development skills. I'm open to junior
        developer opportunities, internships, and freelance projects where I can contribute and grow.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map(
          (
            service,
            index, //All icons and there names coming from services.
          ) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ),
        )}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
