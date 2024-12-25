'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoryLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  // get category from URL
  const category = usePathname().split('/')[2]

  // capitalize first letter of category to use as title
  const title = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className='w-full text-center'>
      <h1 className='text-white h2 py-10 bg-black/90 mb-24'>{title}</h1>
      <main>{children}</main>
    </div>
  )
}

export default CategoryLayout
