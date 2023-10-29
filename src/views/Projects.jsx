import React, { useContext } from "react";
import Card from "../components/Card";
import {projects} from "../constants"
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (

    <div id="projects"
      className={darkMode ? "bg-white text-black " : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div  className="grid-flow-col-dense scroll-smooth m-auto gap-x-8 grid overflow-scroll">
          {projects.map((data,index)=><Card {...data} key={index} />)}
        </div>

      </div>
    </div>
  );
};

export default Projects;
