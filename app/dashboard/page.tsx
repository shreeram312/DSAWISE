import Cards from "@/components/dashboard/Cards";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const page = () => {
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
