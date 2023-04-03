import React from 'react';
import './philosophy.scss';
import mountain from '../../assets/mountain.png';

const Philosophy = () => {
  return (
    <div className=" flex gap-2 rounded-xl w-[50%] mx-auto]">
      <div className="">
        <img className="basis-0 grow-1 shrink-1 border rounded-xl" src={mountain}></img>
      </div>
      <div className="animated backInLeft delay-2s">
        <h1 className="text-white">Our Philosophy</h1>
        <p className="z-50 bg-white basis-0 grow-1 shrink-1">
          <ul>
            <li>Rocks are some of the planet's most vital carbon sinks. Over geological timescales, CO2 from the atmosphere binds to minerals and permanently turns to rock – a process known as carbon mineralization.
            </li>
            <li>Limestone is one of the most abundant rocks on the planet, capturing massive amounts of CO2 from the air over years. Heirloom’s technology accelerates this natural process to just days.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Philosophy;
