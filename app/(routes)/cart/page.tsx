"use client"

import Button from "@/components/ui/Button"
import CartItem from "./components/CartItem"
import Summary from "./components/Summary"
import { useEffect, useState } from "react"
import useCart from "@/hooks/useCart"

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { items } = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="px-4 py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              { items.length === 0 && <p className="text-neutral-500">No items added to cart.</p> }
              <ul>
                {
                  items.map(product => (
                    <CartItem key={product.id} data={product} />
                  ))
                }
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage