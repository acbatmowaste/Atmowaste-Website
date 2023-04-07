import { Fragment, useEffect, useState } from "react";
import "./header.scss";
// import earth from "../../assets/earth.png";
import trees from "../../assets/Trees.png";
import { BsArrowDownCircle } from "react-icons/bs";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../../components";
import { motion } from "framer-motion";
import Media from 'react-media';

const Header = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const [letterClassTwo, setLetterClassTwo] = useState<string>('text-animate');
  const [contentLoaded, setContentLoaded] = useState<boolean>(true);

  const nameArray = ['A', 't', 'm', 'o', 's', 'p', 'h', 'e', 'r', 'i', 'c',
                     ' ', 'W', 'a', 's', 't', 'e'];
  const nameArrayTwo = ['M', 'a', 'n', 'a', 'g', 'e', 'm', 'e', 'n', 't']

  useEffect(() => {        <Header />
    setTimeout(() => {
      setLetterClass('text-animate-hover');
      setLetterClassTwo('text-animate-hover');
      setContentLoaded(true);
    }, 1300)
  }, [])  

  return (
    <section>
      <div className="gpt3__header section__padding items-center mt-[25%] sm:mt-[25%] md:mt-[25%] lg:mt-auto xl:mt-auto 2xl:mt-auto" id="home">
        <div className="gpt3__header-content">
          {/* <AnimatedLetters id="one" letterClass={letterClass} strArray={nameArray} idx={1} />
          <br />
          <AnimatedLetters id="two" letterClass={letterClassTwo} strArray={nameArrayTwo} idx={1} /> */}
          <div id="nowrap">
            <AnimatedLetters id="one" letterClass={letterClass} strArray={nameArray} idx={1} />
            <br />
            <AnimatedLetters id="two" letterClass={letterClassTwo} strArray={nameArrayTwo} idx={1} />
          </div>
          <p>
            Leveraging the natural power of limestone to remove 1 billion tons of C02 by 2035 using the
            world’s most cost-effective Direct Air Capture technology.
          </p>

          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button" className="min-w-fit">Get Started</button>
          </div>

          <div className="gpt3__header-content__people">
            <p>Follow Our Journey</p>
            <BsArrowDownCircle className="down-arrow" color="#fff" size={44} id="arrow" />
          </div>
        </div> 
        { contentLoaded && (
          <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
            {matches => (
              <Fragment>
                {matches.small && 
                  <motion.div
                    id="canvas"
                    initial={{ opacity: 0, y: -300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 1.5 }}>
                    <Canvas id="earthRender" style={{ width: '400px', height: '400px'}} className="">
                      <Suspense fallback={null}>
                        <Earth />
                      </Suspense>
                    </Canvas>
                  </motion.div>}
                {matches.medium && 
                  <motion.div
                    id="canvas"
                    initial={{ opacity: 0, y: -300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 1.5 }}>
                    <Canvas id="earthRender" style={{ width: '500px', height: '500px'}} className="">
                      <Suspense fallback={null}>
                        <Earth />
                      </Suspense>
                    </Canvas>
                  </motion.div>}
                {matches.large && 
                  <motion.div
                    id="canvas"
                    initial={{ opacity: 0, y: -300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 1.5 }}>
                    <Canvas id="earthRender" style={{ width: '600px', height: '600px'}} className="">
                      <Suspense fallback={null}>
                        <Earth />
                      </Suspense>
                    </Canvas>
                  </motion.div>}
              </Fragment>
            )}
          </Media>)}
        {/* <motion.div
          id="canvas"
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1.5 }}>
          <Canvas id="earthRender" style={{ width: '100%', height: '100%'}} className="">
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </motion.div> */}
        {/* <div className="gpt3__header-image">
          <img className="earth" src={earth} />
        </div> */}
      </div>
      {/* <img className="w-full h-auto absolute top-[60vh]" src={trees}></img> */}
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
