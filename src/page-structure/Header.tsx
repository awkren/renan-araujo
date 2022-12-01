import React from 'react'
import '../page-style/Header.css'

const Header = () => {
  return (<>

    <div className='flex flex-row justify-between'>
      <div id='left-title-text' className='w-[20%] flex flex-col'>
        <p className='text-center font-semibold font-[OldNewspaper]'><em className='underline not-italic'>WANTED</em> Java</p>
        <p className='flex justify-center items-center text-justify font-[OldNewspaper] italic text-[.9rem]'>Guy was found half-alive at home; He said half of his body died from writing 'public static void main string args' everytime. </p>
      </div>
      <div id='title-div' className='flex text-center'>
        <p id='title-newspaper' className='text-[5rem] font-[Chomsky]'>The Front-End Developer</p>
      </div>
      <div id='right-title-text' className='w-[20%] flex flex-col justify-center'> 
        <p className='flex justify-center items-center text-justify font-[OldNewspaper] italic text-[.9rem]'>"People saying that Arch is hard, never tried to install Gentoo" - Said a guy who waited for 2 weeks for his computer to compile Firefox.</p>
      </div>
    </div>
    <div className='h-[.2rem] bg-black'></div>
    <div id='below-title' className='flex flex-row justify-evenly text-[.9rem] font-[OldNewspaper]'>
      <p className=''>Rio de Janeiro</p>
      <p>Brazil</p>
      <p>Flamengo</p>
      <p>Cleveland Browns</p>
      <p>Cleveland Cavaliers</p>
      <p>Funk</p>
      <p>Rap</p>
      <p>Country Music</p>
    </div>
    <p id='text-hidden' className='font-[OldNewspaper] hidden'>Est. Rio de Janeiro, Brazil - Since 2000</p>
    <div className='h-[.2rem] bg-black'></div>
  </>)
}

export default Header