"use server";

import prisma from "@/lib/prisma";

export default async function SubmitAllCodes(
  userId: string,
  title: string,
  language: string,
  isGivenBrute: boolean,
  isGivenBetter: boolean,
  isGivenOptimal: boolean,
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
        isGivenBrute,
        isGivenBetter,
        isGivenOptimal,
      },
      select: {
        title: true,
        language: true,
        brutesol: true,
        bettersol: true,
        optimalsol: true,
        isGivenBrute: true,
        isGivenBetter: true,
        isGivenOptimal: true,
      },
    });

    return SubmitAllCodes;
  } catch (e) {
    console.log(e);
  }
}
