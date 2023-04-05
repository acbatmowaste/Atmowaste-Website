import { useEffect, useState } from "react";
import "./header.scss";
// import earth from "../../assets/earth.png";
import { BsArrowDownCircle } from "react-icons/bs";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../../components";
import { motion } from "framer-motion";

const Header = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const [letterClassTwo, setLetterClassTwo] = useState<string>('text-animate');

  const nameArray = ['A', 't', 'm', 'o', 's', 'p', 'h', 'e', 'r', 'i', 'c',
                     ' ', 'W', 'a', 's', 't', 'e'];
  const nameArrayTwo = ['M', 'a', 'n', 'a', 'g', 'e', 'm', 'e', 'n', 't']

  useEffect(() => {        <Header />
    setTimeout(() => {
      setLetterClass('text-animate-hover');
      setLetterClassTwo('text-animate-hover');
    }, 1300)
  }, [])  

  return (
    <section>
      <div className="gpt3__header section__padding items-center" id="home">
        <div className="gpt3__header-content">
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={1} />
          <br />
          <AnimatedLetters letterClass={letterClassTwo} strArray={nameArrayTwo} idx={1} />
          <p>
            Leveraging the natural power of limestone to remove 1 billion tons of C02 by 2035 using the
            world’s most cost-effective Direct Air Capture technology.
          </p>

          <div className="gpt3__header-content__people">
            <p>Follow Our Journey</p>
            <BsArrowDownCircle className="down-arrow" color="#fff" size={44} id="arrow" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1.5 }}>
          <Canvas style={{ width: '450px', height: '450px' }}>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </motion.div>
        {/* <div className="gpt3__header-image">
          <img className="earth" src={earth} />
        </div> */}
      </div>
      <div className="flex text-gray-500 justify-start ml-[100px] gap-10 relative -top-[200px]">
        <motion.p
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}>Heirloom</motion.p>
        <motion.p
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}>X-Prize</motion.p>
        <motion.p
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}>San Diego State University</motion.p>
        <motion.p
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}>UC San Diego</motion.p>
      </div>
    </section>
  );
}

export default Header;
