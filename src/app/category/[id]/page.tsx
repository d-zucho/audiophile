'use client'
import Category from '@/components/Category'
import FeaturedProductSingle from '@/components/FeaturedProductSingle'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import {
  CATEGORIES,
  FEATURED_EARPHONE_DATA,
  FEATURED_HEADPHONES_DATA,
  FEATURED_SPEAKER_DATA,
  PRODUCTS,
} from '@/lib/data'
import { CloudLightning } from 'lucide-react'
import { useParams, usePathname } from 'next/navigation'

import React from 'react'

interface Props {
  children?: React.ReactNode
}

const ProductPage = ({ children }: Props) => {
  const category = usePathname().split('/')[2]
  let products = []

  switch (category!) {
    case 'speakers':
      products = FEATURED_SPEAKER_DATA
      break
    case 'earphones':
      products = FEATURED_EARPHONE_DATA
      break
    default:
      products = FEATURED_HEADPHONES_DATA
      break
  }
  const title = category.charAt(0).toUpperCase() + category.slice(1)
  return (
    <section className='w-full'>
      <h1 className='text-white h2 py-10 bg-black/90 mb-24 text-center'>
        {title}
      </h1>
      <MaxWidthWrapper>
        <div className='mx-8'>
          <div className='space-y-20 mb-20'>
            {products.map((item) => (
              <FeaturedProductSingle
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
        </div>
      </MaxWidthWrapper>

      <div className='mx-8'></div>
    </section>
  )
}

export default ProductPage
