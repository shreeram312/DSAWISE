"use server";
import prisma from "@/lib/prisma";

export async function DeleteSolution(id: string) {
  if (!id) {
    throw new Error("Id not provided");
  }

  const res = await prisma.solution.delete({
    where: {
      id: id,
    },
  });

  return res;
}
