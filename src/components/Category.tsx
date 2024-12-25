import Image from 'next/image'
import Link from 'next/link'
import BtnIcon from '@/assets/shared/desktop/icon-arrow-right.svg'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
interface CategoryProps {
  title: string
  img: string
  imgAlt: string
}

const Category = ({ title, img }: CategoryProps) => {
  return (
    <div className='bg-my-gray flex flex-col items-center gap-7 pb-5 rounded-lg'>
      <Image
        src={img}
        alt={title}
        width={200}
        height={200}
        className='-mt-[52px]'
      />
      <p className='font-bold uppercase md:text-lg'>{title}</p>
      <Link
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'lg' }),
          'font-bold hover:bg-transparent group'
        )}
        href={`/category/${title.toLowerCase()}`}
      >
        <span className='text-black/50 font-bold text-[13px] transition duration-300 group-hover:text-my-primary tracking-[1px]'>
          SHOP
        </span>
        <Image src={BtnIcon} alt='' />
      </Link>
    </div>
  )
}

export default Category
