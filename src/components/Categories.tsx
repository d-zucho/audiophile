import { CATEGORIES } from '@/lib/data'
import MaxWidthWrapper from './MaxWidthWrapper'
import Category from './Category'

const Categories = () => {
  return (
    <section className='bg-my-snow w-full pt-20'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-2.5 py-10'>
          {CATEGORIES.map((category) => (
            <Category
              key={category.title}
              title={category.title}
              img={category.img}
              imgAlt={category.imgAlt}
              categoryName={category.title}
              categoryId={category.id}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Categories
