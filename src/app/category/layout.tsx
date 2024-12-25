'use client'
import { usePathname } from 'next/navigation'

const CategoryLayout = () => {
  // get category from URL
  const category = usePathname().split('/')[2]

  // capitalize first letter of category to use as title
  const title = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className='w-full text-center py-10 bg-black/90 mb-24'>
      <h1 className='text-white h2'>{title}</h1>
    </div>
  )
}

export default CategoryLayout
