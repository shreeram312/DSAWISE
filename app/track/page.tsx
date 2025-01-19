import { auth } from "@/auth";
import TrackPage from "@/components/track/TrackPage";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session) return redirect("/");

  const res = await prisma.user.findUnique({
    where: {
      email: session.user?.email ?? "",
    },
  });
  return (
    <div>
      <TrackPage userId={res?.id as string} />
    </div>
  );
};

export default page;
