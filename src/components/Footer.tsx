import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from '@/assets/shared/desktop/logo.svg'
import { NAV_LINKS } from '@/lib/data'
import Link from 'next/link'

import FacebookIcon from './icons/FacebookIcon'
import TwitterIcon from './icons/TwitterIcon'
import InstagramIcon from './icons/InstagramIcon'

const SOCIALS = [
  { label: 'Facebook', icon: <FacebookIcon /> },
  { label: 'Twitter', icon: <TwitterIcon /> },
  { label: 'Instagram', icon: <InstagramIcon /> },
]

const Footer = () => {
  return (
    <footer className='bg-black'>
      <MaxWidthWrapper>
        <div className='h-1 w-[140px] bg-my-primary' />
        {/* LOGO */}
        <div className='flex flex-col md:flex-row items-center md:justify-between md:pb-12'>
          <div className='w-fit mx-auto md:mx-0'>
            <Image
              src={Logo}
              // width={140}
              // height={25}
              alt='Audiophile'
              className='text-white w-[140px] h-auto pt-12 md:pt-14'
            />
          </div>
          {/* links container */}
          <div className='flex flex-col md:flex-row items-center gap-4 py-12 md:pb-0'>
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className='text-white subtitle hover:text-my-primary hover:scale-105 transition duration-300'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className='text-center md:text-left text-white/50 pb-12'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className='pb-10 md:flex md:justify-between md:items-center'>
          <p className='text-white/50 text-center lg:max-w-xl'>
            Copyright 2025. All Rights Reserved
          </p>
          {/* socials */}
          <div className='w-fit mx-auto mt-12 md:mt-0 md:mx-0 md:flex md:flex-row items-center'>
            {SOCIALS.map((social) => (
              <div
                key={social.label}
                className='inline-block mx-4 text-white  hover:text-my-primary hover:cursor-pointer transition duration-200'
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
