"use client"
import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { formatKES } from '@/lib/currency'
import { getProductById } from '@/lib/products'

type Props = {
  id: string
  name: string
  price: number
  image: string
  qty: number
  compact?: boolean // for MiniCart tighter spacing
}

export default function ExpandableCartItem({ id, name, price, image, qty, compact }: Props) {
  const [open, setOpen] = useState(false)
  const cart = useCart()
  const product = getProductById(id)

  const containerCls = compact
    ? 'flex gap-3 rounded-xl border border-lilac/30 bg-oat/70 p-3'
    : 'flex gap-4 rounded-xl border border-lilac/30 bg-oat p-4'

  return (
    <div className={containerCls}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className={compact ? 'h-16 w-16 rounded-md object-cover' : 'h-24 w-24 rounded-md object-cover'} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className={compact ? 'truncate text-sm font-medium' : 'truncate text-base font-medium'}>{name}</p>
            <p className={compact ? 'text-xs text-ink/60' : 'text-sm text-ink/60'}>{formatKES(price)} each</p>
          </div>
          <div className="flex items-center gap-2">
            <p className={compact ? 'shrink-0 text-sm font-semibold' : 'shrink-0 text-base font-semibold'}>{formatKES(price * qty)}</p>
            <button
              aria-label={open ? 'Collapse item' : 'Expand item'}
              className="rounded-md border border-lilac/40 px-2 py-1"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? '▾' : '▸'}
            </button>
          </div>
        </div>

        {/* Quantity controls */}
        <div className={compact ? 'mt-2 flex items-center gap-2' : 'mt-3 flex items-center gap-2'}>
          <button className="rounded-md border border-lilac/40 px-2 py-1" onClick={() => cart.decrement(id)}>-</button>
          <input
            aria-label="Quantity"
            className={compact ? 'w-12 rounded-md border border-lilac/40 bg-blush p-1 text-center text-sm' : 'w-14 rounded-md border border-lilac/40 bg-blush p-1 text-center'}
            value={qty}
            onChange={(e) => {
              const v = parseInt(e.target.value || '0', 10)
              if (Number.isFinite(v)) cart.update(id, Math.max(0, v))
            }}
          />
          <button className="rounded-md border border-lilac/40 px-2 py-1" onClick={() => cart.increment(id)}>+</button>
          <button className="ml-auto rounded-md border border-lilac/40 px-2 py-1" onClick={() => cart.remove(id)}>Remove</button>
        </div>

        {/* Expanded details */}
        {open && product && (
          <div className={compact ? 'mt-2 space-y-1 text-xs' : 'mt-3 space-y-1 text-sm'}>
            <p className="text-ink/70">
              <span className="font-medium">Brand:</span> {product.brand}
              {product.size ? <span> • <span className="font-medium">Size:</span> {product.size}</span> : null}
            </p>
            <p className="text-ink/70">
              <span className="font-medium">Category:</span> {product.category}
            </p>
            {product.description ? (
              <p className="text-ink/70 line-clamp-3">{product.description}</p>
            ) : null}
            <a href={`/product/${product.slug}`} className="inline-block rounded-md border border-lilac/40 px-2 py-1 no-underline">View details</a>
          </div>
        )}
      </div>
    </div>
  )
}
