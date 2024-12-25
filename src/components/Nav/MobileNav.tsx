import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import Image from 'next/image'
import Logo from '@/assets/shared/desktop/logo.svg'
import Menu from '@/assets/shared/tablet/icon-hamburger.svg'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { NAV_LINKS } from '@/lib/data'

const MobileNav = () => {
  return (
    <div className='lg:hidden md:mr-10 lg:mr-0 hover:cursor-pointer size-12 p-4 w-auto h-auto'>
      <Sheet>
        <SheetTrigger className='focus:outline-none'>
          <Image src={Menu} alt='menu' className='' />
        </SheetTrigger>
        <SheetContent
          side={'left'}
          className='bg-my-dark text-white border-l-2 border-white/10'
        >
          <SheetHeader>
            <SheetTitle>
              <Image
                src={Logo}
                alt='Audiophile'
                className='md:mr-auto lg:mr-0'
              />
            </SheetTitle>
            <VisuallyHidden.Root>
              <SheetDescription>For the true Audio Lovers</SheetDescription>
            </VisuallyHidden.Root>
          </SheetHeader>
          <div className='flex flex-col items-center gap-10 py-4 mt-20'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-white text-lg hover:scale-[105%] hover:text-my-primary text-[13px] font-bold transition duration-200n ease-in-out block py-4'
              >
                {link.label}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
