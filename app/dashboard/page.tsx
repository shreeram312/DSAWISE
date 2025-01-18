import Cards from "@/components/dashboard/Cards";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

const page = async () => {
  const session = await auth();
  if (!session) return redirect("/");

  const res = await prisma.user.findFirst({
    where: {
      SessionId: session.user?.id,
    },
    include: {
      solutions: true,
    },
  });
  console.log(res);

  if (!res) {
    return redirect("/");
  }
  return (
    <div className="flex  ">
      <div className="flex">
        <Sidebar />
      </div>
      <div className="">{res && <Cards res={res} />}</div>
    </div>
  );
};

export default page;
