import React from 'react'
import '../page-style/Name.css'

const Name = () => {
  return (
    <div id='main-div-name' className='mt-[-1.5rem]'>
      <div id='name-container' className='flex font-bold gap-[4rem] text-[8rem] uppercase justify-center'>
        <p id='name-text' className='underline decoration-[.2rem] underline-offset-8 decoration-[gray]'>Renan Araújo</p>
      </div>
      <div id='sub-title-div' className='mt-[-1.5rem] mb-[1rem]'>
        <p id='sub-title-text' className='underline decoration-[.1rem] italic text-[1.8rem] text-center font-[OldNewspaper]'>A front-end developer with a very strong analytical background, who loves to build things!</p>
      </div>
    </div>
  )
}

export default Name