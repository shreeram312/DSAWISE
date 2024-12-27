"use client";
import { CodeBlock } from "@/components/ui/code-block";
import React, { useState } from "react";

// Mock AI Insights API Function
const fetchInsights = async (title: string) => {
  // Replace this with a real API call if available
  return `Insights for "${title}": Optimize your loops and avoid nested structures for better performance.`;
};

const TABS = ["Brute", "Better", "Optimal"];

const TrackPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Brute");
  const [title, setTitle] = useState<string>("");
  const [insights, setInsights] = useState<string>("");
  const [codeInputs, setCodeInputs] = useState({
    Brute: "",
    Better: "",
    Optimal: "",
  });
  const code = `import random
import string

def generate_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for i in range(length))
    return password

# Generate and print a random password
print("Your random password is:", generate_password())

  `;

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
    // Integrate API Call here
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT SIDE: Code Submission */}
      <div className="bg-[#0D0D0D] text-white rounded-lg shadow-lg p-6">
        {/* Title Input */}
        <h1 className="text-3xl font-bold mb-4">Solution Submission</h1>
        <p className="text-gray-400 mb-6">
          Provide a descriptive title and submit your Brute, Better, and Optimal
          solutions.
        </p>
        <label className="block text-lg font-medium mb-2">Solution Title</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a descriptive title for your solution"
          className="w-full p-3 rounded-md bg-[#1E1E1E] border border-gray-700 text-white mb-4"
        />

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-700 pb-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`py-2 px-4 text-lg font-medium rounded-md ${
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
        <form onSubmit={handleSubmit}>
          <label className="block text-lg font-medium mb-2">
            {activeTab} Solution
          </label>
          <textarea
            name={activeTab}
            value={codeInputs[activeTab as keyof typeof codeInputs]}
            onChange={handleInputChange}
            rows={8}
            className="w-full p-4 rounded-md bg-[#1E1E1E] border border-gray-700 text-white font-mono"
            placeholder={`Write your ${activeTab} solution here...`}
          />

          {/* Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={() =>
                setCodeInputs({ Brute: "", Better: "", Optimal: "" })
              }
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md"
            >
              Clear All
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
            >
              Save {activeTab}
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT SIDE: Insights, Tips, Preview */}
      <div className="max-w-3xl mx-auto w-full">
        <CodeBlock
          language="jsx"
          filename={title}
          highlightLines={[9, 13, 14, 18]}
          code={codeInputs[activeTab as keyof typeof codeInputs]}
        />
      </div>
    </div>
  );
};

export default TrackPage;
