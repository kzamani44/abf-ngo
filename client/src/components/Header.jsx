import React, {useState} from 'react'
import { MdOutlineArrowForward, MdPlayArrow, MdMenu, MdClose } from "react-icons/md";



const Header = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () =>{
    setNav(!nav)
  }

  return (
    <header className='w-full h-auto'>

      {/* Desktop and Tablet */}
      <div className='hidden relative md:flex flex-col'>
        {/* NavBar Section */}
        <nav className='w-full absolute z-10 p-4 px-32 flex justify-between'>
          <h1 className='text-4xl font-bold text-yellow-500 cursor-pointer'>Abf.</h1>

          <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-white uppercase font-semibold hover:text-yellow-700 text-base cursor-pointer transition-all duration-100 ease-in-out'>Home</li>
            <li className='text-white uppercase font-semibold hover:text-yellow-700 text-base cursor-pointer transition-all duration-100 ease-in-out'>About Us</li>
            <li className='text-white uppercase font-semibold hover:text-yellow-700 text-base cursor-pointer transition-all duration-100 ease-in-out'>Contact</li>
            <li className='text-white uppercase font-semibold hover:text-yellow-700 text-base cursor-pointer transition-all duration-100 ease-in-out'>Projects</li>
          </ul>
          <a href="/" className='bg-yellow-700 p-1 px-3 text-white font-semibold rounded-md hover:bg-yellow-600'>Donate</a>

          </div>
          
        </nav>
        <div className='w-full min-h-screen bg-hero bg-center bg-cover'>
          {/* Hero Section */}
          <div className='absolute top-0 left-0 w-full h-full bg-overlay'></div>
          <div className='px-48 absolute top-[25%] max-w-5xl'>

            <p className='text-white text-3xl pb-4'>Raising hope</p>
            <h1 className='text-white text-7xl leading pb-10'>To the <span className='text-yellow-700 font-bold'>HOMELESS</span> and <span className='text-yellow-700 font-bold'>HOPELESS</span>.</h1>

            <div className='flex items-center gap-10'>
              <div className='flex items-center gap-2 text-white'>
              <a href="/" className="relative p-5 font-medicum text-white group">
                <span className="bg-button transform translate-x-0 -skew-x-12 bg-yellow-700 group-hover:bg-yellow-700 group-hover:skew-x-12"></span>
                <span className="bg-button transform skew-x-12 bg-yellow-500 group-hover:bg-yellow-500 group-hover:-skew-x-12"></span>
                <span className="bg-button2 left-0 transform -translate-x-8 translate-y-10 bg-yellow-600 -rotate-12"></span>
                <span className="bg-button2 right-0 transform translate-x-10 translate-y-8 bg-yellow-500 -rotate-12"></span>
                <span className="relative">Join Our Cause</span>
                </a>
                <MdOutlineArrowForward className='text-2xl'/>
              </div>
              <div className='flex text-white items-center gap-1 hover:text-yellow-700 transition duration-200 ease-in-out'>
                <a href="/">Watch the video</a>
                <MdPlayArrow className='text-3xl'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Mobile */}
      <div className='flex md:hidden  relative flex-col'>
        {/* NavBar Section */}
        <div className='w-full absolute z-10 p-4 px-4 flex justify-between'>
          <h1 className='text-4xl font-bold text-yellow-500 cursor-pointer'>Abf.</h1>

          <div className='text-white' onClick={toggleNav}>

            {!nav ? <MdMenu size={40}/> :<MdClose size={40}/>}

          </div>

          <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-1/2 h-full pt-20 bg-yellow-700 flex-col items-center gap-8 ease-out duration-500'}>
          <ul className='flex flex-col items-center gap-8'>
            <li className='p-1 text-white uppercase font-semibold text-base cursor-pointer transition-all duration-100 ease-in-out'>Home</li>
            <li className='p-1 text-white uppercase font-semibold text-base cursor-pointer transition-all duration-100 ease-in-out'>About Us</li>
            <li className='p-1 text-white uppercase font-semibold text-base cursor-pointer transition-all duration-100 ease-in-out'>Contact</li>
            <li className='p-1 text-white uppercase font-semibold text-base cursor-pointer transition-all duration-100 ease-in-out'>Projects</li>
          </ul>
          </div>
          
        </div>
        <div className='w-full min-h-screen bg-hero1 bg-center bg-cover'>
          {/* Hero Section */}
          <div className='absolute top-0 left-0 w-full h-full bg-overlay'></div>
          <div className='px-4 absolute top-[15%] max-w-[80%]'>

            <p className='text-white text-3xl pb-4'>Raising hope</p>
            <h1 className='text-white text-6xl leading pb-10'>To the <span className='text-yellow-700 font-bold'>HOMELESS</span> and <span className='text-yellow-700 font-bold'>HOPELESS</span>.</h1>

            <div className='flex flex-col items-end gap-10'>
              <div className='flex items-center gap-2 text-white'>
                <a href="/" className="relative p-5 font-medicum text-white group">
                <span className="bg-button transform translate-x-0 -skew-x-12 bg-yellow-700 group-hover:bg-yellow-700 group-hover:skew-x-12"></span>
                <span className="bg-button transform skew-x-12 bg-yellow-500 group-hover:bg-yellow-500 group-hover:-skew-x-12"></span>
                <span className="bg-button2 left-0 transform -translate-x-8 translate-y-10 bg-yellow-600 -rotate-12"></span>
                <span className="bg-button2 right-0 transform translate-x-10 translate-y-8 bg-yellow-500 -rotate-12"></span>
                <span className="relative">Join Our Cause</span>
                </a>
                <MdOutlineArrowForward className='text-2xl'/>
              </div>
              <div className='flex text-white items-center gap-1 hover:text-yellow-700 transition duration-200 ease-in-out'>
                <a href="/">Watch the video</a>
                <MdPlayArrow className='text-3xl'/>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </header>
  )
}

export default Header