import React, { Suspense } from 'react';
import './footer.scss';
import { motion } from 'framer-motion';
import earth from '../../assets/earth.png';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { DistortedSphere } from '../../components/DistortedSphere/DistortedSphere';
import { Canvas } from '@react-three/fiber';

const Footer = () => {
  return (
    <section className="footer__bg text-center mt-24 pt-24">
      <div>
        <motion.h1
          initial={{ }}
          animate={{}}
          whileInView={{}}
          className="gradient__text text-4xl">The time to invest in the future of our planet is now</motion.h1>
      </div>
      <button className="gradient__bar rounded px-4 mt-12 h-[35px]">Remove CO2</button>

      <div className="app__footer section__padding" id="login">
        <div className="app__footer-links">
          <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
            <p className="p__opensans">+1 212-344-1230</p>
            <p className="p__opensans">+1 212-555-1230</p>
          </div>

          <div className="app__footer-links_logo flex flex-col items-center">
            {/* <img src={} alt="footer_logo" /> */}
            <p className="p__opensans z-50">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
            {/* <img src={earth} className="earth__img" style={{ marginTop: 15, width: 120 }} /> */}
            <Canvas className="-top-24 z-0 h-fit">
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Suspense fallback={null}>
                <DistortedSphere />
              </Suspense>
            </Canvas>
            <div className="app__footer-links_icons flex">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>

          <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday-Friday:</p>
            <p className="p__opensans">08:00 am - 12:00 am</p>
            <p className="p__opensans">Saturday-Sunday:</p>
            <p className="p__opensans">07:00 am - 11:00 pm</p>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="p__opensans">2020 Copyright &copy; AtmoWaste. All Rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
