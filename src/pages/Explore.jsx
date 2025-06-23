import React from 'react'
import { Stars } from '../assets/Icons'

const Explore = () => {
  return (
    <div className='p-[20px] border-b-[1px] border-[#D8D8D8]'>
         <div className='flex items-center justify-between'>
           <p className='font-semibold text-[20px]'>Explore</p>
           <Stars/>
         </div>
    </div>
  )
}

export default Explore