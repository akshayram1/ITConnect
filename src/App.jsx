import React from 'react';
import {
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials
} from './components';
import styles from './style';
import Login from './components/Login';
import CodingChallenge from './components/CodingChallenge';

import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';


const App = () => {
  return (
    <div>
      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          {/* <Billing/> */}
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>
    </div>
  );
};

const WrappedApp = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp/>} />
      </Routes>
      
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default WrappedApp;
