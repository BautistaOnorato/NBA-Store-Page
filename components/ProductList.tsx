"use client"

import { Product } from "@/models/models"
import ProductCard from "./ui/ProductCard"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";

interface ProductListProps {
  title: string
  items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-2xl font-semibold border-b py-4">{title}</h2>
      <div className="w-full mx-auto relative">
        <Swiper
          
          slidesPerView={6}
          pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
          navigation={{                       
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            1: {
              slidesPerView: 1
            },
            520: {
              slidesPerView: 2
            },
            760: {
              slidesPerView: 3
            },
            1000: {
              slidesPerView: 4
            },
            1300: {
              slidesPerView: 5
            }
          }}
          className="mySwiper"
        >
          {
            items?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard data={product} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="swiper-custom-pagination"/>
        <div className="swiper-button-prev"/>
        <div className="swiper-button-next"/>
      </div>
    </div>
  )
}

export default ProductList