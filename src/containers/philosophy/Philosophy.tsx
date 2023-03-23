import React from 'react';
import './philosophy.css';
import mountain from '../../assets/mountain.png';

const Philosophy = () => {
  return (
    <div className="-translate-y-9 flex border solid rounded-xl w-[65vw] mx-[16vw]">
      <img className="basis-0 grow-1 shrink-1" src={mountain}></img>
      <div>
        <h1>Our Philosophy</h1>
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
