import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { getProducts, type Product } from '@/lib/products'
import { getSiteUrl } from '@/lib/site'

export default async function HomePage() {
  const products = await getProducts({ limit: 8 })
  const url = getSiteUrl()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Twin Thrift',
    url,
    sameAs: [
      // Add socials when available
    ],
  }
  return (
    <div className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <section className="space-y-6">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">New in</h2>
          <a href="/shop" className="text-sm">Shop all →</a>
        </header>
  <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.map((p: Product) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
