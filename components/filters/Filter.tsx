"use client";

import { Category, Color, Size } from "@/models/models";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

interface FilterProps {
  valueKey: string;
  data: (Size | Color | Category)[];
  name: string;
}

const Filter: React.FC<FilterProps> = ({ valueKey, data, name }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("offset", "0")
    if (params.toString().includes(valueKey) && params.toString().includes(id)) {
      params.delete(valueKey)
    } else {
      params.set(valueKey, id)
    }
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  };


  return (
    <div>
      <h3 className="text-lg font-semibold" id="scroll-filter">{name}</h3>
      <hr className="my-2" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => onClick(filter.id)}
            className={cn(
              "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
              selectedValue === filter.id && "bg-black text-white"
            )}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
