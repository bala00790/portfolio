//import React from 'react'
import AboutImage from '../assets/list.png'
const About = () => {
  return (
    <div className='bg-black text-which py-20 h-screen flex items-center justify-center flex-col' id='about'> 
      <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
        <h2 className='text-4xl font-bold text-center text-white mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={AboutImage} alt=""  
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
            <div className='flex-1'>
                <p className='text-white text-lg mb-8'>
                I am a passionate full-stack Developer with a focus on building
                modern and responsive web applications. With a strong foundation 
                in both frontend and backend technologies, I strive to create 
                seamless and efficient user experience.
            </p>
            <div className='space-y-4'>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-12/12 text-white'>
                    HTML & CSS</label>
                <div className='bg-gray-800 rounded-full w-3/5 h-2.5 ml-9'>
                     <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-105 w-10/12'>
                     </div> 
                </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-12/12 text-white'>
                    React JS</label>
                <div className='bg-gray-800 rounded-full w-3/5 h-2.5 ml-16'>
                     <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-105 w-10/12'>
                     </div> 
                </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-12/12 text-white'>
                    Node JS</label>
                <div className='bg-gray-800 rounded-full w-3/5 h-2.5 ml-16'>
                     <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-105 w-9/12'>
                     </div> 
                </div>
                </div>             
            </div>
            <div className='mt-12 flex justify-between text-center'>
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500'>
                  3+
                </h3>
                <p className='text-white'>Years Experience</p>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500'>
                  5
                </h3>
                <p className='text-white'>Projects Completed</p>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500'>
                  10+
                </h3>
                <p className='text-white'>Years</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
