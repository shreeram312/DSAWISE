"use server";

import prisma from "@/lib/prisma";

export default async function SubmitAllCodes(
  SessionId: string,
  title: string,
  language: string,
  brute?: string,
  better?: string,
  optimal?: string
) {
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        SessionId: SessionId,
      },
    });

    if (!existingUser) {
      throw new Error("No User Found to add data");
    }

    const SubmitedCode = await prisma.solution.create({
      data: {
        userId: existingUser.id,
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
