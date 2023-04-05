import React from "react";
import './animatedLetters.scss';

interface AnimatedLetterProps {
  letterClass: string;
  strArray: string[];
  idx: number;
  id: string;
}

// bg-gradient-to-r from-sky-500 to-[#6936F5]

const AnimatedLetters = ({ letterClass, strArray, idx, id }: AnimatedLetterProps) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <h1 id={id} key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </h1>
      ))}
    </span>
  );
};

export default AnimatedLetters;
