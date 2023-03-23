import React from 'react';
import './App.scss';

import { Header, Philosophy } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Philosophy />
    </div>
  );
};

export default App;
