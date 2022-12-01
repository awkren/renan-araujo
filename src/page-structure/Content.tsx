import React from 'react'
import '../page-style/Content.css'
import sleepingMan from '../assets/img/sleepingman.png'

const Content = () => {
  return (<>
    <div id='content' className='grid grid-cols-3'>
      <div>
        <img className='border-2 w-[100%] border-black' src={sleepingMan} alt='/'/>
        <p className='text-[.9rem] text-center font-semibold mb-[.1rem] italic'>Why is reading good for you?</p>
        <p className='text-[.8rem] italic'>It's good because it improves your <em className='font-semibold italic'>focus, memory, empathy, and comunication skills.</em> It can redeuce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships.</p>
        <p className='text-[.8rem] italic text-right'><em className=''>~quoted from Oberlo</em></p>
      </div>
      <div id='no-border-one' className='border-r-[2px] border-black ml-[.4rem] mr-[.4rem]'>
        <div className='bg-black h-[1px] w-[10rem] m-auto'></div>

        <div className='count-one'>
        <p className='text-center font-bold text-[1.2rem] italic'>What is Renan known for?</p>
        <p className='text-center '>It is said that Renan Araújo is a front-end developer, but in the past, he used to work as a Media Analyst.</p>
        <p className='text-center'>Some people also say that he started using Linux at the age of 11, and at the age of 13 he had a very good knowledge about Linux, BSD and Windows.</p>
        <p className='text-center'>At the age of 14 he was seen working fixing computers around his neighborhood.</p>
        <div className='h-[1px] w-[50%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
        <p className='text-[1.2rem] italic font-semibold text-center'>An old client said:</p>
        <p className='text-center'>"It is not possible he is only 14! My son is 23 y/o and couldnt fix our laptop. The boy did a great job."</p>
        </div>

        <div id='div-end-first' className='h-[1px] w-[30%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
        
        <div className='count-two italic'>
        <p className='text-[.9rem] text-center font-semibold mb-[.1rem]'>The benefits of sleeping well</p>
        <p className='text-[.8rem] mr-[.4rem]'>Good sleep improves your brain performance, mood, and health. Not getting enough quality sleep regularly raises the risk of many diseases and disorders. There range from heart disease and stroke to obesity and dementia. There's more to good sleep than just the hours spent in bed, says Dr. Marishka Brown.</p>
        <br></br>
        <p className='text-[.8rem] mr-[.4rem]'>Healthy sleep encompasses three major things. One is how much sleep you get. Another is sleep quality — that you get uninterrupted and refreshing sleep. The last is a consistent sleep schedule.</p>
        <br></br>
        <p className='text-[.8rem] mr-[.4rem]'>There are many things you can do to improve your sleep[...]</p>
        <p className='text-[.8rem] text-right mr-[.4rem]'>~quoted from NIH</p>
        </div>

      </div>
      <div className='count-three'>
        <p className='text-center border-2 bg-black text-white h-[2rem] flex justify-center items-center border-black'>Something important</p>
        <p className='ml-[.5rem] mt-[.3rem]'>Throughout the years he spent working as a Media Analyst, <em className='font-semibold'>Renan Araújo</em> had the opportunity to work with big companies in Brazil and abroad.</p><br></br>
        <p>He spent years creating marketing strategies, campaigns, and a lot more for schools, universities and other businesses around the world. Such as: Middlesex University Dubai, Red Balloon, Unimes, Amazing Explorers, Jeep Prime Rio and LifeSound.</p><br></br>
        <p>He developed a very analytical behavior, that contributed a lot for him to become a <em>solid</em> and creative web developer.</p>
        <div className='h-[1px] w-[30%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
        <p className='text-[.9rem] font-semibold text-center italic'>The Power of Effort</p>
        <p className='text-[.8rem] italic'>Effort teaches us that we can do more than we thought. We learn new skills and abilities when we take the time to put in consistent effort. Every new success that we achieve through our efforts <em className='italic font-semibold'>increases our confidence in ourselves and our abilities.</em> Effort keeps ur focuses on success.</p>
        <p className='text-[.8rem] italic'>If our efforts lead us further away from our goal, then we need to change our strategy. If our efforts brings us closer to our goals, we can double down with our effort.</p>
        {/* <p className='text-[.8rem]'>As your effort brings you closer to your goal, your motivation and willpower increase as you can taste victory.</p> */}
        <p className='text-[.8rem] italic'>Whatever your goal, plan to put in the consistent effort needed to achieve success.</p>
      </div>
    </div>
  </>)
}

export default Content