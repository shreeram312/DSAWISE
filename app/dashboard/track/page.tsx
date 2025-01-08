import { auth } from "@/auth";
import TrackPage from "@/components/dashboard/track/TrackPage";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session) return redirect("/");
  return (
    <div>
      <TrackPage SessionId={session.user?.id as string} />
    </div>
  );
};

export default page;
