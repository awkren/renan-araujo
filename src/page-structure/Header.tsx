import React from 'react'
import '../page-style/Header.css'

const Header = () => {
  return (<>

    <div className='flex flex-row justify-between'>
      <div className='w-[20%]'>
        <p className='text-right'>this is some random text, if i were you, i wouldnt bother reading this, but if you want go aheada asdsad asdas dsa dsadasdasdasdasdasdas</p>
      </div>
      <div id=''className='flex text-center'>
        <p className='text-[5rem] font-[Chomsky]'>The Front-End Developer</p>
      </div>
      <div className='w-[20%]'> 
        <p className=''>this is some random text, if i were you, i wouldnt bother reading this, but if you want go aheada asdsad asdas dsa dsadasdasdasdasdasdas</p>
      </div>
    </div>

      <div className='h-[.2rem] bg-black'></div>
      <div className='flex flex-row justify-evenly'>
      <p className=''>Rio de Janeiro</p>
      <p>Brazil</p>
      <p>Flamengo</p>
      <p>Cleveland Browns</p>
      <p>Cleveland Cavaliers</p>
      <p>Funk</p>
      <p>Rap</p>
      <p>Country Music</p>
      </div>
      <div className='h-[.2rem] bg-black'></div>
  </>)
}

export default Header