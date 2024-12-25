import AboutUs from '@/components/AboutUs'
import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import AdsSection from '@/components/HomeAds/AdsSection'

export default function Home() {
  return (
    <div className='w-full bg-my-snow'>
      <Hero />

      <Categories />
      <AdsSection />
      <AboutUs />
    </div>
  )
}
