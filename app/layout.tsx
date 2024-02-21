import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import ogImage from '@/assets/images/og.webp'
import { defaultMetadata } from '@/lib/metadata/default'

const inter = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
