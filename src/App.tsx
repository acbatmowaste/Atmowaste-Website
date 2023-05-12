import React from 'react';
import './App.scss';

import { Footer, Header, Philosophy, Contact, Values } from './containers';
import { Navbar, About, Subscribe, IconContainer  } from './components';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ShootingStar } from "./components";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const App = () => {
  return (
    <div className="App gradient__bg">
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
        <About />
        <Subscribe />
        <Contact />
        <div className="mt-32" style={{ height: '100vh' }}>
          <h1 id="values" className="text-5xl gradient__text text-white text-center">Our Values</h1>
          <h2 id="values" className="text-2xl gradient__text text-white text-center pt-4">Our approach to saving the environment is driven by a core set of values that center around marijuana</h2>
          <div className="w-80 h-80 card2 relative rounded-xl top-32 left-64"></div>  
          <div className="w-80 h-80 card2 relative top-16 left-3/4 rounded-xl border-2xl"></div>  

          <div className="relative -top-64" style={{ height: '35vh' }}>
            <Canvas>
              <ambientLight intensity={0.2} />
              <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={2.8} />
              <Values modelPath="./src/assets/co2.glb" />
            </Canvas>
          </div>
          <div className="w-80 h-80 card2 relative -top-64 left-32 rounded-xl border-2xl"></div>  
          {/* <div className="w-80 h-80 card2 relative rounded-xl border-2xl"></div>   */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
