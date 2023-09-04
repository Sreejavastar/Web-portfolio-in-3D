import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import me from "../assets/me.jpg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-b from-yellow-500 via-yellow-500 to-indigo-500 p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='flex flex-wrap'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] w-full md:w-2/3'
        >
          I am a final year student pursuing a Bachelor of Technology in Computer Science from the Institute of Engineering and Management, Kolkata. I am a Women Techmakers Ambassador at Google. I obtained a CGPA of 9.8 and ranked 3rd in my department in my freshman year. Courses undertaken by me include- Operating Systems, Data Structures, Analysis Of Algorithms, Artificial Intelligence, Machine Learning, Data Analytics, Computer Networks, and Database Management Systems. For my community work - I was selected as the secretary of the women’s wing, at the International Human Rights Commission, West Bengal Kolkata, India --October 2020 - November 2021. Some of the soft skills that I have mastered are - Leadership, Event Management, Writing, Public Speaking, and Time Management.
        </motion.p>

        {/* Add an image to the right of the <motion.p> */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center mt-4 md:mt1 gap-3 text-center">
          <img
            src={me}
            alt="Overview Image"
            className="w-[250px] h-[250px] object-cover rounded-[20px] mt-[1rem] ml-auto mr-auto" // Center the image horizontally
          />
          {/* Download button */}
          <a
            href="https://drive.google.com/file/d/1uB9lDHQkoDpuhRhW53d1cSkY7nnpbSF1/view?usp=sharing" // Replace with the actual link to your resume PDF
            download="Sreeja_Ghosh_resume.pdf" // Specify the desired filename for the downloaded file
            className="bg-gradient-to-b from-yellow-500 via-yellow-500 to-indigo-500 p-[1px] rounded-[12px] shadow-card bg-gray-800 text-black py-2 px-4 text-sm hover:bg-gray-900 hover:cursor-pointer mt-3rem" // Center the button horizontally
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
