"use client"

import { Category, Size, Team } from "@/models/models";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { Plus, X } from "lucide-react";
import Filter from "./Filter";
import TeamFilter from "./TeamFilter";

interface MobileFiltersProps {
  sizes?: Size[];
  teams?: Team[];
  categories?: Category[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ teams, sizes, categories }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={() => setOpen(true)}>
        Filters
        <Plus size={20} />
      </Button>
      {
        open && (
          <div className="relative z-40 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            <div className="fixed inset-0 z-40 flex">
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col scroll overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-end px-4">
                  <button onClick={() => setOpen(false)} className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition">
                    <X size={20} />
                  </button>
                </div>
                <div className="p-4 space-y-6">
                  { sizes && (<Filter valueKey="sizeId" name="Sizes" data={sizes} />) }
                  { categories && (<Filter valueKey="categoryId" name="Categories" data={categories} />) }
                  { teams && (<TeamFilter valueKey="teamId" name="Teams" data={teams} />) }

                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default MobileFilters