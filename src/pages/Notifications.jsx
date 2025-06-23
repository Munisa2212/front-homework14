import React from 'react'
import { Stars } from '../assets/Icons'

const Notifications = () => {
  return (
    <div className='p-[20px] border-b-[1px] border-[#D8D8D8]'>
          <div className='flex items-center justify-between'>
            <p className='font-semibold text-[20px]'>Notifications</p>
            <Stars/>
          </div>
    </div>
  )
}

export default Notifications