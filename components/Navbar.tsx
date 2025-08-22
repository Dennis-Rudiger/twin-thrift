import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-blush/80 backdrop-blur supports-[backdrop-filter]:bg-blush/60 border-b border-lilac/30">
      <div className="container-responsive flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img src="/logo.svg" alt="Twin Thrift" className="h-7 w-auto" />
          <span className="font-semibold tracking-wide">Twin Thrift</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/shop" className="no-underline hover:underline">Shop</Link>
          <Link href="/sell" className="no-underline hover:underline">Sell</Link>
          <Link href="/about" className="no-underline hover:underline">About</Link>
        </nav>
      </div>
    </header>
  )
}
