import Image from 'next/image'
import Cart from '@/assets/shared/desktop/icon-cart.svg'
import Logo from '@/assets/shared/desktop/logo.svg'
import Menu from '@/assets/shared/tablet/icon-hamburger.svg'

const Navbar = () => {
  return (
    <header className='bg-my-dark flex items-center justify-end  lg:pb-9 px-6 w-full overflow-hidden'>
      <div className='flex items-center justify-between w-full border-b border-white/10 py-8 lg:pb-9'>
        <Image src={Menu} alt='menu' />
        <Image src={Logo} alt='Audiophile' />
        <Image src={Cart} alt='cart' />
      </div>
    </header>
  )
}

export default Navbar
