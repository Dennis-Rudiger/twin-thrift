"use client"
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type CartItem = { id: string; name: string; price: number; image: string; qty: number }
type CartState = {
  items: CartItem[]
  add: (p: { id: string; name: string; price: number; image: string }, qty?: number) => void
  remove: (id: string) => void
  clear: () => void
  update: (id: string, qty: number) => void
  increment: (id: string, delta?: number) => void
  decrement: (id: string, delta?: number) => void
  count: number
  subtotal: number
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

  const api = useMemo<CartState>(() => {
    const add = (p: { id: string; name: string; price: number; image: string }, qty: number = 1) =>
      setItems((prev: CartItem[]) => {
        const i = prev.findIndex((it: CartItem) => it.id === p.id)
        if (i >= 0) {
          const next = [...prev]
          const newQty = (next[i].qty ?? 0) + qty
          if (newQty <= 0) return prev.filter((it) => it.id !== p.id)
          next[i] = { ...next[i], qty: newQty }
          return next
        }
        const initial = Math.max(1, qty)
        return [...prev, { id: p.id, name: p.name, price: p.price, image: p.image, qty: initial }]
      })

    const update = (id: string, qty: number) =>
      setItems((prev: CartItem[]) => {
        if (qty <= 0) return prev.filter((it) => it.id !== id)
        const i = prev.findIndex((it) => it.id === id)
        if (i < 0) return prev
        const next = [...prev]
        next[i] = { ...next[i], qty }
        return next
      })

    const increment = (id: string, delta: number = 1) =>
      setItems((prev: CartItem[]) => {
        const i = prev.findIndex((it) => it.id === id)
        if (i < 0) return prev
        const next = [...prev]
        next[i] = { ...next[i], qty: next[i].qty + delta }
        return next
      })

    const decrement = (id: string, delta: number = 1) =>
      setItems((prev: CartItem[]) => {
        const i = prev.findIndex((it) => it.id === id)
        if (i < 0) return prev
        const q = prev[i].qty - delta
        if (q <= 0) return prev.filter((it) => it.id !== id)
        const next = [...prev]
        next[i] = { ...next[i], qty: q }
        return next
      })

    const count = items.reduce((acc, it) => acc + it.qty, 0)
    const subtotal = items.reduce((acc, it) => acc + it.price * it.qty, 0)

    return {
      items,
      add,
      remove: (id: string) => setItems((prev: CartItem[]) => prev.filter((it: CartItem) => it.id !== id)),
      clear: () => setItems([]),
      update,
      increment,
      decrement,
      count,
      subtotal,
    }
  }, [items])

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>
}

export function useCart() {
  const ctx = useContext(CartCtx)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
