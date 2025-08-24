import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'
import { getSiteUrl } from '@/lib/site'

const url = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: 'Twin Thrift | Quality Secondhand Fashion',
    template: '%s • Twin Thrift',
  },
  description: 'Shop curated pre-loved fashion with a unique Twin Thrift vibe.',
  openGraph: {
    type: 'website',
    url,
    siteName: 'Twin Thrift',
    title: 'Twin Thrift | Quality Secondhand Fashion',
    description: 'Curated pre‑loved style — sustainable, local, effortless.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twin Thrift | Quality Secondhand Fashion',
    description: 'Curated pre‑loved style — sustainable, local, effortless.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: url,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col bg-oat text-ink">
        <CartProvider>
          <Navbar />
          <main className="flex-1 container-responsive py-8">
            {children}
          </main>
          <Footer />
        </CartProvider>
  <Analytics />
      </body>
    </html>
  )
}
