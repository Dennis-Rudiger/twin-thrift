import { getProductBySlug } from '@/lib/products'
import AddToCartButton from '@/components/AddToCartButton'
import { notFound } from 'next/navigation'

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)
  if (!product) return notFound()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.image} alt={product.name} className="w-full rounded-xl border border-lilac/30" />
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-ink/70">{product.brand} • {product.category}{product.size ? ` • Size ${product.size}` : ''}</p>
  <p className="text-2xl">${product.price.toFixed(2)}</p>
  <AddToCartButton id={product.id} name={product.name} price={product.price} image={product.image} />
        <p className="text-ink/70">{product.description}</p>
      </div>
    </div>
  )
}
