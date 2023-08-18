import Skeleton from '@/components/ui/Skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className="w-full h-full p-8">
        <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
        </div>
      </div>
      <div className="my-8 flex flex-wrap w-full items-center justify-center gap-4">
        <Skeleton className="aspect-square rounded-full h-[40px]" />
        <Skeleton className="aspect-square rounded-full h-[40px]" />
        <Skeleton className="aspect-square rounded-full h-[40px]" />
        <Skeleton className="aspect-square rounded-full h-[40px]" />
        <Skeleton className="aspect-square rounded-full h-[40px]" />
        <Skeleton className="aspect-square rounded-full h-[40px]" />
        <Skeleton className="aspect-square rounded-full h-[40px]" />
        <Skeleton className="aspect-square rounded-full h-[40px]" />
        <Skeleton className="aspect-square rounded-full h-[40px]" />
      </div>
    </div>
  )
}

export default loading