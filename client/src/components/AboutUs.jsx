import React from 'react'
import { Icon } from '@iconify/react';

const AboutUs = () => {
  return (
    <main className='w-full h-full'>

      {/* Desktop and Tablet */}
      <div className='hidden md:flex flex-col'>
        <div className='w-full px-32 flex'>
        <div className='w-[70%] p-4 mr-10 mt-20 mb-10 flex flex-col gap-16'>
          <div className=''>
            <h1 className='text-2xl font-bold pb-4 text-yellow-500'>About Us and What we do.</h1>
            <p className='text-4xl leading-normal pb-4'>We Help Thousands of Children to Get Their Education and Become Valuable Individuals in the Society.</p>
            <p className='text-base leading pb-3'>Our core mission is to aid underserved and underpriviledged children in their academic endeavors, their emotional and mental development, physical wellbeing as well as help them build a bright and prosperous future, through full-time scholarship funding and care.</p> 
            <p className='text-base leading'> We are not an orphanage, we are a community of kindred spirit and of the ideaology of giving back to those who are less priviledge: Our ultimate goal is educational, mental and physical empowerment of the kids from a young and impressionable age.</p>
          </div>
          <div className='flex gap-8'>
            <div className='h-[200px] w-[180px] hover:bg-orange-200 cursor-pointer rounded-lg bg-form flex flex-col items-center justify-center'>
              <Icon className='text-7xl text-white bg-yellow-700 p-3 rounded-full' icon="material-symbols:volunteer-activism-rounded" />
              <span className='p-3 text-center'>Start Donating</span>
            </div>
            <div className='h-[200px] w-[180px] hover:bg-orange-200 cursor-pointer rounded-lg bg-form flex flex-col items-center justify-center'>
              <Icon className='text-7xl text-white bg-yellow-700 p-3 rounded-full' icon="fluent:people-community-add-20-filled" />
              <span className='p-3 text-center'>Join Our Community</span>
            </div>
            <div className='h-[200px] w-[180px] hover:bg-orange-200 cursor-pointer rounded-lg bg-form flex flex-col items-center justify-center'>
              <Icon className='text-7xl text-white bg-yellow-700 p-3 rounded-full' icon="fa-solid:hands-helping" />
              <span className='p-3 text-center'>Be A Volunteer</span>
            </div>
          </div>
        </div>
        

        <div className='bg-form rounded-lg w-full mt-5'>
          <form action="" className='p-8 mt-5 h-full'>
            <p className='text-xl text-yellow-700 font-bold pb-6'>Donate Now</p>
            <h2 className='text-2xl text-white leading-normal pb-8'>Giving is the greatest act of grace and humanity</h2>
            <div>
              <label className='text-base text-yellow-700' htmlFor="name">Your Full Name</label><br />
              <input className='p-3 mt-2 mb-4 w-full focus:outline-yellow-500 rounded' type="text" id='name' name='name' placeholder='Your Full Name'/>
            </div>
            <div>
              <label className='text-base text-yellow-700' htmlFor="email">Email Address</label><br />
              <input className='p-3 mt-2 mb-4 w-full focus:outline-yellow-500 rounded' type="email" id='email' name='email' placeholder='Email'/>
            </div>
            <div>
              <label className='text-base text-yellow-700' htmlFor="cause">Select Cause</label><br />
              <select className='p-3 mt-2 mb-4 w-full focus:outline-yellow-500 rounded' name="" id="cause">
                <option value="food">Food</option>
                <option value="health">Health Supplies</option>
                <option value="education">Educational Supplies</option>
                <option value="clothes">Clothes Provision</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label className='text-base text-yellow-700' htmlFor="amount">Amount to Give</label><br />
              <input className='p-3 mt-2 mb-4 w-full focus:outline-yellow-500 rounded' type="tel" id='amount' name='amount' placeholder='Amount'/>
            </div>
            <div className='mt-4 mb-4'>
              <input className='mr-2' type="radio" id='paypal' name='modeOfPayment'/>
              <span className='mr-4'>Paypal</span>

              <input className='mr-2' type="radio" id='cCard' name='modeOfPayment'/>
              <span className='mr-4'>Credit Card</span>

              <input className='mr-2' type="radio" id='payoneer' name='modeOfPayment'/>
              <span className='mr-4'>Payoneer</span>
            </div>
            <button className='p-3 bg-yellow-700 mt-4 rounded text-white font-bold hover:bg-yellow-600 w-full' type='submit'>Donate Now</button>
          </form>
        </div>
        </div>

      </div>


      {/* Mobile */}
      <div className='flex md:hidden flex-col'>
      <div className='w-full px-6 flex flex-col-reverse'>
        <div className='w-full mt-10 mb-10 flex flex-col gap-16'>
          <div className=''>
            <h1 className='text-2xl font-bold pb-4 text-yellow-500 text-center'>About Us and What we do.</h1>
            <p className='text-4xl leading-normal pb-4 text-center'>We Help Thousands of Children to Get Their Education and Become Valuable Individuals in the Society.</p>
            <p className='text-base leading pb-3'>Our core mission is to aid underserved and underpriviledged children in their academic endeavors, their emotional and mental development, physical wellbeing as well as help them build a bright and prosperous future, through full-time scholarship funding and care.</p> 
            <p className='text-base leading'> We are not an orphanage, we are a community of kindred spirit and of the ideaology of giving back to those who are less priviledge: Our ultimate goal is educational, mental and physical empowerment of the kids from a young and impressionable age.</p>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='h-[200px] w-full hover:bg-orange-200 cursor-pointer rounded-lg bg-form flex flex-col items-center justify-center'>
              <Icon className='text-7xl text-white bg-yellow-700 p-3 rounded-full' icon="material-symbols:volunteer-activism-rounded" />
              <span className='p-3 text-center'>Start Donating</span>
            </div>
            <div className='h-[200px] w-full hover:bg-orange-200 cursor-pointer rounded-lg bg-form flex flex-col items-center justify-center'>
              <Icon className='text-7xl text-white bg-yellow-700 p-3 rounded-full' icon="fluent:people-community-add-20-filled" />
              <span className='p-3 text-center'>Join Our Community</span>
            </div>
            <div className='h-[200px] w-full hover:bg-orange-200 cursor-pointer rounded-lg bg-form flex flex-col items-center justify-center'>
              <Icon className='text-7xl text-white bg-yellow-700 p-3 rounded-full' icon="fa-solid:hands-helping" />
              <span className='p-3 text-center'>Be A Volunteer</span>
            </div>
          </div>
        </div>
        

        <div className='bg-form rounded-lg w-full mt-5'>
          <form action="" className='p-8 mt-5 h-full'>
            <p className='text-xl text-yellow-700 font-bold pb-6'>Donate Now</p>
            <h2 className='text-2xl text-white leading-normal pb-8'>Giving is the greatest act of grace and humanity</h2>
            <div>
              <label className='text-base text-yellow-700' htmlFor="name">Your Full Name</label><br />
              <input className='p-3 mt-2 mb-4 w-full focus:outline-yellow-500 rounded' type="text" id='name' name='name' placeholder='Your Full Name'/>
            </div>
            <div>
              <label className='text-base text-yellow-700' htmlFor="email">Email Address</label><br />
              <input className='p-3 mt-2 mb-4 w-full focus:outline-yellow-500 rounded' type="email" id='email' name='email' placeholder='Email'/>
            </div>
            <div>
              <label className='text-base text-yellow-700' htmlFor="cause">Select Cause</label><br />
              <select className='p-3 mt-2 mb-4 w-full focus:outline-yellow-500 rounded' name="" id="cause">
                <option value="food">Food</option>
                <option value="health">Health Supplies</option>
                <option value="education">Educational Supplies</option>
                <option value="clothes">Clothes Provision</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label className='text-base text-yellow-700' htmlFor="amount">Amount to Give</label><br />
              <input className='p-3 mt-2 mb-4 w-full focus:outline-yellow-500 rounded' type="tel" id='amount' name='amount' placeholder='Amount'/>
            </div>
            <div className='mt-4 mb-4'>
              <input className='mr-3' type="radio" id='paypal' name='modeOfPayment'/>
              <span className='mr-4'>Paypal</span>

              <input className='mr-3' type="radio" id='cCard' name='modeOfPayment'/>
              <span className='mr-4'>Credit Card</span>

              <input className='mr-3' type="radio" id='payoneer' name='modeOfPayment'/>
              <span className='mr-4'>Payoneer</span>
            </div>
            <button className='p-3 bg-yellow-700 mt-4 rounded text-white font-bold hover:bg-yellow-600 w-full' type='submit'>Donate Now</button>
          </form>
        </div>
        </div>
      </div>
    </main>
  )
}

export default AboutUs