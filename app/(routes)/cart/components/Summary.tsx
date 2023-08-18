"use client"

import Button from "@/components/ui/Button"
import useCart from "@/hooks/useCart"
import { formatter } from "@/lib/utils"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { toast } from "react-hot-toast"
import axios from "axios"

const Summary = () => {
  const items = useCart(state => state.items)
  const removeAll = useCart(state => state.removeAll)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.")
      removeAll()
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.")
    }
  }, [searchParams])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map(item => item.id)
    })

    window.location = response.data.url
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="space-y-4 mt-6">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <p className="text-base font-medium text-gray-900">Order total</p>
          <span className="font-semibold">{formatter.format(totalPrice)}</span>
        </div>
      </div>
      <Button className="w-full mt-6" disabled={items.length === 0} onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  )
}

export default Summary