import Image from 'next/image'
import Cart from '@/assets/shared/desktop/icon-cart.svg'
import Logo from '@/assets/shared/desktop/logo.svg'
import Menu from '@/assets/shared/tablet/icon-hamburger.svg'

const Navbar = () => {
  return (
    <header className='bg-my-dark flex items-center justify-end mx-auto  px-2 sm:px-6 md:px-10 w-full overflow-hidden container'>
      <div className='flex items-center justify-between w-full border-b border-white/10 py-8 lg:pb-9'>
        <Image src={Menu} alt='menu' className='lg:hidden md:mr-10' />
        <Image src={Logo} alt='Audiophile' className='md:mr-auto' />

        <Image src={Cart} alt='cart' />
      </div>
    </header>
  )
}

export default Navbar
