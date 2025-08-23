import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-lilac/30 bg-ink/90 p-8 md:p-12">
      {/* Background image from Unsplash */}
      <Image
        aria-hidden
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop"
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="pointer-events-none absolute inset-0 object-cover object-center opacity-35"
        style={{ objectPosition: 'center 25%' }}
      />
      <div className="mx-auto max-w-7xl">
        {/* Glassmorphism content panel */}
        <div className="relative max-w-2xl rounded-2xl border border-oat/30 bg-oat/15 p-6 md:p-8 backdrop-blur-xl shadow-xl">
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -right-16 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

          <div className="space-y-5 text-ink">
          <div className="inline-flex items-center gap-2 rounded-full border border-oat/20 bg-oat/90 px-3 py-1 text-xs text-ink/80 shadow-sm">
            <span>Curated drops</span>
            <span>•</span>
            <span>Quality‑checked</span>
            <span>•</span>
            <span>Planet‑kind</span>
          </div>
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Pre‑loved, hand‑picked for you.
            </h1>
            <p className="text-ink/70 max-w-prose">
              Shop quality secondhand fashion in curated edits. Labels for less, rescued and ready to wear.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/shop" className="rounded-md bg-ink text-oat px-5 py-2.5 no-underline transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-ink/30">Shop now</a>
              <a href="/sell" className="rounded-md border border-ink/20 bg-transparent text-ink px-5 py-2.5 no-underline transition hover:bg-ink/5 focus:outline-none focus:ring-2 focus:ring-ink/20">Sell your items</a>
              <a href="/about" className="rounded-md border border-lilac/50 bg-blush/90 text-ink px-5 py-2.5 no-underline transition hover:bg-blush focus:outline-none focus:ring-2 focus:ring-lilac/60">Our story</a>
            </div>
            <div className="flex gap-6 pt-2 text-sm text-ink/60">
              <div>
                <div className="font-semibold text-ink">1,200+</div>
                <div>items re‑homed</div>
              </div>
              <div>
                <div className="font-semibold text-ink">4.8★</div>
                <div>community rated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
