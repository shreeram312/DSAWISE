import React from "react";
import { auth } from "@/auth";
import { signIn, signOut } from "../../auth";
import Image from "next/image";

const Appbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="/">MyApp</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Features
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
        </div>

        <div>
          {session && session?.user ? (
            <div className="flex items-center gap-4">
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
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md"
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
