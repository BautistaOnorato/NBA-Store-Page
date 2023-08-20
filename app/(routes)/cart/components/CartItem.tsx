"use client";

import useCart from "@/hooks/useCart";
import { formatter } from "@/lib/utils";
import { Product } from "@/models/models";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rouded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt="Image"
          className="object-center object-cover"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <button
            onClick={() => removeItem(data.id)}
            className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
          >
            <X size={20} />
          </button>
        </div>
        <div className="relative">
          <div>
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
          </div>
          <div className="font-semibold mt-2">{formatter.format(Number(data.price))}</div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
