import { auth } from "@/auth";
import { FaUser } from "react-icons/fa"; // Import the icon
import React from "react";

const leaderboardData = [
  { rank: 1, name: "John Doe", totalSolutions: 100 },
  { rank: 2, name: "Jane Smith", totalSolutions: 85 },
  { rank: 3, name: "Alice Johnson", totalSolutions: 72 },
  { rank: 4, name: "Bob Brown", totalSolutions: 60 },
  { rank: 5, name: "Charlie Davis", totalSolutions: 55 },
];

const Leaderboard = async ({ data }: any) => {
  const session = await auth();

  return (
    <div className="p-6 max-w-8xl w-full mx-auto bg-transparent text-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2 px-4 text-left text-gray-300">Rank</th>
              <th className="py-2 px-4 text-left text-gray-300">Name</th>
              <th className="py-2 px-4 text-left text-gray-300">
                Total Solutions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((person: any, index: number) => (
              <tr
                key={person.id}
                className={`${
                  index === 0
                    ? "bg-gradient-to-r text-xl from-orange-400 to-yellow-400 text-black font-normal"
                    : "hover:bg-gray-800"
                } border-b border-gray-700`}
              >
                <td className="py-3 px-4 text-md font-regular">{index + 1}</td>

                <td className="py-3 px-4 text-md font-regular flex items-center">
                  {person.name !== session?.user?.name &&
                  person.isPrivate === true
                    ? "Anonymous"
                    : person.name}

                  {session?.user?.name === person.name && (
                    <FaUser className="ml-3 mb-1 text-green-500 text-xl" />
                  )}
                </td>

                <td className="py-3 px-4 text-md font-regular">
                  {person.solutions.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
