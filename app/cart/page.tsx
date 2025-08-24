"use client"
import { useCart } from '@/components/CartProvider'
import { formatKES } from '@/lib/currency'
import { buildCartInquiryText, buildWhatsAppUrl } from '@/lib/whatsapp'

export default function CartPage() {
  const cart = useCart()
  const hasItems = cart.items.length > 0
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Your cart</h1>
      {!hasItems ? (
        <p className="text-ink/70">Your cart is currently empty.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-[1fr_320px]">
          <ul className="space-y-4">
            {cart.items.map((it) => (
              <li key={it.id} className="flex gap-4 rounded-xl border border-lilac/30 bg-oat p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.image} alt="" className="h-24 w-24 rounded-md object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-base font-medium">{it.name}</p>
                      <p className="text-sm text-ink/60">{formatKES(it.price)} each</p>
                    </div>
                    <p className="shrink-0 text-base font-semibold">{formatKES(it.price * it.qty)}</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button className="rounded-md border border-lilac/40 px-2 py-1" onClick={() => cart.decrement(it.id)}>-</button>
                    <input
                      aria-label="Quantity"
                      className="w-14 rounded-md border border-lilac/40 bg-blush p-1 text-center"
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
              </li>
            ))}
          </ul>
          <aside className="h-max rounded-xl border border-lilac/30 bg-oat p-4">
            <h2 className="text-lg font-semibold">Order summary</h2>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-medium">{formatKES(cart.subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-ink/60">Shipping and taxes are calculated at checkout.</p>
            <a
              href={buildWhatsAppUrl(
                process.env.NEXT_PUBLIC_WHATSAPP_PHONE || process.env.WHATSAPP_PHONE || '',
                buildCartInquiryText({
                  items: cart.items.map((it) => ({ name: it.name, qty: it.qty, price: it.price })),
                  subtotal: cart.subtotal,
                })
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded-md bg-green-600 px-4 py-2 text-center text-oat no-underline"
            >
              WhatsApp to order
            </a>
            <button className="mt-2 w-full rounded-md border border-lilac/40 bg-blush px-4 py-2" onClick={() => cart.clear()}>Clear cart</button>
          </aside>
        </div>
      )}
    </div>
  )
}
