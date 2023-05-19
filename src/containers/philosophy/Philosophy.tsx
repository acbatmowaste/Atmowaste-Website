import React from 'react';
import './philosophy.scss';
import co2Reduce from '../../assets/co2/co2Reduce.avif';
import ai from '../../assets/ai.png';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <div className="mb-12 relative">
      <motion.h1 className="gradient__text text-6xl pb-4 text-center"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{}}>Our Philosophy
      </motion.h1>
      <h2 className="gradient__text text-center text-2xl">Atmospheric Waste Management: Because we all deserve a second chance</h2>
      <section className="my-8 mx-auto px-8 flex flex-col rounded-lg border-1 vision w-3/4 mx-auto  ">
        <h1 className="text-center text-2xl pt-4 text-white">Our Vision</h1>
        <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2 self-center mt-4"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{}}>
        </motion.div>
        <h3 className="text text-center p-8">At the heart of our mission lies a bold vision: "Forming a worldwide network of carbon sequestration facilities, armed with the best adaptive solutions for any climate condition." This isn't a one-size-fits-all approach; rather, we leverage top-tier, climate-adaptive solutions to ensure optimal efficiency regardless of the geographical location or local climate of our facilities.</h3>
      </section>
      <section className="mt-24 flex gap-24 rounded-xl w-[82%] justify-start m-auto">
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
        <motion.div className="basis-7/12 w-[50%] self-center"
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
                    Innovation
                </motion.h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 300}}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ delay: 0.1, duration: 0.5  }}>
                  We embrace emerging technologies and are committed to exploring new and innovative solutions to global atmospheric waste management challenges.
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
                  transition={{}}>Collaboration</motion.h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}>We value the power of partnership and collaboration, both within our team and with local communities, governments, and other stakeholders around the world.
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
                  transition={{}}>Sustainability</motion.h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}>We prioritize sustainability and strive to minimize our environmental impact in all aspects of our business.
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
                  transition={{}}>Social Responsibility</motion.h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}>We are committed to making a positive impact in the communities we serve and aim to promote social responsibility through our work.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="mt-12 flex sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-24 rounded-xl w-[82%] justify-start m-auto">
      <motion.div className="basis-7/12 w-[50%] self-center"
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
                Direct Air Capture (DAC) Technologies: DAC technologies remove carbon dioxide from the air, and can reduce air pollution from various sources.
            </motion.p>
          </div>  
          <div className="pb-6 flex gap-24">
            <div>
              <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
              </motion.div>
              <motion.h1 className="text-white text-lg"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{}}>
                  Direct Air Capture Technologies
              </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 300}}
              whileInView={{ opacity: 1, x: 0}}
              transition={{ delay: 0.1, duration: 0.5  }}
              className="pl-2">
                Direct air capture technologies have emerged as a groundbreaking solution, harnessing the potential to actively remove carbon dioxide from the atmosphere, offering a tangible pathway towards combating climate change and creating a more sustainable future.
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
                transition={{}}>
                  Pyrolysis
              </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 300}}
              whileInView={{ opacity: 1, x: 0}}
              transition={{ delay: 0.1, duration: 0.5  }}>
                Plastics and organic matter are converted into a liquid or gas fuel, which has the potential to improve Atmospheric Waste Management services. 
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
                transition={{}}>Biochar</motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}>
                A solid carbon-rich substance which has great potential for carbon sequestration and can help reduce greenhouse gas emissions from agriculture.
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
                transition={{}}>Sea Kelp Farming</motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}>
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
        <motion.p className="sub__text text-center pt-8"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ delay: 0.5 }}></motion.p>
      </motion.div>
    </section>
   </div>
  );
};

export default Philosophy;
