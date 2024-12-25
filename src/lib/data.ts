import { NavLink, TCategory } from './types'
import HeadphonesCategory from '@/assets/shared/desktop/image-category-thumbnail-headphones.png'

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/category/headphones', label: 'Headphones' },
  { href: '/category/speakers', label: 'Speakers' },
  { href: '/category/earphones', label: 'Earphones' },
]

export const CATEGORIES: TCategory[] = [
  {
    title: 'Headphones',
    img: '/image-category-thumbnail-headphones.png',
    imgAlt: 'Headphones',
  },
  {
    title: 'Speakers',
    img: '/image-category-thumbnail-speakers.png',
    imgAlt: 'Speakers',
  },
  {
    title: 'Earphones',
    img: '/image-category-thumbnail-earphones.png',
    imgAlt: 'Earphones',
  },
]
