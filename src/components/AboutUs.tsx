import MaxWidthWrapper from './MaxWidthWrapper'

const AboutUs = () => {
  return (
    <section className='py-24'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 md:gap-15'>
          <div className='h-[300px] md:h-[270px] lg:h-auto lg:order-2'>
            <picture className='w-full object-cover'>
              <source
                media='(min-width: 1024px)'
                srcSet='/desktop/image-best-gear.jpg'
              />
              <source
                media='(min-width: 768px)'
                srcSet='/tablet/image-best-gear.jpg'
              />
              <img
                src='/mobile/image-best-gear.jpg'
                alt='Earphones YX1'
                className='w-full object-cover h-full rounded-lg'
              />
            </picture>
          </div>
          <div className=''>
            <h4 className='uppercase h4 tracking-[1px] text-center lg:text-left  mx-auto  lg:mx-0 md:tracking-[1.43px] md:text-[40px] md:leading-[44px] mb-6 lg:max-w-md'>
              Bringing you the <span className='text-my-primary'>best</span>{' '}
              audio gear
            </h4>

            <p className='text-black/50 font-medium text-[15px] text-center lg:text-left lg:max-w-md pb-20'>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutUs
