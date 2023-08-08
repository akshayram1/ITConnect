import React from 'react'


//Bussiness
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

//CardDeal
import { card } from '../assets'
import styles, { layout } from '../style'

//Clients
import { clients } from '../constants'
import styles from '../style'

//CTA
import styles from '../style'

//Feedback
import { quotes } from '../assets'

//hero
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

//stats
import { stats } from '../constants'
import styles from '../style'

//testimonials

import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'



const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img
          src={icon}
          alt='icon'
          className='w-[50%] h-[50%] object-contain'
        />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
          {content}
        </p>
      </div>
    </div>
  )

function Home() {
  return (

    <div>
    {/* Hero Section */}
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[56px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
         ITConnect- <br className='sm:block hidden'/> {" "}
          <span className='text-gradient'>A Virtual Company</span> {" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
        </div>
      </div>
      {/* <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Payment Method.
      </h1> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Are you looking to get hired? Why not take an AI-based test to showcase your skills and stand out from the crowd!
      Unlock your potential with AI-based tests for hiring success. Embrace the future, showcase your skills, and stand out!
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt='billing'
        className='w-[100%] h-[100%] relative z-[5]'
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>

  {/* Stats */}
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>

    {/* Bussiness */}
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Your Projects,<br className='sm:block hidden'/>Our Talent Ecosystem.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        At ITConnect, we understand the value of your time and expertise. 
        Focus on your business goals while we take care of your financial needs. 
        With the right solutions, you can enhance your financial journey by building credit, earning rewards, and optimizing savings.
        Navigate the vast landscape of financial options confidently, even with countless choices available. 
        Let us empower you with the tools and guidance to make informed decisions.
        </p>
        <button type='button' className={`mt-10 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
         Learn More about ITConnect       
    </button>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>

    {/* CardDeal */}
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Discover Ideal Roles <br className='sm:block hidden'/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        Ready for a more fulfilling career? Unlock opportunities by identifying your strengths, 
        exploring new industries, and connecting with professionals. 
        Tailor your skills and passions to find the role that suits you best.
        </p>
        <button type='button' className={`mt-10 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      View Roles
    </button>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>


    {/* Testimonials */}
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>What our clients <br className='sm:block hidden'/>have to say</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[500px]`}>
            Discover how Virtual IT Company has revolutionized their business with cutting-edge virtual technology and unparalleled support.
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card}/>        
        ))}
      </div>      
    </section>

    {/* Clients */}
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img
              src={client.logo}
              alt='client'
              className='sm:w-[192px] w-[100px] object-contain'
            />           
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need is Sign up , Choose role , Apply , Give test and Grab Opportunity !
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
     Apply Now
    </button>
      </div>
    </section>


  
      </div>
  )
}

export default Home