"use client";
import { AnswersList, Solution } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Cards({ res }: { res: AnswersList }) {
  return (
    <div className="max-w-5xl overflow-hidden mx-4 sm:grid sm:grid-cols-1 md:grid-cols-3 gap-6 h-fit my-10">
      <div className="max-w-xs w-full h-fit border-2 border-transparent p-6 rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-[#2c2c2c] via-[#444] to-[#1c1c1c] shadow-2xl group relative my-2">
        <div className="flex flex-row items-center space-x-4 z-10 ">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={res.profileImage as string}
            className="h-16 w-16 rounded-full border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg group-hover:scale-105 transition-transform duration-300 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-lg text-white tracking-wider">
              {res.name}
            </p>
          </div>
        </div>

        <div className="text content mt-6">
          <h1 className="font-bold text-3xl text-white relative z-10 transform transition-all duration-500 group-hover:text-blue-400">
            Create
          </h1>
          <p className="font-semibold text-lg text-gray-300 mt-2 relative z-10 opacity-80 group-hover:opacity-100 transform transition-all duration-300">
            Save your DSA Solutions
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-50 transition-all duration-300 rounded-lg"></div>

        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 group-hover:ring-4 group-hover:ring-blue-500 group-hover:ring-opacity-50 transition-all duration-300"></div>
      </div>

      {[
        ...res.solutions,
        ...res.solutions,
        ...res.solutions,
        ...res.solutions,
        ...res.solutions,
        ...res.solutions,
      ].map((data: Solution, idx: number) => {
        return (
          <div key={data.id} className="w-full group/card">
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-2 my-4 sm:my-2",
                "bg-[url(https://wallpapercrafter.com/th8001/613115-PHP-programming-life-success-1080P.jpg)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src={res.profileImage as string}
                  className="h-10 w-10 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    {res.name}
                  </p>
                  <p className="text-sm text-gray-400">2 min read</p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  {idx + 1}. {data.title}
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
