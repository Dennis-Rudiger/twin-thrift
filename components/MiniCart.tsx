"use client"
import { useState, useMemo, useEffect } from 'react'
import { useCart } from '@/components/CartProvider'
import { formatKES } from '@/lib/currency'
import { buildCartInquiryText, buildWhatsAppUrl } from '@/lib/whatsapp'
import ExpandableCartItem from '@/components/ExpandableCartItem'

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
            className="fixed right-0 top-0 z-[61] h-full w-[95vw] max-w-xl overflow-y-auto border-l border-lilac/30 bg-oat/60 p-5 backdrop-blur-xl shadow-xl"
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
                  <ExpandableCartItem key={it.id} compact {...it} />
                ))}
                <div className="flex items-center justify-between border-t border-lilac/30 pt-3">
                  <p className="text-sm">Subtotal</p>
                  <p className="text-lg font-semibold">{formatKES(cart.subtotal)}</p>
                </div>
                <a href="/cart" className="block rounded-md bg-ink px-4 py-2 text-center text-oat no-underline">Review cart</a>
                {cart.items.length > 0 && (
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
                      className="block rounded-md border border-lilac/40 bg-green-200 px-4 py-2 text-center text-ink no-underline"
                    >
                      WhatsApp to order
                    </a>
                    <button
                      className="rounded-md border border-lilac/40 bg-oat px-4 py-2"
                      onClick={async () => {
                        const text = buildCartInquiryText({
                          items: cart.items.map((it) => ({ name: it.name, qty: it.qty, price: it.price })),
                          subtotal: cart.subtotal,
                          tagline: process.env.NEXT_PUBLIC_WHATSAPP_TAGLINE || '',
                        })
                        try {
                          await navigator.clipboard.writeText(text)
                          alert('Message copied. If it didn\'t prefill, paste it in WhatsApp.')
                        } catch {
                          // Fallback: open a small window with the text so the user can copy manually
                          const w = window.open('', '_blank', 'width=600,height=400')
                          w?.document.write(`<pre style="white-space:pre-wrap;font:14px system-ui;padding:16px;">${text.replace(/</g, '&lt;')}</pre>`)
                        }
                      }}
                    >
                      Copy message
                    </button>
                  </div>
                )}
                <button className="w-full rounded-md border border-lilac/40 bg-blush px-4 py-2" onClick={() => cart.clear()}>Clear</button>
              </div>
            )}
          </aside>
        </>
      )}
    </div>
  )
}
