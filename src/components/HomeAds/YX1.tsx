import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

const YX1 = () => {
  return (
    <div className='w-full relative'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden md:items-center'>
          <div className='overflow-hidden rounded-xl w-full h-full'>
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
                className='w-full object-cover h-full'
              />
            </picture>
          </div>
          <div className='rounded-xl h-full bg-my-gray'>
            <div className='flex flex-col min-h-[200px] md:min-h-[320px] h-full justify-center items-start gap-8 pl-6 md:pl-10 py-10'>
              <p className='h4 uppercase'>YX1 Earphones</p>
              <Link
                href={'/'}
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'text-[13px] hover:text-white hover:bg-black transition duration-300 ease-in-out'
                )}
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default YX1
