import React from 'react'
import '../page-style/Header.css'

const Header = () => {
  return (<>

    <div className='flex flex-row justify-between'>
      <div id='left-title-text' className='w-[20%]'>
        <p className='text-right'>this is some random text, if i were you, i wouldnt bother reading this, but if you want go aheada asdsad asdas dsa dsadasdasdasdasdasdas</p>
      </div>
      <div id='title-div' className='flex text-center'>
        <p id='title-newspaper' className='text-[5rem] font-[Chomsky]'>The Front-End Developer</p>
      </div>
      <div id='right-title-text' className='w-[20%]'> 
        <p className=''>this is some random text, if i were you, i wouldnt bother reading this, but if you want go aheada asdsad asdas dsa dsadasdasdasdasdasdas</p>
      </div>
    </div>
    <div className='h-[.2rem] bg-black'></div>
    <div id='below-title' className='flex flex-row justify-evenly'>
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