"use client";
import { useAppContext } from "@/lib";
import { AnswersList, Solution } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cards({ res }: { res: AnswersList }) {
  const { userData, setUserData } = useAppContext();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setUserData(res);
  }, []);

  const totalPages = Math.ceil(res.solutions.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSolutions = res.solutions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setUserData(res);
  }, []);
  return (
    <div className="-my-5">
      <div className="max-w-5xl overflow-hidden mx-4 sm:grid sm:grid-cols-1 md:grid-cols-3 gap-6 h-auto my-10">
        <div className="max-w-xs w-full h-fit border-2 border-transparent p-6 rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-[#121212] via-[#2b3a4b] to-[#1a202c] shadow-lg group relative my-4 sm:mx-2">
          <div className="flex flex-row items-center space-x-3 z-10">
            <Image
              height="100"
              width="100"
              alt="Avatar"
              src={res.profileImage as string}
              className="h-14 w-14 rounded-full border-4 border-teal-500 shadow-lg group-hover:scale-110 transition-transform duration-300 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-lg text-white tracking-wide">
                {res.name}
              </p>
            </div>
          </div>

          <div className="text content mt-6">
            <h1 className="font-bold text-2xl text-yellow-400 relative z-10 transform transition-all duration-500 group-hover:text-orange-500">
              Create
            </h1>
            <p className="font-semibold text-lg text-gray-300 mt-2 relative z-10 opacity-80 group-hover:opacity-100 transform transition-all duration-300">
              Save your DSA Solutions
            </p>
          </div>
        </div>

        {currentSolutions.map((data: Solution, idx: number) => {
          return (
            <div key={data.id} className="w-full h-auto group/card">
              <div
                className={cn(
                  "cursor-pointer overflow-hidden relative card h-56 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-2 my-4 sm:my-2 ",
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
                    {data.title}
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
      <div className="flex justify-center items-center space-x-4 mt-6 mb-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full transition-all duration-200 ${
            currentPage === 1
              ? "bg-gray-800 text-gray-500 cursor-not-allowed"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          Previous
        </button>
        <span className="text-white text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || totalPages <= 1}
          className={`px-4 py-2 rounded-full transition-all duration-200 ${
            currentPage === totalPages || totalPages <= 1
              ? "bg-gray-800 text-gray-500 cursor-not-allowed"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
