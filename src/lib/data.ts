import { FeaturedHeadphone, NavLink, TCategory } from './types'
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

export const FEATURED_HEADPHONES_DATA: FeaturedHeadphone[] = [
  {
    title: 'XX99 Mark II',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    desktopImage:
      '/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
    tabletImage:
      '/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
    mobileImage:
      '/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
    href: '/',
  },
  {
    title: 'XX99 Mark I',
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    desktopImage:
      '/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
    tabletImage:
      '/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
    mobileImage:
      '/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
    href: '/',
  },
]
