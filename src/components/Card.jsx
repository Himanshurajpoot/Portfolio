import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../themeProvider";




const Card = (props) => {
  let theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}

      className={`overflow-clip max-sm:w-80 w-96 flex flex-col bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700  card `}
    >
      <a href={props.live} target="_blank">
        <iframe
          title={props.title}
          width='100%'
          height='160'
          src={props.image}
          frameBorder='0'
          webkitallowfullscreen='true'
          mozallowfullscreen='true'
          allowFullScreen
        ></iframe>
      </a>
      <div class={`${darkMode ? "" : "bg-black"} p-5 flex flex-col flex-1`}>
        <a href={props.live} target="_blank" className="flex-1">
          <h5 class={`${!darkMode && "text-white"} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>
            {props.name}
          </h5>
          <h4 >{props.desc}</h4>
          <ul className='flex flex-wrap py-4'>
            {props.TechStack.map((tech) => {
              return (
                <li key={tech} className='tech'>
                  {tech}
                </li>
              );
            })}
          </ul>

        </a>
        <div className="flex justify-between">
          <button style={{ "box-shadow": "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} className={`${!darkMode && "border-white border-2 bg-slate-800"} px-3 py rounded-md`} ><a href={props.live} target="_blank">Go To Project</a></button>
          <button style={{ "box-shadow": "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} className={`${!darkMode && "border-white border-2 bg-slate-800"} px-3 py rounded-md`}><a href={props.repo} target="_blank">Repo</a></button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
