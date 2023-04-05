import React from 'react';

// import SubHeading from '../SubHeading/SubHeading';
import './subscribe.scss';


export const Subscribe = () => (
  <div className="app__newsletter rounded m-auto flex mt-48 items-center gap-64 h-[12vh]">
    <div className="app__newsletter-heading">
      {/* <SubHeading title="Newsletter" /> */}
      <h1 className="headtext__cormorant text-2xl font-bold">Subscribe To Our Newsletter</h1>
      <p className="p__opensans text-xl">And never miss the latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" className="text-black bg-white" placeholder="Email address" />
      <button type="button" className="custom__button text-white bg-black rounded py-2 px-4">Subscribe</button>
    </div>
  </div>
);

export default Subscribe;