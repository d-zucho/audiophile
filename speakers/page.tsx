import FeaturedProductSingle from '@/components/FeaturedProductSingle'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { FEATURED_SPEAKER_DATA } from '@/lib/data'

const SpeakersPage = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className='space-y-20 mb-20'>
          {FEATURED_SPEAKER_DATA.map((item, index) => (
            <FeaturedProductSingle
              key={item.title}
              index={index}
              description={item.description}
              desktopImage={item.desktopImage}
              href={item.href}
              mobileImage={item.mobileImage}
              tabletImage={item.tabletImage}
              title={item.title}
            />
          ))}
        </div>
        <div></div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SpeakersPage
