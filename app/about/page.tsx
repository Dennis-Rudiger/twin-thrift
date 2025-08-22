export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <section className="rounded-2xl border border-lilac/30 bg-gradient-to-br from-sand to-blush p-8 md:p-12">
        <div className="max-w-3xl space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">Our story & mission</h1>
          <p className="text-ink/70">
            We started Twin Thrift to make circular fashion feel effortless. From first browse to second life,
            we look after every item on its journey between wardrobes.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">What we stand for</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Quality assured', d: 'Every piece is checked for authenticity and condition before it goes live.' },
            { t: 'Hassle‑free', d: 'We handle photography, listings, shipping, and returns so you don’t have to.' },
            { t: 'Closing the loop', d: 'Our goal is to extend the life of clothing and reduce fashion waste.' },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-lilac/30 bg-antique p-5">
              <div className="font-medium">{x.t}</div>
              <div className="text-ink/70 text-sm mt-1">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Sustainability in action</h2>
        <ul className="list-disc pl-5 text-ink/70 max-w-3xl">
          <li>Prioritizing re‑wearing over new production</li>
          <li>Partnering on donations for unsold items</li>
          <li>Recyclable packaging and minimal plastics</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">A quick timeline</h2>
        <ol className="relative border-l border-lilac/30 pl-6 space-y-4">
          {[{ y: '2024', e: 'Concept and first curated drops' }, { y: '2025', e: 'Full marketplace launch' }].map((i) => (
            <li key={i.y} className="relative">
              <span className="absolute -left-[11px] top-1 h-2.5 w-2.5 rounded-full bg-ink" />
              <div className="text-sm text-ink/60">{i.y}</div>
              <div className="font-medium">{i.e}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* Values CTA */}
      <section className="rounded-2xl border border-lilac/30 bg-oat p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Join the Twin Thrift community</h3>
          <p className="text-ink/70 text-sm">Discover new favorites—and give yours a second life.</p>
        </div>
        <a href="/shop" className="rounded-md bg-ink text-oat px-5 py-2.5 no-underline">Shop pre‑loved</a>
      </section>
    </div>
  )
}
