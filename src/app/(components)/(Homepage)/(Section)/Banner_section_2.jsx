import React from 'react'
import Image from 'next/image'
import meghimage from '../../../../../public/images/oblako.webp'

export default function Banner_section_2() {
  return (
    <div>
      <div className=''>
        {/* text section div */}
        <div className='py-4 bg-white  text-center leading-8'>
          <h3 className='text-2xl font-semibold px-10 text-black '>Endless Horizons is a leading consulting company providing a full range of visa services and employment in the countries of the European Union.
          </h3>
        </div>
        {/* image section */}
        <div className='bg-[url(/images/original.webp)] h-[550px] w-full bg-cover bg-center'>

        </div>
          {/* megh image */}
          <div className='absulate '>
                      <Image
                      src={meghimage}
                      className='h-72 w-72 '
                      ></Image> 
                  </div>
      </div>


    </div>
  )
}
