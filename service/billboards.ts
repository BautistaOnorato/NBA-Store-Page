import { Billboard } from "@/models/models";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${url}/${id}`)

  return res.json()
}