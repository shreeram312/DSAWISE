import Cards from "@/components/dashboard/Cards";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session) return redirect("/");
  return (
    <div className="flex  ">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Cards />
      </div>
    </div>
  );
};

export default page;
