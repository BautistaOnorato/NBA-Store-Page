import PageSelector from "@/components/PageSelector";
import Filter from "@/components/filters/Filter";
import MobileFilters from "@/components/filters/MobileFilters";
import TeamFilter from "@/components/filters/TeamFilter";
import Billboard from "@/components/ui/Billboard";
import Button from "@/components/ui/Button";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import { getBillboard } from "@/service/billboards";
import { getCategory } from "@/service/categories";
import { getColors } from "@/service/colors";
import { getProducts, getProductsCount } from "@/service/products";
import { getSizes } from "@/service/sizes";
import { getTeams } from "@/service/teams";
import React, { useState } from "react";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    teamId: string;
    offset: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    teamId: searchParams.teamId,
    sizeId: searchParams.sizeId,
    offset: Number(searchParams.offset),
    limit: 12
  })
  const productsCount = await getProductsCount({
    categoryId: params.categoryId,
    teamId: searchParams.teamId,
    sizeId: searchParams.sizeId,
  })
  const category = await getCategory(params.categoryId);
  const sizes = await getSizes()
  const teams = await getTeams()

  return (
    <main className="flex sm:items-center justify-center flex-col max-w-7xl mx-auto">
      <Billboard
        billboard={category.billboard}
      />
      <section className="px-4 sm:px-8 lg:px-8 pb-24 w-full block lg:flex lg:justify-between">
        <MobileFilters sizes={sizes} teams={teams} />
        <div className="hidden lg:flex flex-col gap-y-4 w-[230px] min-h-[500px] lg:mr-5">
          <Filter valueKey="sizeId" data={sizes} name="Sizes" />
          <TeamFilter valueKey="teamId" data={teams} name="Teams" />
        </div>
        <div className="mt-6 lg:mt-0 flex-1 border-0 lg:border-l w-full">
          {products.length === 0 && <NoResults />}
          <div className="products-grid justify-items-center gap-2 pl-0 lg:pl-5 w-full">
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

export default CategoryPage;
