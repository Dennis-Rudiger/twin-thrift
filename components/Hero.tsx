export default function Hero() {
  return (
    <section className="rounded-2xl border border-lilac/30 bg-gradient-to-br from-blush to-sand p-8 md:p-12">
      <div className="max-w-2xl space-y-4">
  <h1 className="font-serif text-4xl md:text-5xl leading-tight">
          Pre‑loved, hand‑picked for you.
        </h1>
        <p className="text-ink/70">
          Shop quality secondhand fashion in curated edits. Labels for less, rescued and ready to wear.
        </p>
        <div className="flex gap-3">
          <a href="/shop" className="rounded-md bg-ink text-oat px-5 py-2.5 no-underline">Shop now</a>
          <a href="/sell" className="rounded-md border border-ink/40 px-5 py-2.5 no-underline">Sell your items</a>
        </div>
      </div>
    </section>
  )
}
