import type { Metadata } from 'next'
import { spaceGrotesk } from './fonts'
import NavBar from './ui/navbar/navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
      <NavBar/>
        {children}
        </body>
    </html>
  )
}
