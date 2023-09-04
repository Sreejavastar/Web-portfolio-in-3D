import React from "react";
import linkedinIcon from "../assets/linkedin.png"
import twitterIcon from "../assets/twitter.png"
import mediumIcon from "../assets/medium.png"
import githubIcon from "../assets/gitgit.png"
// import { styles } from "../styles";



const SocialLinks = () => {
  return (
    <div className="bg-black p-4 flex flex-col items-center sm:flex-row sm:justify-center">
      {/* "Connect with me" heading */}
      <div className="text-yellow-300 text-xl mb-4 mr-8 sm:mb-0 sm:mr-4 ml-2">
        Connect with me:
      </div>

      {/* Social Icons */}
      <div className="flex space-x-14 items-center">
        <a
          href="https://www.linkedin.com/in/sreeja-ghosh-a9522a1b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300 flex items-center"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="h-10 w-10" />
        </a>

        <a
          href="https://twitter.com/bonjour_natur"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-300 transition-colors duration-300 flex items-center"
        >
          <img src={twitterIcon} alt="Twitter" className="h-10 w-10" />
        </a>

        <a
          href="https://medium.com/@ghoshsreeja02"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-300 transition-colors duration-300 flex items-center"
        >
          <img src={mediumIcon} alt="Medium" className="h-10 w-10" />
        </a>

        <a
          href="https://github.com/Sreejavastar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-300 transition-colors duration-300 flex items-center"
        >
          <img src={githubIcon} alt="GitHub" className="h-10 w-10" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
