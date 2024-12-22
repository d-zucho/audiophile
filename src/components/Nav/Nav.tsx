import Image from 'next/image'
import Cart from '@/assets/shared/desktop/icon-cart.svg'
import Logo from '@/assets/shared/desktop/logo.svg'
import { NAV_LINKS } from '@/lib/data'
import MobileNav from './MobileNav'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Nav = () => {
  return (
    <header className='bg-my-hero-dark flex items-center overflow-hidden'>
      <MaxWidthWrapper className=''>
        <div className='flex items-center justify-between w-full border-b border-white/10 py-8 lg:pb-9 relative'>
          <MobileNav />
          <Image src={Logo} alt='Audiophile' className='md:mr-auto lg:mr-0' />
          <div className='hidden lg:flex lg:items-center gap-9 absolute left-1/2 -translate-x-1/2'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-white hover:scale-[105%] hover:text-my-primary text-[13px] font-bold transition duration-200n ease-in-out'
              >
                {link.label}
              </a>
            ))}
          </div>

          <Image
            src={Cart}
            alt='cart'
            className='hover:cursor-pointer size-12 p-4 pr-0 w-auto h-auto hover:scale-105 transition duration-200 ease-in-out'
          />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Nav
