import React from 'react';
import './App.scss';

import { Header, Philosophy } from './containers';
import { Navbar } from './components';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ShootingStar } from "./components";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
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
          {/* <ShootingStar />
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} />
          </EffectComposer> */}
        </Canvas>
        <Header />
      </div>
      <div className="h-[100vh] w-[100%] bg-gradient-to-r from-sky-500 to-[#6936F5] relative top-[-45px]">
        <div className="custom-shape-divider-top-1680224802">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
        </div>
        {/* <Philosophy /> */}
      </div>
    </div>
  );
};

export default App;
