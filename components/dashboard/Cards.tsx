"use client";
import { HoverEffect } from "../ui/card-hover-effect";
import { CodeBlock } from "../ui/code-block";

interface AnswersList {
  id: string;
  SessionId: string;
  email: string;
  name: string;
  profileImage: string;
  solution: Solution[];
}

interface Solution {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
  language: string;
  brutesol?: string;
  bettersol?: string;
  optimalsol?: string;
}
export default function Cards({ res }: { res: AnswersList }) {
  console.log(res);
  return (
    <div className="max-w-5xl overflow-hidden  h-screen  mx-14">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
