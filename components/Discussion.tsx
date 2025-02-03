import React from "react";

const Discussion = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto bg-black text-white rounded-xl shadow-xl">
      {/* Start Discussion Button */}
      <div className="flex justify-between items-center mb-6">
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-lg transition duration-300 ease-in-out">
          Start Discussion
        </button>
      </div>

      {/* Message Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Message Card 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Message Title
          </h3>
          <p className="text-gray-300 mb-4">
            This is the description of the message. It contains the details of
            the discussion. Feel free to click for more info.
          </p>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 ease-in-out">
            Read More
          </button>
        </div>

        {/* Message Card 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
            Message Title
          </h3>
          <p className="text-gray-300 mb-4">
            This is the description of the message. It contains the details of
            the discussion. Feel free to click for more info.
          </p>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 ease-in-out">
            Read More
          </button>
        </div>

        {/* Message Card 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Message Title
          </h3>
          <p className="text-gray-300 mb-4">
            This is the description of the message. It contains the details of
            the discussion. Feel free to click for more info.
          </p>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 ease-in-out">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
