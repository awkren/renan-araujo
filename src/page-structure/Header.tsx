import React from 'react'
import '../page-style/Header.css'

const Header = () => {
  return (<>
    <div className='flex flex-row'>
      <div className='flex justify-center items-center'>
        <p className='w-[80%] text-[.7rem] text-center'><em className='font-bold not-italic'>this is some random text,</em><br></br> if i were you, i wouldnt bother reading this, but if you want go aheada asdsad asdas dsa, keep up if you want </p>
      </div>
      <div id=''className='flex justify-center items-center w-[100%] text-center'>
        <p className='text-[4.4rem] font-[Chomsky]'>The Front-End Developer</p>
      </div>
      <div className='flex justify-center items-center '> 
        <p className='w-[50%] text-[.7rem] text-center border-2 border-black p-1'>this is some random text, if i were you, i wouldnt bother reading this, but if you want go aheada asdsad asdas dsa dsadasdasdasdasdasdas</p>
      </div>
    </div>
      <div className='h-[.2rem] bg-black'></div>
      <p className='text-[1rem]'>adasdasdsad</p>
      <div className='h-[.2rem] bg-black'></div>
  </>)
}

export default Header