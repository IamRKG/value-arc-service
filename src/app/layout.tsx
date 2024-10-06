'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'



const inter = Inter({ subsets: ['latin'] })

//  const metadata = {
//   title: 'Value Arc Services - Embroidery Digitizing & Artwork Services',
//   description: 'Professional embroidery digitizing and custom artwork services',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ParallaxProvider>
        <Header />
        {children}
        <Footer />
        </ParallaxProvider>
      </body>
    </html>
  )
}
