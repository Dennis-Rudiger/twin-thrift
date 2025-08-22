"use client"
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type CartItem = { id: string; name: string; price: number; image: string; qty: number }
type CartState = {
  items: CartItem[]
  add: (p: { id: string; name: string; price: number; image: string }, qty?: number) => void
  remove: (id: string) => void
  clear: () => void
}

const CartCtx = createContext<CartState | null>(null)

const STORAGE_KEY = 'twin-thrift:cart'

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // load from storage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {}
  }, [])

  // persist
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) } catch {}
  }, [items])

  const api = useMemo<CartState>(() => ({
    items,
    add: (p: { id: string; name: string; price: number; image: string }, qty: number = 1) => setItems((prev: CartItem[]) => {
      const i = prev.findIndex((it: CartItem) => it.id === p.id)
      if (i >= 0) {
        const next = [...prev]
        next[i] = { ...next[i], qty: next[i].qty + qty }
        return next
      }
      return [...prev, { id: p.id, name: p.name, price: p.price, image: p.image, qty }]
    }),
    remove: (id: string) => setItems((prev: CartItem[]) => prev.filter((it: CartItem) => it.id !== id)),
    clear: () => setItems([])
  }), [items])

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>
}

export function useCart() {
  const ctx = useContext(CartCtx)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
