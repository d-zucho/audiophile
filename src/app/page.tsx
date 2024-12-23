import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import AdsSection from '@/components/HomeAds/AdsSection'
import ZX9 from '@/components/HomeAds/ZX9'
import ZX7Speakers from '@/components/ZX7Speakers'

export default function Home() {
  return (
    <div className='w-full bg-my-snow'>
      <Hero />
      <Categories />

      <AdsSection />
    </div>
  )
}
