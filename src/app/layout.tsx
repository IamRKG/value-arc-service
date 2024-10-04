import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Value Arc Services - Embroidery Digitizing & Artwork Services',
  description: 'Professional embroidery digitizing and custom artwork services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
