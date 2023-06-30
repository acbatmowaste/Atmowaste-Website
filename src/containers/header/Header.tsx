import { Fragment, useEffect, useState } from "react";
import "./header.scss";
import { BsArrowDownCircle } from "react-icons/bs";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { Earth } from "../../components";
import { motion } from "framer-motion";
// import Media from 'react-media';
import { useRef } from 'react'

const Header = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');
  const [letterClassTwo, setLetterClassTwo] = useState<string>('text-animate');
  const [contentLoaded, setContentLoaded] = useState<boolean>(true);

  const form = useRef<HTMLFormElement>(null!);

  const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
  const [email, setEmail] = useState<string>('');
  const [placeholder, setPlaceholder] = useState<string>('Your Email Address');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (formSubmitted) {
      form.current.reset();
      setFormSubmitted(false);  // reset and set to false to instantiate default placeholder
    }
  }, [formSubmitted]);

  function simulateMouseClick(element: any){
    mouseClickEvents.forEach(mouseEventType =>
      element.dispatchEvent(
        new MouseEvent(mouseEventType, {
            view: window,
            bubbles: true,
            cancelable: true,
            buttons: 1
        })
      )
    );
  }

  const sendForm = (e: any) => {
    const element = document.getElementById("submitemail");
    simulateMouseClick(element);
  }

  const sendEmail = (e: any) => {
    e.preventDefault()
  
    // Regex to validate, removed default HTML validation
    const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = expression.test(email);

    if (!isValidEmail) {
      setPlaceholder('Please enter a valid email address');
      setEmail('');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);

    setEmail('');
    setPlaceholder('Submitting...');
    // triggers while waiting for response from apps script, then replaced with success message. Otherwise, 3 second delay.


    // send POST request to Apps Script that matches google sheets headers to form data fields.
    // useful so that this script can be adapted to other forms like one at bottom of webpage
    fetch('https://script.google.com/macros/s/AKfycbz1SeQGdaAJNZtRh5D1edZwsIIXbhzrZWTKxD0o1ngkOBVgxAWCPOiZ35emAzxbT_rbAw/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log('Success!', response);
      setPlaceholder('Success. Thank you for subscribing!');
      setFormSubmitted(true);
    })
    .catch(error => {
      console.error('Error!', error.message);
      setPlaceholder('Oops! Something went wrong.');  // This currently never triggers. Maybe delete it and keep log?
    });
  }

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

  // Removed earth animation for now unless we can figure out how to make it use lower memory and CPU usage
  return (
    <section>
      <div className="gpt3__header section__padding items-center mt-[25%] sm:mt-[25%] md:mt-[25%] lg:mt-auto xl:mt-auto 2xl:mt-auto" id="home">
        <div className="gpt3__header-content">
          <div id="nowrap">
            <AnimatedLetters id="one" letterClass={letterClass} strArray={nameArray} idx={1} />
            <br />
            <h1 id="two">Management</h1>
          </div>
          <p>
            We are building a global mesh network of Carbon Capture facilities, using the most effective and efficient solutions engineered for any climate anywhere.
          </p>

          <div className="gpt3__header-content__input w-[90%] mx-auto sm:w-[90%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
            <form ref={form} className="flex basis-full" onSubmit={sendEmail} noValidate>
              <input type="email" value={email} placeholder={placeholder}
                     onChange={(e) => {
                       setEmail(e.target.value);
                       if (e.target.value) {
                         setPlaceholder('Your Email Address');
                       }
                     }} />
              <button onClick={sendForm} type="button" className="min-w-fit gradient__bar">Get Started</button>
              <input className="hidden" value="send" id="submitemail" type="submit"></input>
            </form>
          </div>

          <div className="gpt3__header-content__people">
            <p>Follow Our Journey</p>
            <a href="#about">
              <BsArrowDownCircle className="down-arrow" color="#fff" size={44} id="arrow" />
            </a>
          </div>
        </div> 
        {/*{ contentLoaded && (*/}
        {/*  <Media queries={{*/}
        {/*    small: "(max-width: 599px)",*/}
        {/*    medium: "(min-width: 600px) and (max-width: 1199px)",*/}
        {/*    large: "(min-width: 1200px)"*/}
        {/*  }}>*/}
        {/*    {matches => (*/}
        {/*      <Fragment>*/}
        {/*        {matches.small && */}
        {/*          <motion.div*/}
        {/*            id="canvas"*/}
        {/*            initial={{ opacity: 0, y: -300 }}*/}
        {/*            animate={{ opacity: 1, y: 0 }}*/}
        {/*            transition={{ delay: 3, duration: 1.5 }}>*/}
        {/*            <Canvas id="earthRender" style={{ width: '400px', height: '400px'}} className="">*/}
        {/*              <Suspense fallback={null}>*/}
        {/*                <Earth />*/}
        {/*              </Suspense>*/}
        {/*            </Canvas>*/}
        {/*          </motion.div>}*/}
        {/*        {matches.medium && */}
        {/*          <motion.div*/}
        {/*            id="canvas"*/}
        {/*            className="grow mt-12"*/}
        {/*            initial={{ opacity: 0, y: -300 }}*/}
        {/*            animate={{ opacity: 1, y: 0 }}*/}
        {/*            transition={{ delay: 3, duration: 1.5 }}>*/}
        {/*            <Canvas id="earthRender" style={{ width: '500px', height: '500px'}} className="">*/}
        {/*              <Suspense fallback={null}>*/}
        {/*                <Earth />*/}
        {/*              </Suspense>*/}
        {/*            </Canvas>*/}
        {/*          </motion.div>}*/}
        {/*        {matches.large && */}
        {/*          <motion.div*/}
        {/*            id="canvas"*/}
        {/*            initial={{ opacity: 0, y: -300 }}*/}
        {/*            animate={{ opacity: 1, y: 0 }}*/}
        {/*            transition={{ delay: 3, duration: 1.5 }}>*/}
        {/*            <Canvas id="earthRender" style={{ width: '600px', height: '600px'}} className="">*/}
        {/*              <Suspense fallback={null}>*/}
        {/*                <Earth />*/}
        {/*              </Suspense>*/}
        {/*            </Canvas>*/}
        {/*          </motion.div>}*/}
        {/*      </Fragment>*/}
        {/*    )}*/}
        {/*  </Media>)}*/}
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
      <div className="my-12 justify-center sm:justify-center md:justify-center text-xs sm:text-xs md:text-lg lg:text-lg gap-2 sm:gap-4 md:gap-4 lg:gap-8 flex text-gray-500 lg:justify-start md:ml-[80px] lg:ml-[100px] xl:ml-[100px] 2xl:ml-[100px] relative lg:-top-[200px] xl:-top-[200px] 2xl:-top-[200px]">
        <motion.p
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}>Sustainability</motion.p>
        <motion.p
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}>X-Prize</motion.p>
        <motion.p
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}>AI Solutions</motion.p>
        <motion.p
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}>Strategic Partnerships</motion.p>
      </div>
    </section>
  );
}

export default Header;
