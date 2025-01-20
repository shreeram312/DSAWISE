import React from "react";
import { auth } from "@/auth";
import { signIn, signOut } from "../../auth";
import Image from "next/image";

const Appbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-black text-white shadow-md  border-b border-slate-700">
      <div className="container -mx-3 sm:p-2  flex items-center justify-between">
        <div className="flex items-center   ">
          <Image
            src="/e.png"
            height="100"
            width="100"
            alt="DSA-Trac Logo"
            className="rounded-md h-16 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 shadow-lg "
          />
          <p className="font-semibold text-2xl  sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -mx-4 ">
            DStrAck
          </p>
        </div>

        <div className="hidden sm:block">
          {session && session?.user ? (
            <div className="flex items-center gap-4  ">
              {session.user.image && (
                <Image
                  src={session.user.image}
                  width={40}
                  height={40}
                  alt="User Image"
                  className="rounded-full"
                />
              )}
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md"
                >
                  Sign Out
                </button>
              </form>
            </div>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/dashboard" });
              }}
            >
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md"
              >
                Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
