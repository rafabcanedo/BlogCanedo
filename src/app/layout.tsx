import { ReactNode } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
  Poppins,
} from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const roboto = Roboto({ 
  subsets: ['latin'], 
  variable: '--font-roboto',
})

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bai-jamjuree',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'Blog Canedo',
  description: 'Blog for study',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} ${poppins.variable} bg-background font-sans w-full pr-8 pl-8`}>
       <Navbar />
       {children}
       <Footer />
      </body>
    </html>
  )
}
