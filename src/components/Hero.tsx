import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import HeroImage from '@/assets/home/desktop/Subject.png'

const Hero = () => {
  return (
    <section className='text-white bg-hero-image w-full h-[750px] bg-cover bg-center bg-no-repeat relative z-0'>
      <MaxWidthWrapper className=''>
        <p>s</p>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
