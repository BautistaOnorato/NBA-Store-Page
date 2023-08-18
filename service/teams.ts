import { Team } from "@/models/models";

const url = `${process.env.NEXT_PUBLIC_API_URL}/teams`;

export const getTeams = async (): Promise<Team[]> => {
  const res = await fetch(url)

  return res.json()
}

export const getTeam = async (id: string): Promise<Team> => {
  const res = await fetch(`${url}/${id}`)

  return res.json()
}