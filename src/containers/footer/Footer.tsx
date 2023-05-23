import React, { Suspense } from 'react';
import './footer.scss';
import { motion } from 'framer-motion';
import earth from '../../assets/earth.png';
import Trees from '../../assets/Trees.png';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { DistortedSphere } from '../../components/DistortedSphere/DistortedSphere';
import { Canvas } from '@react-three/fiber';
import { BsHandIndex } from 'react-icons/bs';
import Philosophy from '../philosophy/Philosophy';

const Footer = () => {
  return (
    <section className="footer__bg text-center mt-12 md:mt-24 pt-24 relative">
      <div>
        <motion.h1
          initial={{ }}
          animate={{}}
          whileInView={{}}
          className="gradient__text  text-2xl md:text-4xl">The time to invest in the future of our planet is now</motion.h1>
      </div>
      <a href="#subscribe">
        <button className="remove rounded px-4 mt-12 h-[35px]">Remove CO2</button>
      </a>
      <motion.div
        initial={{ x: 100, y: 100 }}
        whileInView={{ x: 0, y: -20, scale: 0.4 }}
        transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        className="flex justify-center ml-20">
        <BsHandIndex size={45} color='white'/>
      </motion.div>
      <div className="app__footer section__padding" id="login">
        <div className="app__footer-links md:my-2">
          <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            {/* <p className="p__opensans">421 Ocean Blvd, Coronado, CA 92118, USA</p> */}
            <a className="p__opensans">jeremy@atmowaste.com</a>
          </div>

          <div className="app__footer-links_logo flex flex-col items-center">
            {/* <img src={} alt="footer_logo" /> */}
            <p className="p__opensans z-50">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
            {/* <img src={earth} className="earth__img" style={{ marginTop: 15, width: 120 }} /> */}
            {/* <Canvas className="-top-24 z-0 h-fit">
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Suspense fallback={null}>
                <DistortedSphere />
              </Suspense>
            </Canvas> */}
            <div className="app__footer-links_icons flex">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>

          <div className="app__footer-links_work flex flex-col">
            <h1 className="app__footer-headtext">AtmoWaste</h1>
            <a href="#about"className="p__opensans">About</a>
            <a href="#philosophy"className="p__opensans">Philosophy</a>
            <a href="#subscribe" className="p__opensans">Subscribe</a>
            <a href="#contact" className="p__opensans">Contact Us</a>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="p__opensans">2020 Copyright &copy; AtmoWaste. All Rights reserved.</p>
        </div>
      </div>
      {/* <img className="w-full foreground" src={Trees}></img> */}
    </section>
  );
};

export default Footer;
