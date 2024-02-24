import './globals.css'

// import ogImage from '@/assets/images/og.webp'
import { defaultMetadata } from '@/lib/metadata/default'
import { Footer, Header } from '@/componets'
import { antonio } from '@/lib/fonts/googleFonts'
import Script from 'next/script'


export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={antonio.className}>
        <Header />

        <main className='mainLayout'>
          {children}
        </main>

        <Footer />
      </body>
      <Script src='script.js' />
    </html>
  )
}
