import { getProductBySlug } from '@/lib/products'
import { formatKES } from '@/lib/currency'
import AddToCartButton from '@/components/AddToCartButton'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getSiteUrl } from '@/lib/site'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return { title: 'Product not found' }
  const url = getSiteUrl()
  const title = `${product.name} — ${product.brand}`
  const description = `${product.brand} ${product.category}${product.size ? ' • Size ' + product.size : ''} • ${formatKES(product.price)}`
  const canonical = `${url}/product/${product.slug}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      images: product.image ? [{ url: product.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: product.image ? [product.image] : undefined,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return notFound()
  const siteUrl = getSiteUrl()
  const canonical = `${siteUrl}/product/${product.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [product.image],
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    category: product.category,
    sku: product.id,
    url: canonical,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'KES',
      price: product.price,
      availability: 'https://schema.org/InStock',
      url: canonical,
    },
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.image} alt={product.name} className="aspect-[3/4] w-full rounded-xl border border-lilac/30 object-cover" />
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-ink/70">{product.brand} • {product.category}{product.size ? ` • Size ${product.size}` : ''}</p>
  <p className="text-2xl">{formatKES(product.price)}</p>
  <AddToCartButton id={product.id} name={product.name} price={product.price} image={product.image} />
        <p className="text-ink/70">{product.description}</p>
      </div>
    </div>
  )
}
