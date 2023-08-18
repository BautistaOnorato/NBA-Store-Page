import ProductList from "@/components/ProductList";
import TeamsList from "@/components/TeamsList";
import Billboard from "@/components/ui/Billboard";
import { getBillboard } from "@/service/billboards";
import { getProducts } from "@/service/products";
import { getTeams } from "@/service/teams";

export default async function Home() {
  const billboard = await getBillboard("a6823da3-a40e-4b5f-87cd-c2f4d209d6f7")
  const products = await getProducts({ isFeatured: true, offset: 0, limit: 16 })
  const teams = await getTeams()

  return (
    <main className="flex sm:items-center justify-center flex-col">
      <Billboard billboard={billboard} />
      <div className="w-[92vw] p-4">
        <ProductList title="Featured Products" items={products} />
      </div>
      <div className="w-[92vw] p-4 space-y-4">
        <h2 className="font-semibold text-2xl py-4 border-b">Teams</h2>
        <TeamsList teams={teams} />
      </div>
    </main>
  )
}
