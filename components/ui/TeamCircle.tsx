"use client";

import { Team } from "@/models/models";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TeamCircleProps {
  data: Team;
}

const TeamCircle: React.FC<TeamCircleProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer w-[70px] h-[70px] rounded-full relative team-circle"
      onClick={() => router.push(`/team/${data.id}`)}
    >
      <Image src={data?.imageUrl} alt="Image" fill className="aspect-square object-contain object-center p-3" />
    </div>
  );
};

export default TeamCircle;
