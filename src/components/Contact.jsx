import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-black'>Contact</h1>
      <form action='https://getform.io/f/eaa16bf8-d5a1-44fb-aea7-3e446bf0e002' method='POST' encType='multipart/form-data'>
        <div className='max-w-[600px] m-auto grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Name</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Phone Number</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone'/>
            </div>
        </div>
        <div className='max-w-[600px] m-auto  flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email'/>
        </div>
        <div className='max-w-[600px] m-auto  flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
        </div>
        <div className='max-w-[600px] m-auto  flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10" name='message'/>
            <button className='max-w-[600px]  bg-black hover:bg-white hover:text-black text-gray-100 mt-4 w-full p-4 rounded-lg'>
            Send Message
        </button>
        </div>
        

      </form>
    </div>
  )
}

export default Contact
