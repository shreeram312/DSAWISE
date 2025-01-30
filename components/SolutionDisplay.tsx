"use client";
import { CodeBlock } from "@/components/ui/code-block";
import { Editor } from "@/lib/DynamicEditor";
import { FiCode, FiCpu, FiPocket, FiZap } from "react-icons/fi";
import "../app/globals.css";
import { SolutionType } from "@/app/[id]/page";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

function SolutionDisplay({ solution }: { solution: SolutionType }) {
  const router = useRouter();
  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <FiArrowLeft
          onClick={() => {
            router.push("/home");
          }} // Navigate back
          className="text-3xl cursor-pointer"
        />

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {solution.title}
          </h1>
          <p className="text-gray-400">Language: {solution.language}</p>
        </div>

        {/* Editor Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-blue-400">
            <h2 className="text-xl  sm:flex  font-semibold sm:mx-44">
              <FiCode className="text-xl mx-2 my-1" />
              Write Your Approach here🚀
            </h2>
          </div>
          <div className="rounded-md sm:w-4/6 sm:mx-48 wm:h-full border border-gray-700 overflow-hidden">
            <Editor />
          </div>
        </section>

        {/* Solutions Horizontal Scroller */}
        <div className="overflow-x-auto custom-scrollbar sm:flex sm:space-x-3 space-y-2  py-4 ">
          {solution.isGivenBrute && (
            <SolutionCard
              title={solution.title}
              icon={<FiCpu className="text-red-400" />}
              code={solution.brutesol}
              language={solution.language}
              accentColor="border-red-400"
              type="Brute Solution"
            />
          )}

          {solution.isGivenBetter && (
            <SolutionCard
              title={solution.title}
              type="Better Solution"
              icon={<FiZap className="text-yellow-400" />}
              code={solution.bettersol}
              language={solution.language}
              accentColor="border-yellow-400"
            />
          )}

          {solution.isGivenOptimal && (
            <SolutionCard
              title={solution.title}
              type="Optimal Solution"
              icon={<FiPocket className="text-green-400" />}
              code={solution.optimalsol}
              language={solution.language}
              accentColor="border-green-400"
            />
          )}
        </div>
      </div>
    </div>
  );
}

const SolutionCard = ({
  title,
  icon,
  code,
  language,
  accentColor,
  type,
}: {
  title: string;
  icon: React.ReactNode;
  code: string;
  language: string;
  accentColor: string;
  type: string;
}) => (
  <div
    className={`rounded-xl border-l-4 ${accentColor} bg-gray-900 p-6 space-y-4 min-h-full`}
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-gray-800 rounded-lg">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-200">{type}</h3>
    </div>
    <div className="rounded-lg overflow-hidden custom-scrollbar min-h-[24rem]">
      {" "}
      {/* Adjusted height */}
      <CodeBlock
        language={language}
        filename={title}
        code={code}
        highlightLines={[1, 5]}
      />
    </div>
  </div>
);

export default SolutionDisplay;
