import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex  ">
        <div className="flex">
          <Sidebar />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default page;
