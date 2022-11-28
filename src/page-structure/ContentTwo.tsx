import React from 'react'
import '../page-style/ContentTwo.css'
import cryptoView from '../assets/img/cryptoview.png'
import cryptoViewServer from '../assets/img/cryptoview-server.png'
import fakePage from '../assets/img/fakepage.png'
import renanAraujo from '../assets/img/renan-araujo.png'
import {FaGithub, FaGlobe} from 'react-icons/fa'

const ContentTwo = () => {
  return (
    <div id='content-two' className='flex flex-row mt-[1rem]'>
      <div className='text-center w-[40%]'>
        <p className='text-[2rem] uppercase font-semibold text-center'>What does <em className='font-bold not-italic'>renan</em> know?</p>
        <div className='can-i-do text-[1.2rem]'>
          <div>HTML</div>
          <div>CSS</div>
          <div>TailwindCSS</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>MongoDB</div>
          <div>NodeJs</div>
        </div>
        <p className='text-left text-[1.2rem]'>We recently interviewed a person very close to him, and this person said to us that he loves learning new technologies and skills. Everything he knows now, he learned by himself, and about programming couldn't be different, he is putting a lot of effort to reach his goals, said a misterious person.</p>
      </div>
      <div className='w-[35%] ml-[.4rem] border-r-2 border-l-2 border-black'>
        <p className='text-[1.5rem] font-semibold italic leading-[2rem] bg-black text-white text-center'>"But you be strong and let your hands not slacken, for there is reward for your work."</p>
        <p className='bg-black text-white text-center'><em className='text-[1rem] font-normal'>Divrei Hayamim II, 15:7.</em></p>
      </div>
      <div className='ml-[.4rem] w-[100%]'>
        <p className='text-[3rem] font-bold uppercase leading-[3.5rem] text-center'> we found a few projects that renan proudly built</p>
        {/* <p className='text-[.8rem] italic'>P.S. We used future technology to print colored images</p> */}
        <div className='projects'>
          <div className='mt-[1rem] text-[1.2rem]'>
            <p className='text-center font-semibold'>CryptoView</p>
            <img id='gray-img' className='w-[400px] border-[1px] border-black' src={cryptoView} alt='/'/>
            <div className='flex flex-row justify-evenly mt-[1rem] mb-[1rem]'>
              <p title='See website on the internet'><a href='https://cryptoview.vercel.app' rel='noreferrer' target='_blank'><FaGlobe/></a></p>
              <p title='Website code on GitHub'><a href='https://github.com/wuzue/cryptoview' rel='noreferrer' target='_blank'><FaGithub/></a></p>
            </div>
            <div className='w-[90%] text-center m-auto'>
              <p>As Renan himself described CryptoView, he said it's a cryptocurrency hub that lets you track the current price of the top 30 coins in market right now.</p>
              <p>Some people say the coins change when it loses popularity at the moment, and the price changes every 30 or 60 minutes, who knows...</p>
            </div>
          </div>
          <div className='mt-[1rem] text-[1.2rem]'>
            <p className='text-center font-semibold'>FakePage</p>
            <img id='gray-img' className='w-[400px] border-[1px] border-black' src={fakePage} alt='/'/>
            <div className='flex flex-row justify-evenly mt-[1rem] mb-[1rem]'>
              <p title='See website on the internet'><a href='https://fake-page.vercel.app' rel='noreferrer' target='_blank'><FaGlobe/></a></p>
              <p title='Website code on GitHub'><a href='https://github.com/wuzue/fake-page' rel='noreferrer' target='_blank'><FaGithub/></a></p>
            </div>
            <div className='w-[90%] text-center m-auto'>
              <p>Detectives recently found out that this project was the very first Renan created using React. This landing page probably was created by Renan using another famous landing page as inspiration.</p>
              <p>"Despite being his first project, it's very good for a React beginner, right?" - said a Detective.</p>
            </div>
          </div>
          <div className='mt-[1rem] text-[1.2rem]'>
            <p className='text-center font-semibold'>CryptoView Server</p>
            <img id='gray-img' className='w-[400px] border-[1px] border-black' src={cryptoViewServer} alt='/'/>
            <div className='flex flex-row justify-evenly mt-[1rem] mb-[1rem]'>
              <p title='See website on the internet'><a href='https://cryptoview.vercel.app' rel='noreferrer' target='_blank'><FaGlobe/></a></p>
              <p title='Website code on GitHub'><a href='https://github.com/wuzue/cryptoview-server' rel='noreferrer' target='_blank'><FaGithub/></a></p>
            </div>
            <div className='w-[90%] text-center m-auto'>
              <p>"This is what people call back-end. That is the server for CryptoView, what runs but we can't see." - That's what a researcher said.</p>
              <p>The back-end for CryptoView handles the Login/Register and Auth system.</p>
            </div>
          </div>
          <div className='mt-[1rem] text-[1.2rem]'>
            <p className='text-center font-semibold'>Personal Website</p>
            <img id='gray-img' className='w-[400px] border-[1px] border-black' src={renanAraujo} alt='/'/>
            <div className='flex flex-row justify-evenly mt-[1rem] mb-[1rem]'>
              <p title='See website on the internet'><a href='https://renan-araujo.vercel.app' rel='noreferrer' target='_blank'><FaGlobe/></a></p>
              <p title='Website code on GitHub'><a href='https://github.com/wuzue/renan-araujo' rel='noreferrer' target='_blank'><FaGithub/></a></p>
            </div>
            <div className='w-[90%] text-center m-auto'>
            <p>This is this project. You know why is it awesome? Renan Araújo said that React + Tailwind is a very simple combination, but when combined with imagination, creativity... BOOM - it doesn't explode, but - you can create things the world has never seen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentTwo