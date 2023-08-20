"use client";

import { Team } from "@/models/models";
import React from "react";
import TeamCircle from "./ui/TeamCircle";

interface TeamsListProps {
  teams: Team[];
}




const TeamsList: React.FC<TeamsListProps> = ({ teams }) => {
  const easternTeams = teams.filter((team) => team.conference === "East");
  const westernTeams = teams.filter((team) => team.conference === "West");
  return (
    <div className="space-y-5">  
      <section className="space-y-4">
        <h3 className="text-center font-medium text-2xl">Eastern Conference</h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {easternTeams?.map((team) => (
            <TeamCircle data={team} key={team.id}  />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h3 className="text-center font-medium text-2xl">Western Conference</h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {westernTeams?.map((team) => (
            <TeamCircle data={team} key={team.id}  />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamsList;
