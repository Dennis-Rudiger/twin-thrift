import { getProducts, type Product } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export const dynamic = 'force-static'

export default async function ShopPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const q = typeof searchParams.q === 'string' ? searchParams.q : undefined
  const brand = typeof searchParams.brand === 'string' ? searchParams.brand : undefined
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined
  const size = typeof searchParams.size === 'string' ? searchParams.size : undefined
  const min = typeof searchParams.min === 'string' ? Number(searchParams.min) : undefined
  const max = typeof searchParams.max === 'string' ? Number(searchParams.max) : undefined

  const products = await getProducts({ q, brand, category, size, min, max })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Shop</h1>
      <form className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <input name="q" placeholder="Search" defaultValue={q} className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="brand" placeholder="Brand" defaultValue={brand} className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="category" placeholder="Category" defaultValue={category} className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="size" placeholder="Size" defaultValue={size} className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="min" placeholder="Min" defaultValue={min} className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <input name="max" placeholder="Max" defaultValue={max} className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
        <button className="rounded-md bg-ink text-oat px-4 py-2">Filter</button>
      </form>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p: Product) => (
          <li key={p.id}><ProductCard product={p} /></li>
        ))}
      </ul>
    </div>
  )
}
