"use client"

import { useRouter } from "next/navigation"
import Button from "./ui/Button"
import { ShoppingBag } from "lucide-react"
import useCart from "@/hooks/useCart"
import { useEffect, useState } from "react"

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  const router = useRouter()
  const { items } = useCart()

  if (!isMounted) {
    return null
  }


  return (
    <div>
      <Button className="bg-white text-black flex justify-center w-[150px] sm:w-auto h-10 items-center gap-x-2" onClick={() => router.push("/cart")}>
        <ShoppingBag size={20} color="black" />
        <span className="hidden sm:block">
          {items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions