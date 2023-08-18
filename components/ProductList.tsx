"use client"

import { Product } from "@/models/models"
import ProductCard from "./ui/ProductCard"
import Carousel, {
  RenderArrowProps,
  RenderPaginationProps,
} from "react-elastic-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductListProps {
  title: string
  items: Product[]
}

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 400, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: true },
  { width: 850, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1450, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1750, itemsToShow: 4, itemsToScroll: 4 },
];

function myArrow({ type, onClick, isEdge }: RenderArrowProps) {
  const pointer =
    type === "PREV" ? (
      <div
        className={cn(
          "rounded-full p-2",
          isEdge ? "bg-gray-500" : "bg-black cursor-pointer"
        )}
      >
        <ChevronLeft className="text-white text-center w-4 h-4 sm:w-auto sm:h-auto" />
      </div>
    ) : (
      <div
        className={cn(
          "rounded-full p-2",
          isEdge ? "bg-gray-500" : "bg-black cursor-pointer"
        )}
      >
        <ChevronRight size={20} className="text-white text-center w-4 h-4 sm:w-auto sm:h-auto" />
      </div>
    );
  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  );
}

function myPagination({ pages, activePage, onClick }: RenderPaginationProps) {
  return (
    <div className="flex gap-2 mt-6">
      {pages.map((page) => {
        const isActivePage = activePage === page;
        return(
          <div 
            key={page} 
            onClick={() => onClick(`${page}`)} 
            className={cn("p-[0.3rem] rounded-full border border-black", isActivePage ? "bg-black" : "cursor-pointer")}
          />
        );
      })}
    </div>
  );
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold border-b py-4">{title}</h2>
      <Carousel
        breakPoints={breakPoints}
        itemPadding={[3, 5]}
        enableMouseSwipe={false}
        renderArrow={myArrow}
        renderPagination={myPagination}
        className="flex items-center justify-center sm:justify-start gap-0 sm:gap-4 w-full"
      >
        {
          items?.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))
        }
      </Carousel>
    </div>
  )
}

export default ProductList