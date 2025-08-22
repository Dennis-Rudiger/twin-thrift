import productsData from '@/data/products.json'

export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  category: string
  price: number
  size?: string
  image: string
  description?: string
}

export type ProductQuery = {
  q?: string
  brand?: string
  category?: string
  size?: string
  min?: number
  max?: number
  limit?: number
}

export async function getProducts(query: ProductQuery = {}): Promise<Product[]> {
  const list = (productsData as Product[]).filter((p) => {
    if (query.q && !(`${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(query.q.toLowerCase()))) return false
    if (query.brand && p.brand.toLowerCase() !== query.brand.toLowerCase()) return false
    if (query.category && p.category.toLowerCase() !== query.category.toLowerCase()) return false
    if (query.size && (p.size ?? '').toLowerCase() !== query.size.toLowerCase()) return false
    if (query.min != null && p.price < query.min) return false
    if (query.max != null && p.price > query.max) return false
    return true
  })
  if (query.limit) return list.slice(0, query.limit)
  return list
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return (productsData as Product[]).find((p) => p.slug === slug)
}
