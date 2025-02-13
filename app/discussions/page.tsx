import { auth } from "@/auth";
import Sidebar from "@/components/dashboard/Sidebar";
import Discussion from "@/components/Discussion";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session) return redirect("/");
  return (
    <div>
      <div className="flex  ">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="">
          <Discussion />
        </div>
      </div>
    </div>
  );
};

export default page;
