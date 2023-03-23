import React from 'react';
import './App.scss';

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components";
import { Header, Philosophy } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      {/* <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas> */}
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Philosophy />
    </div>
  );
};

export default App;
