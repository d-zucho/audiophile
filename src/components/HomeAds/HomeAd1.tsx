import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import CirclePattern from '@/assets/home/desktop/pattern-circles.svg'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const HomeAd1 = () => {
  return (
    <div className='relative z-0 w-full min-w-fit'>
      <Image
        src={CirclePattern}
        alt='Speaker ZX9'
        className='absolute z-10 inset-0 -top-[7rem]'
      />
      <MaxWidthWrapper className=''>
        <div className='bg-my-primary rounded-lg py-14 overflow-hidden flex flex-col lg:flex-row items-center gap-6'>
          <div className='w-full lg:w-1/2 overflow-clip'>
            <picture className=' overflow-hidden'>
              <source
                media='(min-width: 1024px)'
                srcSet='/desktop/desktop-image-speaker-zx9.png'
              />
              <source
                media='(min-width: 768px)'
                srcSet='/tablet/image-speaker-zx9.png'
              />
              <img
                src='/mobile/mobile-image-speaker-zx9.png'
                alt='Speaker ZX9'
                className='mx-auto shrink-0 grow-0 aspect-auto z-20 relative w-[200px] h-[230px] lg:w-[380px] lg:h-[450px]'
              />
            </picture>
          </div>
          {/* TEXT COPY */}
          <div className='px-6 flex flex-col gap-6 items-center mt-10 lg:items-start w-full lg:max-w-[350px] lg:w-1/2'>
            <p className='h1 text-white text-center lg:text-left'>
              ZX9 <span className='block'>SPEAKER</span>
            </p>
            <p className='text-white/75 font-medium text-center lg:text-left w-1/2 lg:w-full'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              href='/'
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-black text-white hover:bg-[#4C4C4C] transition duration-300 ease-in-out text-[13px]'
              )}
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default HomeAd1
