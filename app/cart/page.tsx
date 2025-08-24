"use client"
import { useCart } from '@/components/CartProvider'
import { formatKES } from '@/lib/currency'
import { buildCartInquiryText, buildWhatsAppUrl } from '@/lib/whatsapp'
import ExpandableCartItem from '@/components/ExpandableCartItem'

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
              <li key={it.id}>
                <ExpandableCartItem {...it} />
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
                  tagline: process.env.NEXT_PUBLIC_WHATSAPP_TAGLINE || '',
                })
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded-md bg-green-600 px-4 py-2 text-center text-oat no-underline"
            >
              WhatsApp to order
            </a>
            <button
              className="mt-2 w-full rounded-md border border-lilac/40 bg-oat px-4 py-2"
              onClick={async () => {
                const text = buildCartInquiryText({
                  items: cart.items.map((it) => ({ name: it.name, qty: it.qty, price: it.price })),
                  subtotal: cart.subtotal,
                  tagline: process.env.NEXT_PUBLIC_WHATSAPP_TAGLINE || '',
                })
                try {
                  await navigator.clipboard.writeText(text)
                  alert("Message copied. If it didn't prefill, paste it in WhatsApp.")
                } catch {
                  const w = window.open('', '_blank', 'width=600,height=400')
                  w?.document.write(`<pre style="white-space:pre-wrap;font:14px system-ui;padding:16px;">${text.replace(/</g, '&lt;')}</pre>`)
                }
              }}
            >
              Copy message
            </button>
            <button className="mt-2 w-full rounded-md border border-lilac/40 bg-blush px-4 py-2" onClick={() => cart.clear()}>Clear cart</button>
          </aside>
        </div>
      )}
    </div>
  )
}
