import React from "react";
import './animatedLetters.scss';

interface AnimatedLetterProps {
  letterClass: string;
  strArray: string[];
  idx: number;
}

const AnimatedLetters = ({ letterClass, strArray, idx }: AnimatedLetterProps) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <h1 id="heading" key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </h1>
      ))}
    </span>
  );
};

export default AnimatedLetters;
