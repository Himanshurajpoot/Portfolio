import React, { useContext } from 'react';
import heroBg from '../assets/webdev.svg';
import Typewriter from 'typewriter-effect';
import { contactLinks } from '../constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';
import cloud from '../assets/cloudBg.png';
import cloudDark from '../assets/cloudDark.png';
import resueme from '../assets/Resume.pdf';


const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: 'cover' }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: 'cover' }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-wrap-reverse items-center justify-center md:justify-between max-h-screen h-screen"
          id="/"
        >
          <div className="flex flex-col justify-center  lg:text-left flex-1">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 max-sm:text-3xl  md:text-5xl">
              <motion.span
                className={darkMode ? 'mb-6 block text-black' : ' text-white'}
              >
                Hi, I am <br /> Himanshu Rajput
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                <Typewriter
                  options={{
                    strings: ['Front End Developer', 'Mern Stack Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    pauseFor: 1000
                  }}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? 'mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
                  : 'mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
              }
            >
              I am a Front-End / Full-Stack Developer.
            </p>
            <div className="flex md:justify-start">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                    <img alt="" src={el.url} />
                  
                  <p className="text-md mt-2 hover:hidden">{el.name}</p>
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href={resueme}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={'visible'}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="md:w-3/6 sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
