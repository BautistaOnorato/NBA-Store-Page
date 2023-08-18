import { Category } from "@/models/models";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(url)

  return res.json()
}

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${url}/${id}`)

  return res.json()
}