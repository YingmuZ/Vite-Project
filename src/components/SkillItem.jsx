import React from 'react'

const SkillItem = ({ title, details}) => {
  return (
    <ol className=' flex flex-col md:flex-row relative border-l border-stone-100'>
        <li className=' mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-600 rounded-full mt-1.5 -left-1.5 border-white' />
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                {/* <span className='inline-block px-2 py-1 font-semibold text-white bg-black rounded-md'>{year}</span> */}
                <span className='text-lg font-semibold text-black'>{title}</span>
               
            </p>
            <p className='my-2 text-base font-normal text-black'>{details}</p>
        </li>
    </ol>
  
  )
}

export default SkillItem
