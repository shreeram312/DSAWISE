import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    //@ts-ignore
    async signIn({ user }) {
      if (user && user.email) {
        try {
          const existingUser = await prisma.user.findUnique({
            where: {
              email: user.email,
            },
          });
          if (existingUser) {
            return true;
          }
          const ans = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || "",
              profileImage: user.image || "",
              SessionId: user.id || "",
            },
          });

          console.log("User successfully upserted:");
        } catch (error) {
          console.error("Error creating/updating user:", error);
          return false;
        }
      }
      return true;
    },
  },
});
