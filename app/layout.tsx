// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import './globals.css'

// import ogImage from '@/assets/images/og.webp'
import { defaultMetadata } from '@/lib/metadata/default'
import { Footer, Header } from '@/componets'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '500',
  subsets: ['latin']
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />

        <main className='mainLayout'>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
