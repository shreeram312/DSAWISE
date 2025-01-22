import { CodeBlock } from "@/components/ui/code-block";
import { Editor } from "@/lib/DynamicEditor";
import { useBlockNoteContext } from "@blocknote/react";
import React from "react";

const Page = () => {
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

  return (
    <div className="bg-black min-h-screen w-full p-4 sm:p-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl font-bold text-center mb-12">
          Code Problem Showcase
        </h1>

        {/* Main content area */}
        <div className="space-y-12 sm:space-y-16">
          {/* Row 1 - Problem with Code Block and Approach on the right */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1 rounded-xl p-1 shadow-xl w-full">
              <div className="text-white font-mono text-xl mb-4">
                Problem: Code Snippet 1
              </div>
              <div className="bg-gray-900 text-white p-2 rounded-md shadow-md overflow-x-auto w-full">
                <CodeBlock
                  language="javascript"
                  filename="hello"
                  highlightLines={[9, 13, 14, 18]}
                  //@ts-ignore
                  code={code}
                />
              </div>
            </div>

            <div className="flex-1 bg-gradient-to-r from-pink-600 via-red-600 to-yellow-600 rounded-xl p-6 shadow-xl w-full">
              <div className="text-white font-semibold text-xl mb-4">
                Approach
              </div>
              <p className="text-gray-200 text-lg">
                This example demonstrates a simple "Hello, world!" program in
                JavaScript. It shows how to implement a basic console log output
                within a function.
              </p>
            </div>
          </div>

          {/* Row 2 - Problem with Code Block and Approach on the right */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1 rounded-xl p-1 shadow-xl w-full">
              <div className="text-white font-mono text-xl mb-4">
                Problem: Sum Function
              </div>
              <div className="bg-gray-900 text-white p-2 rounded-md shadow-md overflow-x-auto w-full">
                <CodeBlock
                  language="javascript"
                  filename="hello"
                  highlightLines={[9, 13, 14, 18]}
                  //@ts-ignore
                  code={code}
                />
              </div>
            </div>

            <div className="flex-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-xl p-6 shadow-xl w-full">
              <div className="text-white font-semibold text-xl mb-4">
                Approach
              </div>
              <p className="text-gray-200 text-lg">
                This approach demonstrates a simple function that adds two
                numbers. It's a basic example of function creation and usage in
                JavaScript.
              </p>
            </div>
          </div>

          {/* Row 3 - Problem with Code Block and Approach on the right */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1 rounded-xl p-1 shadow-xl w-full">
              <div className="text-white font-mono text-xl mb-4">
                Problem: Greet Function
              </div>
              <div className="bg-gray-900 text-white p-2 rounded-md shadow-md overflow-x-auto w-full">
                <CodeBlock
                  language="javascript"
                  filename="hello"
                  highlightLines={[9, 13, 14, 18]}
                  //@ts-ignore
                  code={code}
                />
              </div>
            </div>

            <div className="flex-1 rounded-xl p-6 shadow-xl bg-white w-full overflow-x-auto">
              <Editor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
