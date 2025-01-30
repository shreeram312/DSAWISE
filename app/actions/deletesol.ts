"use server";
import prisma from "@/lib/prisma";

export async function DeleteSolution(id: string) {
  if (!id) {
    throw new Error("Id not provided");
  }

  console.log("id is bro...........", id);

  const res = await prisma.solution.delete({
    where: {
      id: id,
    },
  });

  return res;
}
