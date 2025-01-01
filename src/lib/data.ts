import { FeaturedProduct, NavLink, TCategory } from './types'
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

export const FEATURED_PRODIUCTS = {
  headphones: [
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
  ],
  speakers: [
    {
      title: 'ZX9 Speaker',
      description:
        'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
      desktopImage:
        '/product-zx9-speaker/desktop/image-category-page-preview.jpg',
      tabletImage:
        '/product-zx9-speaker/tablet/image-category-page-preview.jpg',
      mobileImage:
        '/product-zx9-speaker/mobile/image-category-page-preview.jpg',
      href: '/',
    },
    {
      title: 'ZX7 Speaker',
      description:
        'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
      desktopImage:
        '/product-zx7-speaker/desktop/image-category-page-preview.jpg',
      tabletImage:
        '/product-zx7-speaker/tablet/image-category-page-preview.jpg',
      mobileImage:
        '/product-zx7-speaker/mobile/image-category-page-preview.jpg',
      href: '/',
    },
  ],
}
export const FEATURED_HEADPHONES_DATA: FeaturedProduct[] = [
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

export const FEATURED_EARPHONE_DATA: FeaturedProduct[] = [
  {
    title: 'YX1 Wireless',
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    desktopImage: '/product-yx1-earphones/desktop/image-product.jpg',
    tabletImage: '/product-yx1-earphones/tablet/image-product.jpg',
    mobileImage: '/product-yx1-earphones/mobile/image-product.jpg',
    href: '/',
  },
]
export const FEATURED_SPEAKER_DATA: FeaturedProduct[] = [
  {
    title: 'ZX9',
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    desktopImage: '/product-zx9-speaker/desktop/image-product.jpg',
    tabletImage: '/product-zx9-speaker/tablet/image-product.jpg',
    mobileImage: '/product-zx9-speaker/mobile/image-product.jpg',
    href: '/',
  },
  {
    title: 'ZX7',
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    desktopImage: '/product-zx7-speaker/desktop/image-product.jpg',
    tabletImage: '/product-zx7-speaker/tablet/image-product.jpg',
    mobileImage: '/product-zx7-speaker/mobile/image-product.jpg',
    href: '/',
  },
]
