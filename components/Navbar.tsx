"use client"
import Link from 'next/link'
import { useState } from 'react'
import MiniCart from '@/components/MiniCart'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-lilac/30 bg-blush/80 backdrop-blur supports-[backdrop-filter]:bg-blush/60">
      <div className="container-responsive flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Twin Thrift" className="h-7 w-auto" />
          <span className="font-semibold tracking-wide">Twin Thrift</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/shop" className="no-underline hover:underline">Shop</Link>
          <Link href="/sell" className="no-underline hover:underline">Sell</Link>
          <Link href="/about" className="no-underline hover:underline">About</Link>
          <Link href="/contact" className="no-underline hover:underline">Contact</Link>
          <MiniCart />
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <MiniCart />
          <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-lilac/40 bg-blush/80 p-2 md:hidden"
          >
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        className={`${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} grid overflow-hidden transition-all duration-200 md:hidden`}
      >
        <nav className="container-responsive flex flex-col gap-2 pb-4 text-sm">
          <Link onClick={() => setOpen(false)} href="/shop" className="rounded-md px-2 py-2 no-underline hover:underline">Shop</Link>
          <Link onClick={() => setOpen(false)} href="/sell" className="rounded-md px-2 py-2 no-underline hover:underline">Sell</Link>
          <Link onClick={() => setOpen(false)} href="/about" className="rounded-md px-2 py-2 no-underline hover:underline">About</Link>
          <Link onClick={() => setOpen(false)} href="/contact" className="rounded-md px-2 py-2 no-underline hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
