import { Color } from "@/models/models";

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const res = await fetch(url)

  return res.json()
}