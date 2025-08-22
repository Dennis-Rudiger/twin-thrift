export default function SellPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="rounded-2xl border border-lilac/30 bg-gradient-to-br from-blush to-sand p-8 md:p-12">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">Set your style free</h1>
          <p className="text-ink/70">
            Turn your pre‑loved pieces into payouts. We handle the quality checks, photography and shipping 
            so you can declutter without the hassle.
          </p>
          <div className="flex gap-3">
            <a href="#start" className="rounded-md bg-ink text-oat px-5 py-2.5 no-underline">Start a clear‑out</a>
            <a href="#faq" className="rounded-md border border-ink/40 px-5 py-2.5 no-underline">How it works</a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: '01', t: 'Request a bag', d: 'Tell us about your items and request a pre‑paid return bag.' },
            { n: '02', t: 'Send it in', d: 'Drop it off or schedule a pickup—your choice.' },
            { n: '03', t: 'We list & ship', d: 'We authenticate, photograph, list, and ship when sold.' },
            { n: '04', t: 'Get paid', d: 'Track sales and cash out your balance at any time.' },
          ].map((s) => (
            <li key={s.n} className="rounded-xl border border-lilac/30 bg-antique p-5">
              <div className="text-ink/50 text-xs font-medium">{s.n}</div>
              <div className="mt-1 font-medium">{s.t}</div>
              <div className="text-ink/70 text-sm mt-1">{s.d}</div>
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
        <ul className="flex flex-wrap gap-2">
          {['Dresses', 'Jackets & Coats', 'Jeans', 'Tops', 'Skirts', 'Knitwear', 'Bags', 'Shoes', 'Activewear'].map((x) => (
            <li key={x} className="rounded-full border border-lilac/40 bg-blush px-3 py-1 text-sm">{x}</li>
          ))}
        </ul>
        <p className="text-ink/60 text-sm">We don’t accept items with heavy wear, damage, or counterfeit branding.</p>
      </section>

      {/* Payouts & fees */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Payouts & fees</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-lilac/30 bg-sand p-5">
            <div className="font-medium">Commission</div>
            <div className="text-ink/70 text-sm">Transparent sliding scale based on final sale price.</div>
          </div>
          <div className="rounded-xl border border-lilac/30 bg-sand p-5">
            <div className="font-medium">Instant balance</div>
            <div className="text-ink/70 text-sm">Easily track sales and withdraw your funds any time.</div>
          </div>
          <div className="rounded-xl border border-lilac/30 bg-sand p-5">
            <div className="font-medium">Unsold items</div>
            <div className="text-ink/70 text-sm">Choose to donate, return, or discount after a period.</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">FAQs</h2>
        <div className="grid gap-3">
          {[
            { q: 'How long until my items go live?', a: 'Typically 3–7 business days after we receive and quality check them.' },
            { q: 'What if something doesn’t sell?', a: 'We’ll follow your preference: donate, return, or further discount.' },
            { q: 'How do I get paid?', a: 'Payouts are available in your account balance and can be withdrawn any time.' },
          ].map((f) => (
            <details key={f.q} className="rounded-lg border border-lilac/30 bg-blush p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="text-ink/70 mt-2 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="rounded-2xl border border-lilac/30 bg-oat p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Ready to clear out?</h3>
          <p className="text-ink/70 text-sm">Send your pieces today—we’ll handle the rest.</p>
        </div>
        <a href="#" className="rounded-md bg-ink text-oat px-5 py-2.5 no-underline">Request a bag</a>
      </section>
    </div>
  )
}
