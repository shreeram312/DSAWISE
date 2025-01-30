"use server";
import prisma from "@/lib/prisma";

export async function CodeView(id: string) {
  try {
    const ans = await prisma.solution.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        brutesol: true,
        bettersol: true,
        optimalsol: true,
        title: true,
        language: true,
        isGivenBrute: true,
        isGivenBetter: true,
        isGivenOptimal: true,
      },
    });
    console.log(ans);
    return ans;
  } catch (e) {
    console.log(e);
  }
}
