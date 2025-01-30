import { auth } from "@/auth";
import FeaturesSectionDemo from "@/components/landing";
import Appbar from "@/components/navbar/Appbar";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/home");
  }
  return (
    <div>
      <Appbar />
      <FeaturesSectionDemo />
    </div>
  );
};

export default page;
