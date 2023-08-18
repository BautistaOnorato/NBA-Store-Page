import { Size } from "@/models/models";

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(url)

  return res.json()
}