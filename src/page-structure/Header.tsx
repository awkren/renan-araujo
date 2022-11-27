import React from 'react'
import '../page-style/Header.css'

const Header = () => {
  return (<>
    <div className='flex flex-row text-center justify-evenly'>
      <div className='flex justify-center items-center'>
        <p className='w-[50%]'>this is a journal mate, im writing things that doesnt make sense here lol just to fill empty spaces</p>
      </div>
      <div>
        <p className='text-[3rem]'>Front-End Developer</p>
      </div>
      <div className='flex justify-center items-center'> 
        <p className='w-[50%]'>same thing here lol i dont know what to write, but i gotta write something to fill spaces man :)</p>
      </div>
    </div>
      <div className='h-[1.2rem] bg-black'></div>
  </>)
}

export default Header