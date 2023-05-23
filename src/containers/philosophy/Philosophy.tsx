import React from 'react';
import './philosophy.scss';
import co2Reduce from '../../assets/co2/co2Reduce.avif';
import whiteboard from '../../assets/co2/whiteboard.jpg';
import ai from '../../assets/ai.png';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <div id="philosophy" className="mb-12 relative">
      <motion.h1 className="gradient__text text-4xl md:text-5xl pb-8 text-center"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{}}>Our Philosophy
      </motion.h1>
      <h2 className="gradient__text text-center p-2 text-lg md:text-3xl mb-12">Atmospheric Waste Management: Because we all deserve a second chance</h2>
      <section className="my-4 flex flex-col rounded-lg border-1 vision w-[90%] mx-auto  ">
        <h1 className="text-center text-2xl pt-4 text-white">Our Vision</h1>
        <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2 self-center mt-4"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
        </motion.div>
        <h3 className="text text-center p-3">At the heart of our mission lies a bold vision: "Forming a worldwide network of carbon sequestration facilities, armed with the best adaptive solutions for any climate condition." This isn't a one-size-fits-all approach; rather, we leverage top-tier, climate-adaptive solutions to ensure optimal efficiency regardless of the geographical location or local climate of our facilities.</h3>
      </section>

      <section className="mt-24 flex flex-col lg:flex-row gap-12 rounded-xl w-[90%] justify-start m-auto">
        
        <motion.div className=":basis-5/12 m-auto my-auto"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}>
          <img className="basis-0 rounded-xl" src={co2Reduce}></img>
          <motion.p className="sub__text text-center pt-8"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ delay: 0.5 }}>Request a call to get involved</motion.p>
        </motion.div>

        <motion.div className="basis-full lg:basis-7/12 lg:w-[50%] self-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}>
          <motion.h1 className="gradient__text text-4xl pb-4"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{}}>Our Values
          </motion.h1>
          <h2 className="pb-10 text-white">Embodying Our Principles: Discover Our Core Values</h2>
          <div className="subtext">
            <div className="pb-6 flex lg:gap-24">
              <div>
                <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
                </motion.div>
                <motion.h1 className="text-white text-md lg:text-xl min-w-[120px]"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
                    Innovation
                </motion.h1>
              </div>
              <motion.p 
                // initial={{ opacity: 0, x: 300}}
                // whileInView={{ opacity: 1, x: 0}}
                // transition={{ delay: 0.1, duration: 0.5  }}>
                className="text-sm lg:text-lg">
                  We embrace emerging technologies and are committed to exploring new and innovative solutions to global atmospheric waste management challenges.
              </motion.p>
            </div>            
            <div className="pb-6 flex lg:gap-24">
              <div>
                <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
                </motion.div>
                <motion.h1 className="text-white text-md lg:text-xl min-w-[120px]"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>Collaboration</motion.h1>
              </div>
              <motion.p 
                // initial={{ opacity: 0, x: 300 }}
                // whileInView={{ opacity: 1, x: 0 }}
                className="text-sm lg:text-lg"
                transition={{ delay: 0.3, duration: 0.5 }}>We value the power of partnership and collaboration, both within our team and with local communities, governments, and other stakeholders around the world.
              </motion.p>
            </div>
            <div className="pb-6 flex lg:gap-24">
              <div>
                <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
                </motion.div>
                <motion.h1 className="text-white text-md lg:text-xl min-w-[120px]"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>Sustainability</motion.h1>
              </div>
              <motion.p 
                className="text-sm lg:text-lg"
                // initial={{ opacity: 0, x: 300 }}
                // whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}>We prioritize sustainability and strive to minimize our environmental impact in all aspects of our business.
              </motion.p>
            </div>
            <div className="pb-6 flex lg:gap-24">
              <div>
                <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
                </motion.div>
                <motion.h1 className="text-white text-md lg:text-xl min-w-[120px]"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>Social Responsibility</motion.h1>
              </div>
              <motion.p 
                  className="text-sm lg:text-lg"
                // initial={{ opacity: 0, x: 300 }}
                // whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}>We are committed to making a positive impact in the communities we serve and aim to promote social responsibility through our work.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.div className="w-[92%] m-auto rounded-lg lg:hidden pt-4"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}>
        <img className="basis-0 rounded-xl" src={whiteboard}></img>
      </motion.div>

      <section className="mt-12 flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-12 lg:gap-18 rounded-xl w-[90%] lg:w-[90%] justify-start m-auto">
      <motion.div className="basis-7/12 lg:w-[50%] self-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}>
        <motion.h1 className="gradient__text text-4xl pb-4"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{}}>Proven Technologies
        </motion.h1>
        <h2 className="pb-10 text-white ">Innovative Solutions: Unleashing the Power of Proven Technologies for a Sustainable Future</h2>
        <div className="subtext">
          <div className="pb-6 flex lg:gap-24">
            <div>
              <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
              </motion.div>
              <motion.h1 className="text-white text-md lg:text-xl min-w-[120px]"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
                  Direct Air Capture Technologies
              </motion.h1>
            </div>
            <motion.p 
              // initial={{ opacity: 0, x: 300}}
              // whileInView={{ opacity: 1, x: 0}}
              // transition={{ delay: 0.1, duration: 0.5  }}
              className="text-sm lg:text-lg">
                Direct air capture technologies have emerged as a groundbreaking solution, harnessing the potential to actively remove carbon dioxide from the atmosphere, offering a tangible pathway towards combating climate change and creating a more sustainable future.
            </motion.p>
          </div>   
          <div className="pb-6 flex lg:gap-24">
            <div>
              <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
              </motion.div>
              <motion.h1 className="text-white text-md lg:text-xl min-w-[120px]"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
                  Pyrolysis
              </motion.h1>
            </div>
            <motion.p 
              // initial={{ opacity: 0, x: 300}}
              // whileInView={{ opacity: 1, x: 0}}
              // transition={{ delay: 0.1, duration: 0.5  }}
              className="text-sm lg:text-lg">
                Plastics and organic matter are converted into a liquid or gas fuel, which has the potential to improve Atmospheric Waste Management services. 
            </motion.p>
          </div>             
          <div className="pb-6 flex lg:gap-24">
            <div>
              <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
              </motion.div>
              <motion.h1 className="text-white text-md lg:text-xl min-w-[120px]"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>Biochar</motion.h1>
            </div>
            <motion.p
              className="text-sm lg:text-lg">
                A solid carbon-rich substance which has great potential for carbon sequestration and can help reduce greenhouse gas emissions from agriculture.
            </motion.p>
          </div>
          <div className="pb-6 flex lg:gap-24">
            <div>
              <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
              </motion.div>
              <motion.h1 className="text-white text-md lg:text-xl min-w-[120px]"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>Sea Kelp Farming</motion.h1>
            </div>
            <motion.p 
              // initial={{ opacity: 0.5, x: 300 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm lg:text-lg">
                Utilizing the natural photosynthetic properties of cultivated seaweed in order to absorb carbon dioxide and pollutants from water, and producing kelp to be used as a sustainable source of food, fuel, and other products.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div className="basis-5/12 my-auto"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}>
        <img className="basis-0 rounded-xl" src={ai}></img>
        <motion.p className="sub__text text-center lg:pt-8"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ delay: 0.5 }}></motion.p>
      </motion.div>
    </section>
   </div>
  );
};

export default Philosophy;
