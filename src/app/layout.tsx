import './globals.css'

import { Inter } from '@next/font/google'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#262626]">
      <div className="h-screen flex flex-row justify-start">
       <Sidebar />
       <div className="flex-1 p-4 text-white">
        {children}
       </div>
      </div>
      </body>
    </html>
  )
}
