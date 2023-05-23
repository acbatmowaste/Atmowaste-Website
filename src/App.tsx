import React from 'react';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { Footer, Header, Philosophy, Contact, Values } from './containers';
import { Navbar, About, Subscribe, IconContainer  } from './components';
import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { ShootingStar } from "./components";
import { Stars } from "@react-three/drei";
// import { EffectComposer, Bloom } from '@react-three/postprocessing';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App gradient__bg overflow-hidden">
        <div className="">
          <Navbar />
          <Canvas id="stars" className="absolute">
            <Stars
              radius={300}
              depth={60}
              count={20000}
              factor={7}
              saturation={0}
              fade={true}
            />
          </Canvas>
          <Header />
          <Link to="#about" smooth>
            <About />
          </Link>
          <motion.div className="" style={{ height: '35vh' }}>
            <Canvas>
              <ambientLight intensity={0.2} />
              <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={2.8} />
              <Values modelPath="./src/assets/co2.glb" />
            </Canvas>
          </motion.div>
          <Link to="#philosophy" smooth>
            <Philosophy />
          </Link>
          <Contact />
          {/* <div className="mt-32 mb-96" style={{ height: '100vh' }}>
            <motion.h1 id="values" className="text-5xl gradient__text text-white text-center">Our Values</motion.h1>
            <motion.h2 id="" className="text-xl text text-center pt-4">Our approach to saving the environment is driven by a core set of values that center around marijuana</motion.h2>
            <div className="w-80 h-80 card2 relative rounded-xl top-32 left-64">
              <div className="flex flex-col p-8">
                <h1 className="text-white text-2xl pb-2">Innovation</h1>
                <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
                <div className="text-lg text">We embrace emerging technologies and are committed to exploring new and innovative solutions to global atmospheric waste management challenges.</div>
              </div>
            </div>  
            <motion.div className="w-80 h-80 card2 relative top-[20.5%] left-[70%] rounded-xl border-2xl"></motion.div>  

            <motion.div className="relative -top-64" style={{ height: '35vh' }}>
              <Canvas>
                <ambientLight intensity={0.2} />
                <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={2.8} />
                <Values modelPath="./src/assets/co2.glb" />
              </Canvas>
            </motion.div>
            <motion.div className="w-80 h-80 card2 relative -top-1/2 left-32 rounded-xl border-2xl"></motion.div>  
            <motion.div className="w-80 h-80 card2 relative left-[60%] -top-[127%] rounded-xl border-2xl"></motion.div>  

            <div className="w-80 h-80 card2 relative rounded-xl border-2xl"></div> 
          </div> */}
          <Link to="#subscribe" smooth>
            <Subscribe />
          </Link>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
