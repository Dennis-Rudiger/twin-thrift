"use client"
import { useState, useMemo, useEffect } from 'react'
import { useCart } from '@/components/CartProvider'
import { formatKES } from '@/lib/currency'

export default function MiniCart() {
  const cart = useCart()
  const [open, setOpen] = useState(false)
  const hasItems = cart.items.length > 0
  const badge = useMemo(() => (cart.count > 99 ? '99+' : String(cart.count)), [cart.count])

  // Prevent page scroll when drawer is open
  useEffect(() => {
    const root = document.documentElement
    const prev = root.style.overflow
    if (open) root.style.overflow = 'hidden'
    return () => { root.style.overflow = prev }
  }, [open])

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Open cart"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative inline-flex items-center gap-2 rounded-md border border-lilac/40 bg-blush/80 px-3 py-2"
      >
        <span>Cart</span>
        <span className="rounded-full bg-ink px-2 py-0.5 text-xs text-oat">{badge}</span>
      </button>

      {/* Drawer and backdrop (rendered only when open) */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-[2px]"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <aside
            className="fixed right-0 top-0 z-[61] h-full w-[90vw] max-w-sm overflow-y-auto border-l border-lilac/30 bg-oat/60 p-4 backdrop-blur-xl shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mini cart"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Your cart</h2>
              <button className="rounded-md border border-lilac/40 px-2 py-1" onClick={() => setOpen(false)}>Close</button>
            </div>
            {!hasItems ? (
              <p className="text-ink/70">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.items.map((it) => (
                  <div key={it.id} className="flex gap-3 rounded-xl border border-lilac/30 bg-oat/70 p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={it.image} alt="" className="h-16 w-16 rounded-md object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 text-sm">
                        <p className="truncate font-medium">{it.name}</p>
                        <p className="shrink-0">{formatKES(it.price * it.qty)}</p>
                      </div>
                      <p className="text-xs text-ink/60">{formatKES(it.price)} each</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button className="rounded-md border border-lilac/40 px-2 py-1" onClick={() => cart.decrement(it.id)}>-</button>
                        <input
                          aria-label="Quantity"
                          className="w-12 rounded-md border border-lilac/40 bg-blush p-1 text-center text-sm"
                          value={it.qty}
                          onChange={(e) => {
                            const v = parseInt(e.target.value || '0', 10)
                            if (Number.isFinite(v)) cart.update(it.id, Math.max(0, v))
                          }}
                        />
                        <button className="rounded-md border border-lilac/40 px-2 py-1" onClick={() => cart.increment(it.id)}>+</button>
                        <button className="ml-auto rounded-md border border-lilac/40 px-2 py-1" onClick={() => cart.remove(it.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-lilac/30 pt-3">
                  <p className="text-sm">Subtotal</p>
                  <p className="text-lg font-semibold">{formatKES(cart.subtotal)}</p>
                </div>
                <a href="/cart" className="block rounded-md bg-ink px-4 py-2 text-center text-oat no-underline">Review cart</a>
                <button className="w-full rounded-md border border-lilac/40 bg-blush px-4 py-2" onClick={() => cart.clear()}>Clear</button>
              </div>
            )}
          </aside>
        </>
      )}
    </div>
  )
}
