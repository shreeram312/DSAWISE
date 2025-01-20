import Cards from "@/components/dashboard/Cards";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

const page = async () => {
  const session = await auth();
  if (!session) return redirect("/");

  const res = await prisma.user.findUnique({
    where: {
      email: session.user?.email ?? "",
    },
    select: {
      id: true,
      name: true,
      email: true,
      profileImage: true,
      solutions: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!res) {
    return redirect("/");
  }
  return (
    <div className="flex  ">
      <div className="flex">
        <Sidebar />
      </div>
      <div className="">
        <div className="flex justify-center items-center text-center my-6">
          <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
            Your Top 5 Recent DSA Solutions
          </span>
        </div>

        {res && <Cards res={res} />}
      </div>
    </div>
  );
};

export default page;
