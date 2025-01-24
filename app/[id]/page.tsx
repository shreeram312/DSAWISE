"use client";
import { CodeBlock } from "@/components/ui/code-block";
import { Editor } from "@/lib/DynamicEditor";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CodeView } from "../actions/codeview";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const [sol, setsol] = useState<any>({
    brutesol: "",
    bettersol: "",
    optimalsol: "",
    language: "",
    title: "",
  });

  const code = `const DummyComponent = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
      setCount(prev => prev + 1);
    };

    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
        <p className="mb-2">Fight Club Fights Count: {count}</p>
        <button 
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    );
  };`;

  useEffect(() => {
    const func = async () => {
      try {
        const res = await CodeView(id);
        if (!res) {
          return null;
        }
        console.log(res);
        setsol({
          brutesol: res.brutesol,
          bettersol: res.bettersol,
          optimalsol: res.optimalsol,
          language: res.language,
          title: res.title,
        });
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);

  return (
    <div className="bg-black min-h-screen w-full p-4 sm:p-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mb-12">
          Code Problem Showcase
        </h1>

        {/* Main content area */}
        <div className="space-y-12 sm:space-y-16">
          {/* Editor prominently centered */}
          <div className="flex justify-center">
            <div className="w-full lg:w-3/4 rounded-xl p-4 shadow-xl bg-gray-800">
              <Editor />
            </div>
          </div>

          {/* Row for Code Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:-mx-28 gap-4">
            {/* Code Block 1 */}
            <div className="rounded-xl p-4 shadow-xl bg-gray-900">
              <div className="text-white p-2 rounded-md shadow-md overflow-x-auto">
                <CodeBlock
                  language={sol.language}
                  filename={sol.title}
                  highlightLines={[9, 13, 14, 18]}
                  //@ts-ignore
                  code={sol.brutesol}
                />
              </div>
            </div>

            {/* Code Block 2 */}
            <div className="rounded-xl p-4 shadow-xl bg-gray-900">
              <div className="text-white font-mono text-xl mb-4">
                Problem: Sum Function
              </div>
              <div className="text-white p-2 rounded-md shadow-md overflow-x-auto">
                <CodeBlock
                  language={sol.language}
                  filename={sol.title}
                  highlightLines={[9, 13, 14, 18]}
                  //@ts-ignore
                  code={sol.bettersol}
                />
              </div>
            </div>

            {/* Code Block 3 */}
            <div className="rounded-xl p-4 shadow-xl bg-gray-900">
              <div className="text-white font-mono text-xl mb-4">
                Problem: Greet Function
              </div>
              <div className="text-white p-2 rounded-md shadow-md overflow-x-auto">
                <CodeBlock
                  language={sol.language}
                  filename={sol.title}
                  highlightLines={[9, 13, 14, 18]}
                  //@ts-ignore
                  code={sol.optimalsol}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
