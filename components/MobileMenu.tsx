"use client"

import Link from "next/link"
import MainNav from "./MainNav"
import NavbarActions from "./NavbarActions"
import Image from "next/image"
import { Category } from "@/models/models";
import { useState } from "react";
import { Menu, X } from "lucide-react"

interface MobileMenuProps {
  categories: Category[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ categories }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(false)
  }

  return (
    <menu className="h-16 block sm:hidden">     
      {open ? (
        <div className="bg-black fixed flex items-center flex-col px-4 h-screen sm:hidden w-full overflow-hidden z-50">
          <div className="flex justify-between items-center gap-x-14 w-full border-b h-16">
            <Link href="/">
              <Image
                src="/store.nba.com.svg"
                alt="NBA logo"
                width={100}
                height={100}
              />
            </Link>
            <X size={26} color="white" className="cursor-pointer" onClick={handleOpen} />
          </div>
          <MainNav onOpen={handleOpen} categories={categories} className="flex-col items-center w-full px-10 mb-10" textClassName="flex items-center justify-center text-xl border-b w-full py-10" />
          <NavbarActions />
        </div>
      ): (
        <div className="h-full flex items-center justify-end">
          <Menu color="white" size={30} className="mr-6 cursor-pointer " onClick={() => setOpen(true)}/>
        </div>
      )}
    </menu>
  )
}

export default MobileMenu