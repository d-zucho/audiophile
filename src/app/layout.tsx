import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import Loading from './loading'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Accessories for the modern audiophile',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} antialiased`}>
        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  )
}
