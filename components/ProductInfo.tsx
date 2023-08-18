"use client"

import { Product } from "@/models/models";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import { formatter } from "@/lib/utils";
import useCart from "@/hooks/useCart";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { addItem, items } = useCart()

  const inCart = () => {
    return !!items.find(item => item.id === product.id)
  }

  return (
    <div className="flex flex-col gap-4 mt-10">
      <h2 className="text-2xl font-bold text-black">{product.name}</h2>
      <hr />
      <p className="">{product.description}</p>
      <hr />
      <ul className="flex flex-col gap-3">
        <li>
          <p><span className="font-bold">Category:</span> {product.category.name}</p>
        </li>
        <li className="flex items-center gap-2">
          <p><span className="font-bold">Color:</span> {product.color.name}</p>
 
          <div
            className="p-3 rounded-full border"
            style={{ backgroundColor: product.color.value }}
          />
        </li>
        <li>
          <p><span className="font-bold">Size:</span> {product.size.value} ({product.size.name})</p>
        </li>
        <li>
          <p><span className="font-bold">Team:</span> {product.team.name}</p>
        </li>
      </ul>
      <hr />
      <div className="lg:mt-10 w-full flex flex-col-reverse gap-3 sm:gap-0 sm:flex-row items-start sm:items-center justify-between">
        <Button className="flex gap-4 items-center justify-center" onClick={() => addItem(product)} disabled={inCart()}>
          <ShoppingCart />
          {inCart() ? "Added to cart" : "Add to cart"}
        </Button>
        <p className="font-bold text-lg ml-auto">{formatter.format(Number(product.price))}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
