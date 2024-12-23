import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import HomeAd1 from '@/components/HomeAds/HomeAd1'
import ZX7Speakers from '@/components/ZX7Speakers'

export default function Home() {
  return (
    <div className='w-full bg-my-snow'>
      <Hero />
      <Categories />
      <HomeAd1 />
      <ZX7Speakers />
    </div>
  )
}
