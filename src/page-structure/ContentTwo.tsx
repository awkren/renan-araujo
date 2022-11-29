import React from 'react'
import '../page-style/ContentTwo.css'
import cryptoView from '../assets/img/cryptoview.png'
import cryptoViewServer from '../assets/img/cryptoview-server.png'
import fakePage from '../assets/img/fakepage.png'
import renanAraujo from '../assets/img/renan-araujo.png'
import {FaCss3, FaGithub, FaGlobe, FaHtml5, FaReact, FaNodeJs, FaLinkedin} from 'react-icons/fa'
import {SiTailwindcss, SiTypescript, SiWebpack} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {DiMongodb} from 'react-icons/di'
import {GrMail} from 'react-icons/gr'

const ContentTwo = () => {
  return (
    <div id='content-two' className='flex flex-row mt-[1rem]'>
      <div className='text-center w-[40%]'>
        <div className='h-[2px] w-[50%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
        <p className='text-[2.5rem] uppercase font-semibold text-center leading-[2.5rem] mb-[1.5rem]'>What does <em className='font-bold not-italic'>renan</em> know?</p>
        <div className='can-i-do text-[2rem] gap-4 mb-[1rem]'>
          <div className='flex justify-center'><FaHtml5 title='HTML5'/></div>
          <div className='flex justify-center'><FaCss3 title='CSS3'/></div>
          <div className='flex justify-center'><SiTailwindcss title='TailwindCSS'/></div>
          <div className='flex justify-center'><IoLogoJavascript title='JavaScript'/></div>
          <div className='flex justify-center'><SiTypescript title='TypeScript'/></div>
          <div className='flex justify-center'><FaReact title='React'/></div>
          <div className='flex justify-center'><DiMongodb title='MongoDB'/></div>
          <div className='flex justify-center'><FaNodeJs title='NodeJs'/></div>
          <div className='flex justify-center'><SiWebpack title='Webpack'/></div>
        </div>
        <div className='h-[1px] w-[50%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
        <p className='text-left text-[1.2rem]'>We recently interviewed a person very close to him, and this person said to us that he loves learning new technologies and skills. Everything he knows now, he learned by himself, and about programming couldn't be different, he is putting a lot of effort to reach his goals, said this guy.</p>
      </div>
      <div className='w-[35%] ml-[.4rem] border-r-2 border-l-2 border-black'>
        <p className='text-[1rem] font-semibold italic leading-[2rem] bg-black text-white text-center'>"But you be strong and let your hands not slacken, for there is reward for your work."</p>
        <p className='bg-black text-white text-center'><em className='text-[.8rem] font-normal'>Divrei Hayamim II, 15:7.</em></p>
        <p className='text-[2rem] uppercase italic font-semibold text-center'>How to reach Renan Araújo</p>
        <div className='h-[1px] w-[50%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
        <div className='font-[500] text-[1.1rem] w-[90%] text-center m-auto italic mb-[1rem]'>
          <p className='mb-[.5rem]'>Some people mentioned some weird things, like e-mail, LinkedIn, etc...</p>
          <p>Whatever it may be, here's what they found:</p>
        </div>

        <div>
          <div id='gitpluslin' className='flex flex-col'>
            <div id='gitcontact' className='flex flex-col mb-[1.5rem]'>
              <p className='text-[3rem] flex m-auto'><a href='https://github.com/wuzue' target='_blank' rel='noreferrer'><FaGithub className='m-auto'/></a></p>
              <p className='text-center text-[1.5rem] font-semibold'><a href='https://github.com/wuzue' target='_blank' rel='noreferrer'>GitHub</a></p>
            </div>
            <div id='lincontact' className='flex flex-col mb-[1.5rem]'>
              <p className='text-[3rem] flex m-auto'><a href='https://linkedin.com/in/wuzue' target='_blank' rel='noreferrer'><FaLinkedin className='m-auto'/></a></p>
              <p className='text-center text-[1.5rem] font-semibold'><a href='https://linkedin.com/in/wuzue' target='_blank' rel='noreferrer'>LinkedIn</a></p>
            </div>
          </div>
          <div className='text-[2rem] flex flex-col'>
            <p className='text-[3rem] flex m-auto'><a href='mailto:renan.araujoonline@gmail.com'><GrMail className='m-auto'/></a></p>
            <p className='text-[1rem] text-center font-bold'>renan.araujoonline@gmail.com</p>
          </div>
        </div>

      </div>
      <div className='ml-[.4rem] w-[100%]'>
      <div className='h-[2px] w-[80%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
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
            <div className='h-[2px] w-[80%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
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
            <div className='h-[2px] w-[80%] m-auto bg-black mt-[.5rem] mb-[.3rem]'></div>
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