import { Product } from "@/models/models";
import qs from "query-string"

interface Query {
  categoryId?: string
  colorId?: string
  sizeId?: string
  teamId?: string
  isFeatured?: boolean
  isRetro?: boolean
  offset?: number
  limit?: number
}

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProducts = async (query: Query): Promise<Product[]> => {
  const newUrl = qs.stringifyUrl({
    url: url,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      teamId: query.teamId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
      isRetro: query.isRetro,
      offset: query.offset,
      limit: query.limit
    }
  })

  console.log(newUrl);
  

  const res = await fetch(newUrl)

  return res.json()
}

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${url}/${id}`);

  return res.json();
}

export const getProductsCount = async (query: Query): Promise<number> => {
  const newUrl = qs.stringifyUrl({
    url: `${url}/count`,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      teamId: query.teamId,
      sizeId: query.sizeId,
      isRetro: query.isRetro,
    }
  })

  console.log(newUrl);
  

  const res = await fetch(newUrl)

  return res.json()
}