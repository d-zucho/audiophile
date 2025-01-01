import { FEATURED_HEADPHONES_DATA } from '@/lib/data'
import FeaturedHeadphones from '@/components/Headphones/FeaturedHeadphones'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const CategoryPage = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className='space-y-20 mb-20'>
          {FEATURED_HEADPHONES_DATA.map((item) => (
            <FeaturedHeadphones
              key={item.title}
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

export default CategoryPage
