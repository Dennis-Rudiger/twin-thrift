export default function Footer() {
  return (
    <footer className="mt-16 border-t border-lilac/30 bg-sand/60">
      <div className="container-responsive py-10 text-sm grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="font-semibold mb-2">Twin Thrift</p>
          <p className="text-ink/70">A curated marketplace for pre‑loved style.</p>
        </div>
        <nav className="space-y-2">
          <a className="block no-underline hover:underline" href="/shop">Shop</a>
          <a className="block no-underline hover:underline" href="/sell">Sell</a>
          <a className="block no-underline hover:underline" href="/about">About</a>
        </nav>
        <div>
          <p className="font-semibold mb-2">Newsletter</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Email" className="flex-1 rounded-md border border-lilac/40 bg-blush px-3 py-2" />
            <button className="rounded-md bg-ink text-oat px-4 py-2">Sign up</button>
          </form>
        </div>
      </div>
      <div className="border-t border-lilac/20 py-4 text-center text-xs text-ink/60">© {new Date().getFullYear()} Twin Thrift</div>
    </footer>
  )
}
