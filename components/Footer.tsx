export default function Footer() {
  return (
    <footer className="mt-16 border-t border-lilac/30 bg-gradient-to-b from-ink via-ink/95 to-ink/90 text-oat">
      <div className="container-responsive grid gap-10 py-12 text-sm md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-3">
          <p className="font-semibold text-oat">Twin Thrift</p>
          <p className="text-oat/80">A curated marketplace for pre‑loved style—thoughtful, effortless, planet‑kind.</p>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full border border-lilac/40 bg-blush/90 text-ink px-3 py-1 no-underline" href="/about">Our story</a>
            <a className="rounded-full border border-lilac/40 bg-oat/90 text-ink px-3 py-1 no-underline" href="/sell">Start selling</a>
          </div>
        </div>

        {/* Shop */}
        <nav className="space-y-2">
          <p className="font-medium">Shop</p>
          <a className="block no-underline hover:underline" href="/shop">All</a>
          <a className="block no-underline hover:underline" href="/shop?category=Dresses">Dresses</a>
          <a className="block no-underline hover:underline" href="/shop?category=Jackets">Outerwear</a>
          <a className="block no-underline hover:underline" href="/shop?category=Bags">Bags</a>
        </nav>

        {/* Help */}
        <nav className="space-y-2">
          <p className="font-medium">Help</p>
          <a className="block no-underline hover:underline" href="/sell#faq">Selling FAQs</a>
          <a className="block no-underline hover:underline" href="/about">About</a>
          <a className="block no-underline hover:underline" href="#">Shipping & returns</a>
          <a className="block no-underline hover:underline" href="#">Contact</a>
        </nav>

        {/* Community (WhatsApp) */}
        <div className="space-y-3">
          <p className="font-medium">Community</p>
          <p className="text-oat/80">Join our WhatsApp group for drop alerts, sizing help, and style swaps.</p>
          <a
            href="#" /* Replace with your real invite link */
            className="inline-flex items-center gap-2 rounded-full border border-lilac/40 bg-green-200 px-3 py-1 text-ink no-underline"
          >
            <span className="h-2 w-2 rounded-full bg-green-600" />
            <span>Join on WhatsApp</span>
          </a>
          <div className="pt-2 text-xs text-oat/70">
            Prefer socials?
            <div className="mt-2 flex gap-3">
              <a className="no-underline" href="#">Instagram</a>
              <span>•</span>
              <a className="no-underline" href="#">Pinterest</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-lilac/20 py-4">
        <div className="container-responsive flex flex-col items-center justify-between gap-3 text-xs text-oat/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Twin Thrift</p>
          <div className="flex items-center gap-3">
            <a className="no-underline" href="#">Privacy</a>
            <span>•</span>
            <a className="no-underline" href="#">Terms</a>
            <span>•</span>
            <span className="rounded-full bg-lilac/30 px-2 py-0.5 text-oat/90">Sand • Lilac • Blush • Oat</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
