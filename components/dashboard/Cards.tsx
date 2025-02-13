"use client";
import { useAppContext } from "@/lib";
import { AnswersList, Solution } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { DeleteSolution } from "@/app/actions/deletesol";

export default function Cards({ res }: { res: AnswersList }) {
  const { userData, setUserData } = useAppContext();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setUserData(res);
  }, [res]);

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

  async function handleDelete() {
    if (deleteId) {
      console.log("Deleting solution with ID:", deleteId);
      await DeleteSolution(deleteId);
      router.refresh();
      setIsOpen(false);
    }
  }

  return (
    <div className="-my-5">
      <div className="max-w-5xl overflow-hidden mx-4 sm:grid sm:grid-cols-1 md:grid-cols-3 gap-6 h-auto my-10">
        <div
          onClick={() => router.push("/track")}
          className="max-w-xs w-full h-fit border-2 border-transparent p-6 rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-[#121212] via-[#2b3a4b] to-[#1a202c] shadow-lg group relative my-4 sm:mx-2"
        >
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
            <h1 className="font-bold text-2xl text-yellow-400 transition-all duration-500 group-hover:text-orange-500">
              Create
            </h1>
            <p className="font-semibold text-lg text-gray-300 mt-2 opacity-80 group-hover:opacity-100 transition-all duration-300">
              Save your DSA Solutions
            </p>
          </div>
        </div>

        {currentSolutions.map((data: Solution) => {
          return (
            <div
              key={data.id}
              onClick={() => router.push(`/${data.id}`)}
              className="w-full h-auto"
            >
              <div
                className={cn(
                  "cursor-pointer overflow-hidden relative card h-56 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-2 my-4 sm:my-2",
                  "bg-[url(https://wallpapercrafter.com/th8001/613115-PHP-programming-life-success-1080P.jpg)] bg-cover"
                )}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="flex items-center justify-between space-x-4 z-10">
                  <div className="flex items-center space-x-4">
                    <Image
                      height="100"
                      width="100"
                      alt="Avatar"
                      src={res.profileImage as string}
                      className="h-10 w-10 rounded-full border-2 object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-normal text-base text-gray-50">
                        {res.name}
                      </p>
                      <p className="text-sm text-gray-400">2 min read</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <RiDeleteBin5Fill
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteId(data.id);
                        setIsOpen(true);
                      }}
                      className="cursor-pointer mb-4 text-2xl text-red-500"
                    />
                  </div>
                </div>

                <div className="text content">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50">
                    {data.title}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 my-4">
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

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <DialogPanel className="bg-black max-w-lg w-full p-8 rounded-xl shadow-lg space-y-6">
            <p className="text-gray-200">
              Are you sure you want to delete this solution?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition-colors"
              >
                Delete
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
