import Link from 'next/link'
import type { Product } from '@/lib/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block no-underline">
      <div className="aspect-[3/4] overflow-hidden rounded-lg border border-lilac/30 bg-antique">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={product.name}
          src={product.image}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2 text-sm">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate font-medium text-ink">{product.name}</p>
          <p className="text-ink/80">${product.price.toFixed(2)}</p>
        </div>
        <p className="text-ink/60 truncate">{product.brand}</p>
      </div>
    </Link>
  )
}
