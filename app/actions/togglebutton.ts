"use server";
import prisma from "@/lib/prisma";

export async function ToggleButton(email: string, isPrivate: boolean) {
  return await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      isPrivate,
    },
  });
}
