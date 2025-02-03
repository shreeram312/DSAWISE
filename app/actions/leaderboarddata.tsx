"use server";
import prisma from "@/lib/prisma";

export async function GetLeaderBoardData() {
  const res = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      solutions: true,
      isPrivate: true,
    },
  });

  const filterleaderboard = res.sort(
    (a, b) => b.solutions.length - a.solutions.length
  );
  console.log("fil", filterleaderboard);

  return filterleaderboard;
}
