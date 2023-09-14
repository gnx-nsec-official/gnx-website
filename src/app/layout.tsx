import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const font = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GNX ● NSEC',
  description: 'This is The Official GNX Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${font.className}`} suppressHydrationWarning={true}>
        <NavBar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
