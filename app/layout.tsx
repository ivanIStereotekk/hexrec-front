
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HeadingComponent from '@/components/Heading'
import FooterComponent from '@/components/Footer'
import { ReactNode } from 'react'


     




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.TITLE_TAG,
  description: process.env.DESCRIPTION_TAG,
}

export default function RootLayout({children,params,}: {children: React.ReactNode, params:{ param_1: "PARAM_1"}}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <HeadingComponent/>
        <div className=" justify-left flex-row border border-dotted border-gray-800"></div>
        <div>{children}</div>
        <div className=" justify-left flex-row border border-dotted border-gray-800"></div>
        <FooterComponent/>
      </body>

    </html>
  )
}
