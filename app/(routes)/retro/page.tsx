import PageSelector from "@/components/PageSelector";
import Filter from "@/components/filters/Filter";
import MobileFilters from "@/components/filters/MobileFilters";
import TeamFilter from "@/components/filters/TeamFilter";
import Billboard from "@/components/ui/Billboard";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import { getBillboard } from "@/service/billboards";
import { getCategories, getCategory } from "@/service/categories";
import { getColors } from "@/service/colors";
import { getProducts, getProductsCount } from "@/service/products";
import { getSizes } from "@/service/sizes";
import { getTeams } from "@/service/teams";
import React, { useState } from "react";

interface RetroPageProps {
  searchParams: {
    categoryId: string;
    sizeId: string;
    teamId: string;
    offset: string;
  };
}

const RetroPage: React.FC<RetroPageProps> = async ({
  searchParams,
}) => {
  const products = await getProducts({
    isRetro: true,
    categoryId: searchParams.categoryId,
    teamId: searchParams.teamId,
    sizeId: searchParams.sizeId,
    offset: Number(searchParams.offset),
    limit: 12
  })
  const productsCount = await getProductsCount({
    isRetro: true,
    teamId: searchParams.teamId,
    sizeId: searchParams.sizeId,
  })
  const categories = await getCategories();
  const sizes = await getSizes()
  const teams = await getTeams()
  const billboard = await getBillboard("ad67e111-4e13-4982-aeef-17014f808979");
  

  return (
    <main className="flex sm:items-center justify-center flex-col max-w-7xl mx-auto">
      <Billboard
        billboard={billboard}
      />
      <section className="px-4 sm:px-8 lg:px-8 pb-24 w-full block lg:flex lg:justify-between">
        <MobileFilters sizes={sizes} teams={teams} />
        <div className="hidden lg:flex flex-col gap-y-4 w-[230px] min-h-[500px] lg:mr-5">
          <Filter valueKey="sizeId" data={sizes} name="Sizes" />
          <Filter valueKey="categoryId" data={categories} name="Categories" />
          <TeamFilter valueKey="teamId" data={teams} name="Teams" />
        </div>
        <div className="mt-6 lg:mt-0 flex-1 border-0 lg:border-l w-full">
          {products.length === 0 && <NoResults />}
          <div className="flex flex-wrap justify-center gap-4 pl-5 w-full">
            {
              products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))
            }
          </div>
          <PageSelector productsCount={productsCount} />
        </div>
      </section>
    </main>
  );
};

export default RetroPage;
