import Link from 'next/link'
import type { Product } from '@/lib/products'

type Props = { product: Product; compact?: boolean }

export default function ProductCard({ product, compact = false }: Props) {
  return (
    <Link href={`/product/${product.slug}`} className="group block no-underline">
      <div className={`${compact ? 'aspect-[4/5] rounded-md' : 'aspect-[3/4] rounded-lg'} overflow-hidden border border-lilac/30 bg-antique`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={product.name}
          src={product.image}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className={`mt-2 ${compact ? 'text-[13px]' : 'text-sm'}`}>
        <div className="flex items-center justify-between gap-2">
          <p className="truncate font-medium text-ink">{product.name}</p>
          <p className="text-ink/80">${product.price.toFixed(2)}</p>
        </div>
        <p className="truncate text-ink/60">{product.brand}</p>
      </div>
    </Link>
  )
}
