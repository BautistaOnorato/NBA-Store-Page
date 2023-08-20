"use client"

import React from 'react'
import Button from './ui/Button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

interface PageSelectorProps {
  productsCount: number
}

const PageSelector: React.FC<PageSelectorProps> = ({ productsCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname(); 

  const prev = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("offset", (Number(params.get("offset")) - 12).toString()) 
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const next = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("offset", (Number(params.get("offset")) + 12).toString()) 
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handlePage = (index: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("offset", (12 * index).toString()); 
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex items-center justify-center w-full mt-5 gap-4 pl-0 lg:pl-5">
      <Button disabled={searchParams.get("offset") === "0"} className='hidden sm:block py-1 w-[100px]' onClick={prev}>Previous</Button>
      <div className='flex justify-center items-center gap-2'>
        {
          Array(Math.ceil(productsCount / 12)).fill(null).map((element, i) => (
            <button key={`page-${i}`} className={cn('cursor-pointer border h-full py-2 w-[30px] text-center rounded-md', Number(searchParams.get("offset")) / 12 === i && "bg-black text-white border-0")} onClick={() => handlePage(i)}>{i + 1}</button>
          ))
        }
      </div>
      <Button disabled={Number(searchParams.get("offset")) >= productsCount - 12} className='hidden sm:block py-1 w-[100px]' onClick={next}>Next</Button>
    </div>
  )
}

export default PageSelector