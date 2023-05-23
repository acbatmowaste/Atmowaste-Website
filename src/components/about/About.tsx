import React from 'react';
import { motion } from 'framer-motion';
import './about.css';
import { Philosophy } from '../../containers';
import { GrChatOption } from 'react-icons/gr';

export const About = () => {
  return (
    <section id="about" className="about text-white">
        {/* // bg-gradient-to-r from-sky-500 to-[#6936F5]  */}
      <motion.div id="whatAtmo" className="h-auto w-[88%] rounded-xl m-auto"
        initial={{ opacity: 0, y: 80, scale: 0.6 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.7 }}>
        <div className="flex flex-col sm:flex-col md:flex md:h-[14vh] m-auto">
            <div className="mt-8 text-xl basis-2/6 px-[20px]">
                <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
                <motion.h1>Who is AtmoWaste</motion.h1>
            </div> 
            <motion.h4 className="h mx-auto px-[20px] pt-4 basis-4/6">
              We are a collective of experts from different fields dedicated to researching, designing, and implementing innovative technologies that can minimize the negative impact of atmospheric waste on our environment. Our ultimate goal is to promote sustainability and enhance the quality of life for all living beings by reducing pollution, mitigating climate change, and preserving natural resources.
            </motion.h4>
        </div>
        <div className="flex flex-col md:flex-row p-4 justify-between mt-12 md:mt-[70px] md:px-[50px] min-h-[50px]">
          <motion.h1 className="gradient__text min-h-max md:text-3xl"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: .7, duration: 0.7 }}>
              Restoring balance through atmospheric waste services
          </motion.h1>
          <motion.button id="button" className="rounded-lg p-2 mt-4 w-1/2 lg:w-1/5 self-center">
             {/* initial={{ opacity: 0, x: 300 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.7, duration: 0.7 }}> */}
              Join our efforts
          </motion.button>
        </div>
        <div className="flex flex-col sm:flex-col lg:flex-row w-full mt-8 mb-2 justify-evenly p-4">
          <motion.div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%]"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}>
            <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
            <h1 className="text-xl pb-2">Our Approach</h1>
            <p id="paragraph">Our multipronged approach to carbon capture, storage, and upcycling pollution involves various innovative technologies. We aim to identify the most effective and synergistic combinations of technologies for capturing, storing, and upcycling air pollution, carbon dioxide, and its byproducts. We will continue to refine our approach as new technologies emerge.</p>
          </motion.div>
          <motion.div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%]"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
            <h1 className="text-xl pb-2">Accelerating the natural process</h1>
            <p id="paragraph">Our goal is to accelerate carbon capture using efficient, man-made technologies through carbon capture and storage (CCS) systems, which involve capturing carbon dioxide emissions directly from the air or industrial processes. From here we can either upcycle the carbon dioxide into usable goods or store it underground in geological formations.</p>
          </motion.div>
          <motion.div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%]"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}>
            <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
            <h1 className="text-xl pb-2">Employing AI Solutions</h1>
            <p id="paragraph">We utilize cutting-edge artificial intelligence (AI) and machine learning (ML) models to analyze complex data, predict pollution trends, and anticipate population shifts. By leveraging this technology we can forecast changes in climate patterns to identify optimal locations for atmospheric waste management facilities while reducing the time and resources required for site selection.</p>
          </motion.div>
        </div>
      </motion.div>
      {/* <Philosophy /> */}
    </section>
  );
}

  export default About;