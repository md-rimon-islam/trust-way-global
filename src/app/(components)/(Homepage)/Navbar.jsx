import Image from 'next/image'
import React from 'react'

import logo from '../../../../public/images/helloworldl.jpg'

export default function Navbar() {
  return (
    <div className=' bg-black'>
        {/* navbar logo div */}
                <div className='flex items-center justify-center py-4 '>
            <Image
            src={logo}
            className='h-16 w-40 '
            ></Image> 
        </div>
          {/* navbar ul section */}

          <div>
            <ul className=' text-xl font-semibold text-white grid grid-cols-6 px-2 text-center py-2 items-center justify-center'>
              <li>Work Visa </li>
              <li>Turist  Visa </li>
              <li>Study Visa</li>
              <li>Ligilizetion on Bangladesh </li>
              <li>Appointment in Global</li>
              <li>Tunkery visa on Bangladesh</li>
            </ul>
          </div>
          
    </div>
  )
}
