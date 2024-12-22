import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import HeroImage from '@/assets/home/desktop/Subject.png'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <section className='text-white bg-hero-image-mobile md:bg-hero-image-tablet lg:bg-hero-image-desktop w-full h-[750px] bg-cover bg-center bg-no-repeat relative z-0'>
      <MaxWidthWrapper className=''>
        <div className='flex flex-col justify-center items-center lg:items-start h-full'>
          {/* left */}

          <span className='my-overline mt-10 text-white/50 mb-6'>
            New Product
          </span>
          <h1 className='mb-6 text-center lg:text-left'>
            XX99 Mark II <span className='block'>Headphones</span>
          </h1>
          <p className='text-white/75 text-[15px] font-medium leading-6 tracking-normal max-w-[350px] mb-10 text-center lg:text-left'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
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
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
