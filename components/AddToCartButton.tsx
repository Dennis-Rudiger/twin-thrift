"use client"
import { useCart } from './CartProvider'

export default function AddToCartButton({ id, name, price, image }: { id: string; name: string; price: number; image: string }) {
  const cart = useCart()
  return (
    <button
      onClick={() => cart.add({ id, name, price, image }, 1)}
      className="rounded-md bg-ink text-oat px-5 py-2.5"
    >
      Add to cart
    </button>
  )
}
