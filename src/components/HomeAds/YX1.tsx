import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const YX1 = () => {
  return (
    <div className='w-full relative'>
      <MaxWidthWrapper>
        <div className='flex flex-col md:flex-row gap-6 overflow-hidden'>
          <div className='overflow-hidden rounded-xl lg:w-1/2'>
            <picture className='w-full object-cover'>
              <source
                media='(min-width: 1024px)'
                srcSet='/desktop/desktop-image-earphones-yx1.jpg'
              />
              <source
                media='(min-width: 768px)'
                srcSet='/tablet/image-earphones-yx1.jpg'
              />
              <img
                src='/mobile/image-earphones-yx1.jpg'
                alt='Earphones YX1'
                className='w-full object-cover '
              />
            </picture>
          </div>
          <div className='w-1/2 bg-my-gray rounded-xl h-full'>
            <div>
              <h4 className='h4 uppercase'>YX1 Earphones</h4>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default YX1
