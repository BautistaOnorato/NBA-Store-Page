"use client";

import { formatter } from "@/lib/utils";
import { Product } from "@/models/models";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      className="bg-white cursor-pointer border p-3 space-y-4 w-[230px] h-[400px] flex flex-col justify-between rounded-lg"
      onClick={() => router.push(`/product/${data?.id}`)}
    >
      <div>
        <div className="aspect-square bg-gray-100 relative">
          <Image
            fill
            className="aspect-square object-cover"
            src={data?.images[0]?.url}
            alt={`${data.name} image`}
          />
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          <p className="font-semibold text-base sm:text-lg">{data?.name}</p>
          <p className="text-sm text-gray-500">
            {data?.team?.name} {data?.category?.name}
          </p>
        </div>
      </div>
      <div>
        <p className="text-end font-bold">
          {formatter.format(Number(data?.price))}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
