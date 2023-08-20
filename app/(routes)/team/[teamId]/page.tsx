import PageSelector from "@/components/PageSelector";
import Filter from "@/components/filters/Filter";
import MobileFilters from "@/components/filters/MobileFilters";
import TeamFilter from "@/components/filters/TeamFilter";
import Billboard from "@/components/ui/Billboard";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import { getBillboard } from "@/service/billboards";
import { getCategories, getCategory } from "@/service/categories";
import { getProducts, getProductsCount } from "@/service/products";
import { getSizes } from "@/service/sizes";
import { getTeam, getTeams } from "@/service/teams";

interface TeamPageProps {
  params: {
    teamId: string;
  };
  searchParams: {
    sizeId: string;
    categoryId: string;
  };
}

const TeamPage: React.FC<TeamPageProps> = async ({
  params,
  searchParams,
}) => {

  const products = await getProducts({
    teamId: params.teamId,
    categoryId: searchParams.categoryId,
    sizeId: searchParams.sizeId,
  })
  const productsCount = await getProductsCount({
    teamId: params.teamId,
    categoryId: searchParams.categoryId,
    sizeId: searchParams.sizeId,
  })

  const team = await getTeam(params.teamId);
  const sizes = await getSizes()
  const categories = await getCategories()
  

  return (
    <main className="flex sm:items-center justify-center flex-col max-w-7xl mx-auto">
      <Billboard
        billboard={
          params.teamId === "retro"
            ? await getBillboard("4956b284-e1fd-499e-a53b-cb57766b3dc5")
            : team.billboard
        }
      />
      <section className="px-4 sm:px-8 lg:px-8 pb-24 w-full block lg:flex lg:justify-between">
        <MobileFilters sizes={sizes} categories={categories} />
        <div className="hidden lg:flex flex-col gap-y-4 w-[230px] min-h-[500px] lg:mr-5">
          <Filter valueKey="sizeId" data={sizes} name="Sizes" />
          <Filter valueKey="categoryId" data={categories} name="Categories" />
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

export default TeamPage;
