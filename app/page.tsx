import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { getProducts, type Product } from '@/lib/products'

export default async function HomePage() {
  const products = await getProducts({ limit: 8 })
  return (
    <div className="space-y-12">
      <Hero />
      <section className="space-y-6">
        <header className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">New in</h2>
          <a href="/shop" className="text-sm">Shop all →</a>
        </header>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
