import React from 'react';
import './App.scss';

import { Footer, Header, Philosophy, Contact } from './containers';
import { Navbar, About, Subscribe } from './components';
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
          {/* <ShootingStar />
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} />
          </EffectComposer> */}
        </Canvas>
        <Header />
        <About />
        <Contact />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default App;
