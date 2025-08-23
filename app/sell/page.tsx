import GlassCard from '@/components/GlassCard'

export default function SellPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <GlassCard className="p-8 md:p-12" imageUrl="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop" priority>
        <div className="max-w-2xl space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">Set your style free</h1>
          <p className="text-ink/80">
            Turn your pre‑loved pieces into payouts. We handle the quality checks, photography and shipping 
            so you can declutter without the hassle.
          </p>
          <div className="flex gap-3">
            <a href="#start" className="rounded-md bg-ink text-oat px-5 py-2.5 no-underline">Start a clear‑out</a>
            <a href="#faq" className="rounded-md border border-ink/40 px-5 py-2.5 no-underline">How it works</a>
          </div>
        </div>
      </GlassCard>

      {/* How it works */}
      <section id="how" className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
  <ol className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: '01', t: 'Request a bag', d: 'Tell us about your items and request a pre‑paid return bag.' },
            { n: '02', t: 'Send it in', d: 'Drop it off or schedule a pickup—your choice.' },
            { n: '03', t: 'We list & ship', d: 'We authenticate, photograph, list, and ship when sold.' },
            { n: '04', t: 'Get paid', d: 'Track sales and cash out your balance at any time.' },
          ].map((s) => (
            <li key={s.n}>
              <GlassCard className="rounded-xl p-5" imageUrl="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop">
                <div className="text-ink/60 text-xs font-medium">{s.n}</div>
                <div className="mt-1 font-medium">{s.t}</div>
                <div className="text-ink/80 text-sm mt-1">{s.d}</div>
              </GlassCard>
            </li>
          ))}
        </ol>
      </section>

      {/* What we accept */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What we accept</h2>
        <p className="text-ink/70 max-w-2xl">
          We look for in‑season, gently‑worn pieces across women’s and men’s apparel, footwear, and accessories. 
          Premium high‑street and designer labels do best.
        </p>
        <GlassCard className="p-4" imageUrl="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop">
          <ul className="flex flex-wrap gap-2">
            {['Dresses', 'Jackets & Coats', 'Jeans', 'Tops', 'Skirts', 'Knitwear', 'Bags', 'Shoes', 'Activewear'].map((x) => (
              <li key={x} className="rounded-full border border-lilac/40 bg-blush/90 px-3 py-1 text-sm text-ink">{x}</li>
            ))}
          </ul>
        </GlassCard>
        <p className="text-ink/60 text-sm">We don’t accept items with heavy wear, damage, or counterfeit branding.</p>
      </section>

      {/* Payouts & fees */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Payouts & fees</h2>
  <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
          {[
            { t: 'Commission', d: 'Transparent sliding scale based on final sale price.', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
            { t: 'Instant balance', d: 'Easily track sales and withdraw your funds any time.', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop' },
            { t: 'Unsold items', d: 'Choose to donate, return, or discount after a period.', img: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?q=80&w=1200&auto=format&fit=crop' },
          ].map((c) => (
            <GlassCard key={c.t} className="rounded-xl p-5" imageUrl={c.img}>
              <div className="font-medium">{c.t}</div>
              <div className="text-ink/80 text-sm">{c.d}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">FAQs</h2>
  <div className="flex flex-col gap-3 sm:grid">
          {[
            { q: 'How long until my items go live?', a: 'Typically 3–7 business days after we receive and quality check them.' },
            { q: 'What if something doesn’t sell?', a: 'We’ll follow your preference: donate, return, or further discount.' },
            { q: 'How do I get paid?', a: 'Payouts are available in your account balance and can be withdrawn any time.' },
          ].map((f, idx) => (
            <GlassCard key={f.q} className="p-4" imageUrl={idx % 2 === 0 ? 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop'}>
              <details>
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="text-ink/80 mt-2 text-sm">{f.a}</p>
              </details>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <GlassCard id="start" className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4" imageUrl="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop">
        <div>
          <h3 className="text-xl font-semibold">Ready to clear out?</h3>
          <p className="text-ink/80 text-sm">Send your pieces today—we’ll handle the rest.</p>
        </div>
        <a href="#" className="rounded-md bg-ink text-oat px-5 py-2.5 no-underline">Request a bag</a>
      </GlassCard>
    </div>
  )
}
