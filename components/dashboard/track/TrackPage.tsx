"use client";
import SubmitAllCodes from "@/app/actions/submit";
import { CodeBlock } from "@/components/ui/code-block";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

// Mock AI Insights API Function
const fetchInsights = async (title: string) => {
  return `Insights for "${title}": Optimize your loops and avoid nested structures for better performance.`;
};

const TABS = ["Brute", "Better", "Optimal"];

interface TrackPageProps {
  SessionId: string;
}

const TrackPage: React.FC<TrackPageProps> = ({ SessionId }) => {
  const [activeTab, setActiveTab] = useState<string>("Brute");
  const [title, setTitle] = useState<string>("");
  const [insights, setInsights] = useState<string>("");
  const [codeInputs, setCodeInputs] = useState({
    Brute: "",
    Better: "",
    Optimal: "",
  });
  const [language, setLanguage] = useState("java");
  const router = useRouter();

  const handleTabChange = (tab: string) => setActiveTab(tab);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCodeInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleGenerateInsights = async () => {
    if (!title.trim()) {
      alert("Please provide a title to generate insights.");
      return;
    }
    const generatedInsights = await fetchInsights(title);
    setInsights(generatedInsights);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Title:", title);
    console.log("Submitted Code:", codeInputs);
  };

  const handleBatchSave = async () => {
    try {
      const res = await SubmitAllCodes(
        SessionId,
        title,
        language,
        codeInputs.Brute,
        codeInputs.Better,
        codeInputs.Optimal
      );
      console.log(res);
      toast.success("Solutions Submitted Successfully");
      router.push("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT SIDE: Code Submission */}
      <div className="bg-[#0D0D0D] text-white rounded-lg shadow-lg p-6 flex flex-col">
        {/* Title Input with Dropdown */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            Solution Submission
          </h1>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#1E1E1E] text-white border border-gray-700 rounded-md p-2 text-sm"
          >
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>

        <p className="text-gray-400 mb-6">
          Provide a descriptive title and submit your Brute, Better, and Optimal
          solutions.
        </p>

        {/* Solution Title */}
        <label className="block text-lg font-medium mb-2">Solution Title</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a descriptive title for your solution"
          className="w-full p-3 rounded-md bg-[#1E1E1E] border border-gray-700 text-white mb-4"
        />

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-700 pb-2 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`py-2 px-4 text-sm md:text-lg font-medium rounded-md whitespace-nowrap ${
                activeTab === tab
                  ? "bg-white text-black shadow"
                  : "bg-[#1E1E1E] text-gray-300 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Textarea for Code */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <label className="block text-lg font-medium mb-2">
            {activeTab} Solution
          </label>
          <div className="flex justify-end mb-2">
            <button
              type="button"
              onClick={() =>
                setCodeInputs({ Brute: "", Better: "", Optimal: "" })
              }
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md"
            >
              Clear All
            </button>
          </div>
          <textarea
            name={activeTab}
            value={codeInputs[activeTab as keyof typeof codeInputs]}
            onChange={handleInputChange}
            rows={6}
            className="w-full p-4 rounded-md bg-[#1E1E1E] border border-gray-700 text-white font-mono resize-none"
            placeholder={`Write your ${activeTab} solution here...`}
          />
        </form>
      </div>

      {/* RIGHT SIDE: Code Display */}
      <div className="w-full flex flex-col justify-between">
        <CodeBlock
          language={language}
          filename={title}
          highlightLines={[9, 13, 14, 18]}
          code={codeInputs[activeTab as keyof typeof codeInputs]}
        />

        {/* Batch Save Button */}
        <div className="mt-6 flex justify-center md:justify-end">
          <button
            onClick={handleBatchSave}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 md:px-6 rounded-lg text-sm md:text-lg font-semibold shadow-md"
          >
            Save All Solutions 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
