import React from 'react';

// import SubHeading from '../SubHeading/SubHeading';
import './subscribe.scss';
import { FaMicroscope } from 'react-icons/fa';
import { motion } from 'framer-motion';


export const Subscribe = () => (
  <motion.div className="app__newsletter rounded m-auto flex mt-12 justify-start items-center h-[12vh]"
    initial={{ opacity: 0, scale: 0.1 }}
    whileInView={{ opacity: 1, scale: 1}}
    transition={{ ease: 'easeInOut', duration: 0.5}}>
    <FaMicroscope size={64} />
    <div className="app__newsletter-heading w-[40%]">
      {/* <SubHeading title="Newsletter" /> */}
      <h1 className="headtext__cormorant text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold">Subscribe To Our Newsletter</h1>
      <p className="p__opensans text-md sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-xl">And never miss the latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex flex__center">
      <input type="email" className="text-black bg-white" placeholder="Email address" />
      <button type="button" className="custom__button text-white bg-black rounded py-2 px-4">Subscribe</button>
    </div>
  </motion.div>
);

export default Subscribe;