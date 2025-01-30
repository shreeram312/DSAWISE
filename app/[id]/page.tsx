import SolutionDisplay from "@/components/SolutionDisplay";
import { CodeView } from "../actions/codeview";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Appbar from "@/components/navbar/Appbar";

export type SolutionType = {
  brutesol: string;
  bettersol: string;
  optimalsol: string;
  language: string;
  title: string;
  type?: string;
  isGivenBrute: boolean;
  isGivenBetter: boolean;
  isGivenOptimal: boolean;
  id: string;
};

const ServerPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await auth();
  if (!session) return redirect("/");
  const { id } = await params;

  const res = await CodeView(id);
  if (!res) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-red-500">
        Solution not found
      </div>
    );
  }

  const solution: SolutionType = {
    id: res.id,
    brutesol: res.brutesol ?? "",
    bettersol: res.bettersol ?? "",
    optimalsol: res.optimalsol ?? "",
    language: res.language,
    title: res.title,
    type: "Brute sol",
    isGivenBrute: res.isGivenBrute,
    isGivenBetter: res.isGivenBetter,
    isGivenOptimal: res.isGivenOptimal,
  };

  //@ts-ignore
  return (
    <div>
      <SolutionDisplay solution={solution} />
    </div>
  );
};

export default ServerPage;
