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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        I am a full-stack web developer who builds modern, responsive, and
        scalable web applications with a strong focus on user experience and
        clean engineering. My core stack includes React, JavaScript, Node.js,
        Express, MongoDB, and Python. I enjoy turning ideas into polished
        products—from intuitive interfaces and robust APIs to database-driven
        applications and AI-powered features.
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
