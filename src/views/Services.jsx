import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { techStack } from "../constants";
// import { motion } from "framer-motion";


const Services = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
    
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
      style={theme.state.darkMode ?{backgroundImage: `url('https://i.pinimg.com/originals/e2/11/02/e21102689d4dcd342bad041d8bf79dc7.gif')`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}:
      {backgroundImage: `url('https://i.pinimg.com/originals/b0/b1/f5/b0b1f5d33de00e3c21ad29bbba25e31b.gif')`}}>
       
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="services"
      >
        <div className="">
        <h2
          className={
            
               "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
         Technologies and Tools
        </h2>
        <motion.div>
            </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-center ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 max-sm:flex-auto px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
