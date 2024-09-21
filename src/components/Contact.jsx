// import React from 'react'
import {Mail} from 'lucide-react'
import {Phone} from 'lucide-react'
import {MapPinHouse} from 'lucide-react'
const Contact = () => {
  return (
    <div className='bg-black text-which py-20' id='contact'> 
      <div className='container mx-auto px-8 md:px-16 lg:px-24 '>
        <h2 className='text-4xl font-bold text-center text-white mb-12 mt-20'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            
            <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
            from-green-400 to to-blue-500 mb-4'>Let’s Talk</h3>
            <p className='text-white'>paragraph</p>
            <div className="mb-4 mt-8">
                 <Mail className='inline-block text-green-400 mr-2'></Mail>
                 <a href="mailto:ssbalaji2004@gmail.com" className="hover:underline text-white">
                    ssbalaji2004@gmail.com
                 </a>
            </div>
            <div className="mb-4 ">
                 <Phone className='inline-block text-green-400 mr-2'></Phone>
                 <span className='text-white'>+918610163060</span>
            </div>
            <div className="mb-4 ">
                 <MapPinHouse className='inline-block text-green-400 mr-2'></MapPinHouse>
                 <span className='text-white'>street, city, pronice, country</span>
            </div>
            </div>
            <div className="flex-1 w-full">
             <form className='space-y-4'>
                <div>
                    <label htmlFor='name' className='block mb-2'>Your Name</label>
                    <input type="text"
                    className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor='email' className='block mb-2'>Email</label>
                    <input type="text"
                    className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor='message' className='block mb-2'>Message</label>
                    <textarea type="text"
                    className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter Your Message'/>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
        transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
             </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
