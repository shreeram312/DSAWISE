import SolutionDisplay from "@/components/SolutionDisplay";
import { CodeView } from "../actions/codeview";

type SolutionType = {
  brutesol: string;
  bettersol: string;
  optimalsol: string;
  language: string;
  title: string;
  type?: string;
};

const ServerPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await CodeView(id);
  if (!res) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-red-500">
        Solution not found
      </div>
    );
  }

  const solution: SolutionType = {
    brutesol: res.brutesol ?? "",
    bettersol: res.bettersol ?? "",
    optimalsol: res.optimalsol ?? "",
    language: res.language,
    title: res.title,
    type: "Brute sol",
  };

  //@ts-ignore
  return <SolutionDisplay solution={solution} />;
};

export default ServerPage;
