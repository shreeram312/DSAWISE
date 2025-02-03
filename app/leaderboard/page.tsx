import Sidebar from "@/components/dashboard/Sidebar";
import Leaderboard from "@/components/LeaderBoard";
import React from "react";
import { GetLeaderBoardData } from "../actions/leaderboarddata";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session) return redirect("/");
  const leaderboardData = await GetLeaderBoardData();

  return (
    <div>
      <div className="flex  ">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex justify-center w-full">
          <div className="sm:w-4/5 p-6 cursor-pointer">
            <Leaderboard data={leaderboardData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
