import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FeaturedHeadphonesProps {
  mobileImage: string
  tabletImage: string
  desktopImage: string
  title: string
  description: string
  href: string
}

const FeaturedHeadphones = ({
  mobileImage,
  tabletImage,
  desktopImage,
  title,
  description,
  href,
}: FeaturedHeadphonesProps) => {
  return (
    // <div className='grid grid-cols-1  gap-12 lg:gap-32 lg:grid-cols-2 lg:max-h-[560px]'>
    <div
      className={`flex flex-col ${
        title !== 'XX99 Mark II' ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }  gap-12 lg:gap-32 lg:max-h-[560px]`}
    >
      {/* image */}
      <div className='bg-my-gray max-h-[352px] rounded-lg overflow-hidden lg:w-1/2'>
        <div className='rounded-lg overflow-hidden h-full'>
          <picture>
            <source media='(min-width: 1024px)' srcSet={desktopImage} />
            <source media='(min-width: 768px)' srcSet={tabletImage} />
            <img
              src={mobileImage}
              alt={title}
              className='w-full h-[352px] mx-auto object-contain md:max-h-[352px]'
            />
          </picture>
        </div>
      </div>

      {/* content */}
      <div className='flex flex-col justify-center items-center lg:text-left lg:w-1/2'>
        <div>
          {title === 'XX99 Mark II' && (
            <div>
              <span className='uppercase text-[14px] tracking-[10px] text-my-primary'>
                New Product
              </span>
            </div>
          )}
          <div>
            <h3>
              {title} <span className='block'>Headphones</span>
            </h3>
            <p className='font-medium text-black/50 pt-6 pb-6  md:pt-8 lg:pb-10 md:max-w-xl'>
              {description}
            </p>
            <Link
              href='#'
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'bg-my-primary hover:bg-my-primary-hover transition duration-500 uppercase font-bold text-[13px]'
              )}
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedHeadphones
