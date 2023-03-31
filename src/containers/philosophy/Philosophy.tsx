import React from 'react';
import './philosophy.scss';
import mountain from '../../assets/mountain.png';

const Philosophy = () => {
  return (
    <div className="-translate-y-9 relative flex border rounded-xl w-[65vw] mx-[16vw]">
      <div className="">
        <img className="basis-0 grow-1 shrink-1 border rounded-xl" src={mountain}></img>
      </div>
      <div className="animated backInLeft delay-2s">
        <h1 className="text-white">Our Philosophy</h1>
        <p className="z-50 bg-white basis-0 grow-1 shrink-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti quas
          quisquam culpa magnam cumque saepe quia nemo aperiam asperiores nostrum ullam in ea natus
          quis, explicabo accusamus! Adipisci, nostrum.
        </p>
      </div>
    </div>
  );
};

export default Philosophy;
