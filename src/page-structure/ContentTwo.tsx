import React from 'react'
import '../page-style/ContentTwo.css'
import cryptoView from '../assets/img/cryptoview.png'
import fakePage from '../assets/img/fakepage.png'

const ContentTwo = () => {
  return (
    <div id='content-two' className='flex flex-row'>
      <div className='text-center w-[40%]'>
        <p className='text-[2rem] uppercase font-semibold text-center'>What does <em className='font-bold not-italic'>renan</em> know?</p>
        <div className='can-i-do'>
          <div>HTML</div>
          <div>CSS</div>
          <div>TailwindCSS</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>MongoDB</div>
          <div>NodeJs</div>
        </div>
        <p className='text-left'>We recently interview a person very close to him, and this person said to us that he loves learning new technologies and skills. Everything he knows now, he learned by himself, and about programming couldn't be different, he is putting a lot of effort to reach his goals, said a misterious person.</p>
      </div>
      <div className='w-[35%] ml-[.4rem] border-r-2 border-l-2 border-black'>
        <p className='text-[1.5rem] font-semibold italic leading-[2rem] bg-black text-white text-center'>"But you be strong and let your hands not slacken, for there is reward for your work."</p>
        <p className='bg-black text-white text-center'><em className='text-[1rem] font-normal'>Divrei Hayamim II, 15:7.</em></p>
      </div>
      <div className='ml-[.4rem]'>
        <p className='text-[3rem] font-bold uppercase'> we found Some of the things that renan proudly built.</p>
        <div className='projects'>
          <div>
            <img className='w-[400px]' src={cryptoView} alt='/'/>
          </div>
          <div>
            <img className='w-[400px]' src={fakePage} alt='/'/>
          </div>
          <div>
            opa
          </div>
          <div>
            opa
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentTwo