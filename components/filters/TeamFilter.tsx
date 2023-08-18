"use client"

import { Team } from "@/models/models";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TeamFilterProps {
  valueKey: string;
  data: Team[];
  name: string;
}

const TeamFilter: React.FC<TeamFilterProps> = ({ valueKey, data, name }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (params.toString().includes(valueKey) && params.toString().includes(id)) {
      params.delete(valueKey)
    } else {
      params.set(valueKey, id)
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-2" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => onClick(filter.id)}
            className={cn(
              "rounded-full relative p-6 bg-white border border-gray-300",
              selectedValue === filter.id && "bg-black"
            )}
          >
            <Image fill src={filter.imageUrl} alt="Image" className="aspect-square object-contain object-center p-2" />
          </Button>
        ))}
      </div>
    </div>
  )
}

export default TeamFilter