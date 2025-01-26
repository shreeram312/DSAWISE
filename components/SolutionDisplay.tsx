"use client";

import { CodeBlock } from "@/components/ui/code-block";
import { Editor } from "@/lib/DynamicEditor";
import { FiCode, FiCpu, FiPocket, FiZap } from "react-icons/fi";

type SolutionType = {
  brutesol: string;
  bettersol: string;
  optimalsol: string;
  language: string;
  title: string;
  type: string;
};

function SolutionDisplay({ solution }: { solution: SolutionType }) {
  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
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
            <FiCode className="text-xl" />
            <h2 className="text-xl font-semibold">Your Approach</h2>
          </div>
          <div className="rounded-xl border border-gray-700 overflow-hidden">
            <Editor />
          </div>
        </section>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:-mx-28">
          <SolutionCard
            title={solution.title}
            icon={<FiCpu className="text-red-400" />}
            code={solution.brutesol}
            language={solution.language}
            accentColor="border-red-400"
            type="Brute Solution"
          />

          <SolutionCard
            title={solution.title}
            type="Better Solution"
            icon={<FiZap className="text-yellow-400" />}
            code={solution.bettersol}
            language={solution.language}
            accentColor="border-yellow-400"
          />

          <SolutionCard
            title={solution.title}
            type="Optimal Solution"
            icon={<FiPocket className="text-green-400" />}
            code={solution.optimalsol}
            language={solution.language}
            accentColor="border-green-400"
          />
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
    className={`rounded-xl border-l-4 ${accentColor} bg-gray-900 p-6 space-y-4`}
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-gray-800 rounded-lg">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-200">{type} Solution</h3>
    </div>
    <div className="rounded-lg overflow-hidden">
      <CodeBlock
        language={language}
        filename={title}
        code={code}
        highlightLines={[1, 3, 5]}
      />
    </div>
  </div>
);

export default SolutionDisplay;
