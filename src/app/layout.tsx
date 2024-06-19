import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './global.css'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'mason wang',
    template: '%s | mason wang',
  },
  description: 'i want to share my work, my thoughts, my art - me - with you.',
  openGraph: {
    title: 'mason wang',
    description: 'i want to share my work, my thoughts, my art - me - with you.',
    url: baseUrl,
    siteName: 'mason wang',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'mason wang',
    description:
      'i want to share my work, my thoughts, my art - me - with you.',
    images: [
      {
        url: '/twitter-image.jpg',
        width: 1233,
        height: 1233,
        alt: 'mason wang',
      },
    ],
    card: 'summary',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: any) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
