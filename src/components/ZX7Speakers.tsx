import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const ZX7Speakers = () => {
  return (
    <div className='my-6 rounded-xl overflow-hidden'>
      <MaxWidthWrapper className='relative'>
        <div className='bg-my-gray min-h-[320px] rounded-xl overflow-clip relative z-0'>
          <picture className='w-full h-full object-cover  block z-10'>
            <source
              media='(min-width: 1024px)'
              srcSet='/desktop/desktop-image-speaker-zx7.jpg'
              className='w-full block'
            />
            <source
              media='(min-width: 768px)'
              srcSet='/tablet/image-speaker-zx7.jpg'
            />
            <img
              src='/mobile/mobile-image-speaker-zx7.jpg'
              alt='Speaker ZX9'
              className='object-cover absolute top-0 inset-x-0 w-full h-full'
            />
          </picture>
          <div className='z-20 relative px-6 md:px-16 lg:px-24 flex items-center h-[320px]'>
            <div className='w-fit flex flex-col gap-8 items-start'>
              <h4 className='h4 uppercase'>ZX7 Speaker</h4>
              <Link
                href={'/'}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'subtitle  border-black bg-transparent border-[1px] text-black hover:bg-black hover:text-white transition duration-300 ease-in-outb text-[13px]'
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

export default ZX7Speakers
