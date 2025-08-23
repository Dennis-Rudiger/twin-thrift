import GlassCard from '@/components/GlassCard'

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <GlassCard className="p-8 md:p-12" imageUrl="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" priority>
        <div className="max-w-3xl space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">Our story & mission</h1>
          <p className="text-ink/80">
            We started Twin Thrift to make circular fashion feel effortless. From first browse to second life,
            we look after every item on its journey between wardrobes.
          </p>
        </div>
      </GlassCard>

      {/* Pillars */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">What we stand for</h2>
  <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Quality assured', d: 'Every piece is checked for authenticity and condition before it goes live.', img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop' },
            { t: 'Hassle‑free', d: 'We handle photography, listings, shipping, and returns so you don’t have to.', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop' },
            { t: 'Closing the loop', d: 'Our goal is to extend the life of clothing and reduce fashion waste.', img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop' },
          ].map((x) => (
            <GlassCard key={x.t} imageUrl={x.img} className="rounded-xl p-5">
              <div className="font-medium">{x.t}</div>
              <div className="text-ink/80 text-sm mt-1">{x.d}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <GlassCard className="p-6" imageUrl="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?q=80&w=1600&auto=format&fit=crop">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Sustainability in action</h2>
        <ul className="list-disc pl-5 text-ink/80 max-w-3xl">
          <li>Prioritizing re‑wearing over new production</li>
          <li>Partnering on donations for unsold items</li>
          <li>Recyclable packaging and minimal plastics</li>
        </ul>
      </GlassCard>

      {/* Timeline */}
      <GlassCard className="p-6" imageUrl="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">A quick timeline</h2>
        <ol className="relative border-l border-lilac/40 pl-6 space-y-4">
          {[{ y: '2024', e: 'Concept and first curated drops' }, { y: '2025', e: 'Full marketplace launch' }].map((i) => (
            <li key={i.y} className="relative">
              <span className="absolute -left-[11px] top-1 h-2.5 w-2.5 rounded-full bg-ink" />
              <div className="text-sm text-ink/60">{i.y}</div>
              <div className="font-medium">{i.e}</div>
            </li>
          ))}
        </ol>
      </GlassCard>

      {/* Values CTA */}
      <GlassCard className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4" imageUrl="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop">
        <div>
          <h3 className="text-xl font-semibold">Join the Twin Thrift community</h3>
          <p className="text-ink/80 text-sm">Discover new favorites—and give yours a second life.</p>
        </div>
        <a href="/shop" className="rounded-md bg-ink text-oat px-5 py-2.5 no-underline">Shop pre‑loved</a>
      </GlassCard>
    </div>
  )
}
