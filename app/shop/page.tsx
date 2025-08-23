import ProductCard from '@/components/ProductCard'
import Filters from '@/components/Filters'
import { getProducts, type Product } from '@/lib/products'

export const dynamic = 'force-static'

export default async function ShopPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams
  const q = typeof sp.q === 'string' ? sp.q : undefined
  const brand = typeof sp.brand === 'string' ? sp.brand : undefined
  const category = typeof sp.category === 'string' ? sp.category : undefined
  const size = typeof sp.size === 'string' ? sp.size : undefined
  const min = typeof sp.min === 'string' ? Number(sp.min) : undefined
  const max = typeof sp.max === 'string' ? Number(sp.max) : undefined

  const products = await getProducts({ q, brand, category, size, min, max })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Shop</h1>
      <form className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-6">
        <input name="q" placeholder="Search" defaultValue={q} className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="brand" placeholder="Brand" defaultValue={brand} className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="category" placeholder="Category" defaultValue={category} className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="size" placeholder="Size" defaultValue={size} className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="min" placeholder="Min" defaultValue={min} className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="max" placeholder="Max" defaultValue={max} className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <button className="w-full rounded-md bg-ink px-4 py-2 text-oat md:w-auto">Filter</button>
      </form>
  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {products.map((p: Product) => (
          <li key={p.id}><ProductCard product={p} /></li>
        ))}
      </ul>
    </div>
  )
}
