import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

export const About = () => {
  return (
    <section className="about text-white h-[100vh]">
        {/* // bg-gradient-to-r from-sky-500 to-[#6936F5]  */}
      <motion.div id="whatAtmo" className="h-auto w-[82%] rounded-xl m-auto"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}>
        <div className="flex items-center h-[14vh] m-auto">
            <div className="text-lg basis-2/6 pl-[50px]">
                <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
                <motion.h1>What is AtmoWaste</motion.h1>
            </div> 
            <motion.h4 className="h mx-auto px-[20px] basis-4/6">We so opinion friends me message as delight. Whole front do of plate heard oh ought.
              His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so
              humanity he. Friendly bachelor entrance to on by.
            </motion.h4>
        </div>
        <div className="flex justify-between mt-[70px] px-[50px]">
          <motion.h1 className="gradient__text text-3xl"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: .7, duration: 0.7 }}>
              Restoring balance to our environment
          </motion.h1>
          <motion.button className="gradient__bar rounded p-2 self-center"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}>
              Read our white paper
          </motion.button>
        </div>
        <div className="flex w-full my-24 justify-evenly">
          <motion.div className="w-[30%]"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}>
            <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
            <h1 className="text-xl pb-2">Our process</h1>
            <p id="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eius dolores labore aperiam voluptas? Quae architecto, unde, reiciendis est velit modi iste deserunt iusto quo repellendus facilis accusamus asperiores officia.</p>
          </motion.div>
          <motion.div className="w-[30%]"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
            <h1 className="text-xl pb-2">Accelerating the natural process</h1>
            <p id="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eius dolores labore aperiam voluptas? Quae architecto, unde, reiciendis est velit modi iste deserunt iusto quo repellendus facilis accusamus asperiores officia.</p>
          </motion.div>
          <motion.div className="w-[30%]"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}>
            <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
            <h1 className="text-xl pb-2">The process</h1>
            <p id="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eius dolores labore aperiam voluptas? Quae architecto, unde, reiciendis est velit modi iste deserunt iusto quo repellendus facilis accusamus asperiores officia.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

  export default About;