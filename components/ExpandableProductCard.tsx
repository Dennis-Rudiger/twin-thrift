"use client"
import { useState } from 'react'
import Link from 'next/link'
import { formatKES } from '@/lib/currency'
import type { Product } from '@/lib/products'

type Props = { product: Product }

export default function ExpandableProductCard({ product }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-lg border border-lilac/30 bg-antique ${open ? 'p-4' : 'p-3'} transition-all duration-200`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="block w-full text-left"
      >
        {/* Title row */}
        <div className={`flex items-center justify-between gap-2 ${open ? 'text-base' : 'text-sm'}`}>
          <p className="truncate font-medium text-ink">{product.name}</p>
          <p className="shrink-0 text-ink/80">{formatKES(product.price)}</p>
        </div>
        <p className={`truncate text-ink/60 ${open ? 'mt-1' : ''}`}>{product.brand}</p>

        {/* Image */}
        <div className={`mt-3 overflow-hidden rounded-md ${open ? 'aspect-[3/4]' : 'h-28'}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
      </button>

      {/* Expanded actions */}
      {open && (
        <div className="mt-3 flex items-center justify-between gap-3 text-sm">
          <p className="line-clamp-2 text-ink/70">{product.description}</p>
          <Link href={`/product/${product.slug}`} className="shrink-0 rounded-md bg-ink px-3 py-1.5 text-oat no-underline">
            View
          </Link>
        </div>
      )}
    </div>
  )
}
