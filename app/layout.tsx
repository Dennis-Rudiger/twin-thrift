import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'

export const metadata: Metadata = {
  title: 'Twin Thrift | Quality Secondhand Fashion',
  description: 'Shop curated pre-loved fashion with a unique Twin Thrift vibe.',
  metadataBase: new URL('https://twin-thrift.local'),
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
      </body>
    </html>
  )
}
