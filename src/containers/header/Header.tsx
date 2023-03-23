import React, { useEffect, useState } from "react";
import "./header.scss";
import earth from "../../assets/earth.png";
import { BsArrowDownCircle } from "react-icons/bs";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";

const Header = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const nameArray = ['R', 'e', 's', 't', 'o', 'r', 'i', 'n', 'g', ' ', 'B', 'a', 'l', 'a', 'n', 'c', 'e', ' ', 
                     'T', 'h', 'r', 'o', 'u', 'g', 'h', ' ', 'A', 't', 'm', 'o', 's', 'p', 'h', 'e', 'r', 'i', 'c',
                     ' ', 'W', 'a', 's', 't', 'e', ' ', 'M', 'a', 'n', 'a', 'g', 'e', 'm', 'e', 'n', 't'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 1300)
  }, [])  

  return (
    <div className="gpt3__header section__padding items-start" id="home">
      <div className="gpt3__header-content">
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={1} />
        {/* <h1 className="gradient__text">Restoring Balance through Atmospheric Waste Management</h1> */}
        <p>
          Leveraging the natural power of limestone to remove 1 billion tons of C02 by 2035 using the
          world’s most cost-effective Direct Air Capture technology.
        </p>

        <div className="gpt3__header-content__people">
          <p>Follow Our Journey</p>
          <BsArrowDownCircle className="down-arrow" color="#fff" size={44} id="arrow" />
        </div>
      </div>

      <div className="gpt3__header-image">
        <img className="earth" src={earth} />
      </div>
    </div>
  );
}

export default Header;
