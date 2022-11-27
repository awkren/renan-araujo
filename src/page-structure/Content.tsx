import React from 'react'
import '../page-style/Content.css'
import sleepingMan from '../assets/img/sleepingman.png'

const Content = () => {
  return (<>
    <div id='content' className='grid grid-cols-3'>
      <div>
        <img className='border-2 w-[100%] border-black' src={sleepingMan} alt='/'/>
        <p className='text-[.9rem] text-center font-semibold mb-[.1rem]'>Why is reading good for you?</p>
        <p className='text-[.8rem]'>It's good because it improves your <em className='font-semibold not-italic'>focus, memory, empathy, and comunication skills.</em> It can redeuce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships.</p>
        <p className='text-[.8rem] text-right'><em className=''>~quoted from Oberlo</em></p>
      </div>
      <div className='border-r-[2px] border-black ml-[.4rem] mr-[.4rem]'>
        <div className='bg-black h-[1px] w-[10rem] m-auto'></div>
        <p className='text-center font-bold text-[1.2rem] italic'>What is he known for?</p>
        <p className='text-center'>It is said that Renan Araújo is a front-end developer, but in the past, he used to work as a Media Analyst.</p>
        <p className='text-center'>Some people also say that he started using Linux at the age of 11, and at the age of 13 he had a very good knowledge about Linux, BSD and Windows.</p>
        <p className='text-center'>At the age of 14 he was seen working fixing computers around his neighborhood.</p>
        <div className='h-[1px] w-[50%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
        <p className='text-[1.2rem] italic font-semibold text-center'>A client said:</p>
        <p className='text-center'>"It is not possible he is only 14! My son who is 23 y/o couldnt fix it. The boy did a great job."</p>
      </div>
      <div>
        <p className='text-center border-2 bg-black text-white h-[2rem] flex justify-center items-center border-black'>Something important</p>
        <p className='ml-[.5rem] mt-[.3rem]'>Throughout the years he spent working as a Media Analyst, <em className='font-semibold'>Renan Araújo</em> had the opportunity to work with big companies in Brazil and abroad.</p><br></br>
        <p>He spent years creating marketing strategies, campaigns, and a lot more for schools, universities and other businesses around the world. Such as: Middlesex University Dubai, Red Balloon, Unimes, Amazing Explorers, Jeep Prime Rio and LifeSound.</p><br></br>
        <p>He developed a very analytical behavior, that contributed a lot for him to become a <em>solid</em> and creative web developer.</p>
      </div>
    </div>
  </>)
}

export default Content