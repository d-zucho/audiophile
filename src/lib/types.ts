export type NavLink = {
  href: string
  label: string
}

export type TCategory = {
  id: number
  title: string
  img: string
  imgAlt: string
}

export type FeaturedProduct = {
  mobileImage: string
  tabletImage: string
  desktopImage: string
  title: string
  description: string
  href: string
}

export type TProducts = {
  categoryId: number
  categoryName: string
  products: FeaturedProduct[]
}
