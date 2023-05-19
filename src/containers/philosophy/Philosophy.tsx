import React from 'react';
import './philosophy.scss';
import co2Reduce from '../../assets/co2/co2Reduce.avif';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <div className="mb-12 relative">
      <section className="mt-32 flex gap-24 rounded-xl w-[82%] justify-start m-auto">
        <motion.div className="basis-5/12 my-auto"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}>
          <img className="basis-0 rounded-xl" src={co2Reduce}></img>
          <motion.p className="sub__text text-center pt-8"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ delay: 0.5 }}>Request a call to get involved</motion.p>
        </motion.div>
        <motion.div className="basis-7/12 w-[50%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}>
          <motion.h1 className="gradient__text text-4xl pb-4"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{}}>Our Philosophy
          </motion.h1>
          <h2 className="pb-10 gradient__text">Atmospheric Waste Management: Because we all deserve a second chance</h2>
          <div className="subtext">
            <div className="pb-6 flex gap-24">
              <div>
                <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
                </motion.div>
                <motion.h1 className="text-white text-xl min-w-[120px]"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
                    Our Vision
                </motion.h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 300}}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ delay: 0.1, duration: 0.5  }}>
                  At the heart of our mission lies a bold vision: "Forming a worldwide network of carbon sequestration facilities, armed with the best adaptive solutions for any climate condition." This isn't a one-size-fits-all approach; rather, we leverage top-tier, climate-adaptive solutions to ensure optimal efficiency regardless of the geographical location or local climate of our facilities.
              </motion.p>
            </div>            
            <div className="pb-6 flex gap-24">
              <div>
                <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
                </motion.div>
                <motion.h1 className="text-white text-xl min-w-[120px]"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>Proven Technology</motion.h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}>We’ve combined the best of engineering and nature, to develop the most affordable and scalable Direct Air Capture technology in the world. We offer the highest quality carbon removal credits available for purchase today.</motion.p>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="mt-32 flex gap-24 rounded-xl w-[82%] justify-start m-auto">
      <motion.div className="basis-5/12 my-auto"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}>
        <img className="basis-0 rounded-xl" src={co2Reduce}></img>
        <motion.p className="sub__text text-center pt-8"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ delay: 0.5 }}>Request a call to get involved</motion.p>
      </motion.div>
      <motion.div className="basis-7/12 w-[50%]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}>
        <motion.h1 className="gradient__text text-4xl pb-4"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{}}>Our Philosophy
        </motion.h1>
        <h2 className="pb-10 gradient__text">Atmospheric Waste Management: Because we all deserve a second chance</h2>
        <div className="subtext">
          <div className="pb-6 flex gap-24">
            <div>
              <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
              </motion.div>
              <motion.h1 className="text-white text-xl min-w-[120px]"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
                  Our Vision
              </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 300}}
              whileInView={{ opacity: 1, x: 0}}
              transition={{ delay: 0.1, duration: 0.5  }}>
                At the heart of our mission lies a bold vision: "Forming a worldwide network of carbon sequestration facilities, armed with the best adaptive solutions for any climate condition." This isn't a one-size-fits-all approach; rather, we leverage top-tier, climate-adaptive solutions to ensure optimal efficiency regardless of the geographical location or local climate of our facilities.
            </motion.p>
          </div>            
          <div className="pb-6 flex gap-24">
            <div>
              <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
              </motion.div>
              <motion.h1 className="text-white text-xl min-w-[120px]"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>Proven Technology</motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}>We’ve combined the best of engineering and nature, to develop the most affordable and scalable Direct Air Capture technology in the world. We offer the highest quality carbon removal credits available for purchase today.</motion.p>
          </div>
        </div>
      </motion.div>
    </section>
   </div>
  );
};

export default Philosophy;
