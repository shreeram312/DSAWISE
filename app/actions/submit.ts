"use server";

import prisma from "@/lib/prisma";

export default async function SubmitAllCodes(
  userId: string,
  title: string,
  language: string,
  brute?: string,
  better?: string,
  optimal?: string
) {
  try {
    const SubmitedCode = await prisma.solution.create({
      data: {
        userId: userId,
        title: title,
        language: language,
        brutesol: brute,
        bettersol: better,
        optimalsol: optimal,
      },
      select: {
        title: true,
        language: true,
        brutesol: true,
        bettersol: true,
        optimalsol: true,
      },
    });

    return SubmitAllCodes;
  } catch (e) {
    console.log(e);
  }
}
