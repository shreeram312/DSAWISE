"use client";
import SubmitAllCodes from "@/app/actions/submit";
import { CodeBlock } from "@/components/ui/code-block";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const fetchInsights = async (title: string) => {
  return `Insights for "${title}": Optimize your loops and avoid nested structures for better performance.`;
};

const TABS = ["Brute", "Better", "Optimal"];

const TrackPage = ({ userId }: { userId: string }) => {
  const [activeTab, setActiveTab] = useState("Brute");
  const [title, setTitle] = useState("");
  const [insights, setInsights] = useState("");
  const [codeInputs, setCodeInputs] = useState({
    Brute: "",
    Better: "",
    Optimal: "",
  });

  const [language, setLanguage] = useState("java");
  const router = useRouter();

  const handleTabChange = (tab: any) => setActiveTab(tab);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setCodeInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleTitleChange = (e: any) => {
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleBatchSave = async () => {
    try {
      if (!title.trim()) {
        toast.error("Please provide a title for your solution.");
        return;
      }
      const res = await SubmitAllCodes(
        userId,
        title,
        language,
        codeInputs.Brute.length > 2 ? true : false,
        codeInputs.Better.length > 2 ? true : false,
        codeInputs.Optimal.length > 2 ? true : false,
        codeInputs.Brute.length > 2 ? codeInputs.Brute : "",
        codeInputs.Better.length > 2 ? codeInputs.Better : "",
        codeInputs.Optimal.length > 2 ? codeInputs.Optimal : ""
      );
      toast.success("Solutions Submitted Successfully");
      router.push(`/${res?.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* LEFT SIDE: Code Submission */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-xl p-4 md:p-6 flex flex-col">
        {/* Title Input with Dropdown */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400">
            Submit Your Solution
          </h1>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-700 text-white border border-gray-600 rounded-md p-2 text-sm shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>

        <p className="text-gray-400 mb-4 text-sm md:text-base">
          Provide a descriptive title and submit your Brute, Better, and Optimal
          solutions.
        </p>

        {/* Solution Title */}
        <label className="block text-lg font-medium mb-2 text-indigo-300">
          Solution Title
        </label>
        <input
          type="text"
          value={title}
          required
          onChange={handleTitleChange}
          placeholder="Enter a descriptive title for your solution"
          className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />

        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b border-gray-600 pb-2 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`py-2 px-4 text-sm md:text-base font-semibold rounded-md whitespace-nowrap shadow-md transition-all duration-200 ease-in-out ${
                activeTab === tab
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Textarea for Code */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <label className="block text-lg font-medium mb-2 text-indigo-300">
            {activeTab} Solution
          </label>
          <div className="flex justify-end mb-2">
            <button
              type="button"
              onClick={() =>
                setCodeInputs({ Brute: "", Better: "", Optimal: "" })
              }
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md transition"
            >
              Clear All
            </button>
          </div>
          <textarea
            name={activeTab}
            //@ts-ignore
            value={codeInputs[activeTab]}
            onChange={handleInputChange}
            rows={6}
            className="w-full p-4 rounded-md bg-gray-800 border border-gray-600 text-white font-mono resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={`Write your ${activeTab} solution here...`}
          />
        </form>
      </div>

      {/* RIGHT SIDE: Code Preview and Save */}
      <div className="w-full flex flex-col justify-between">
        <CodeBlock
          language={language}
          filename={title}
          highlightLines={[9, 13, 14, 18]}
          //@ts-ignore
          code={codeInputs[activeTab]}
        />

        {/* Batch Save Button */}
        <div className="mt-6 flex justify-center md:justify-end">
          <button
            onClick={handleBatchSave}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 md:px-8 rounded-lg text-sm md:text-lg font-semibold shadow-md transition-all"
          >
            Save All Solutions 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
