import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
             Myself Himanshu Rajput. <br />
I am a MERN stack developer. <br />
<span></span><br />
I learnd Full Stack Web Development from AltCampus.<br />
I am comfortable with both Frontend and Backend.<br />
<span></span><br />
Backend : Learned Node.js, MongoDB, Express.js. Continued with learning Authentication, Authorization, OAuth and JWT, Socket.io and much more.<br />
<span></span><br />
Frontend : Learned React, React Router, React Router Dom, Redux. Continued with Functional Components, Class Components, State, Props, Context API, HOC, Render Props , Hooks and much more.
            </p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
