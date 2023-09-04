import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
 
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#000000",
        color: "#000000",
        // border: "30px"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #a37ef9" }}
      date={experience.date}
      dateClassName="text-indigo-100"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full '>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
          
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-yellow-300 text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 '>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-indigo-200 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const gradient = "linear-gradient(to bottom, mediumSlateBlue, yellow, mediumSlateBlue)";
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My achievements
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline  lineColor={gradient}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
          
        </VerticalTimeline>
        
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
