import React from 'react';
import './philosophy.scss';
import co2Reduce from '../../assets/co2/co2Reduce.avif';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="mt-32 flex gap-24 rounded-xl w-[82%] justify-start m-auto">
      <motion.div className="basis-5/12"
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
        <motion.h1 className="gradient__text text-4xl pb-12"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{}}>Our Philosophy</motion.h1>
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
                Rocks are some of the planet's most vital carbon sinks. Over geological timescales, CO2 from the atmosphere binds to minerals and permanently turns to rock – a process known as carbon mineralization.
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
                transition={{}}>Accelerating our timeline</motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}>Limestone is one of the most abundant rocks on the planet, capturing massive amounts of CO2 from the air over years. Heirloom’s technology accelerates this natural process to just days.</motion.p>
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
  );
};

export default Philosophy;
