"use client"
import Hero from "@/components/Hero";
import { Pacifico } from "next/font/google";
import { useRouter } from "next/navigation";
import { DiCodeigniter } from "react-icons/di";
import { DiFirefox } from "react-icons/di";
import { DiGnu } from "react-icons/di";
import { DiRasberryPi } from "react-icons/di";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function Home() {

  const router = useRouter();

  return (
    <>
      <Hero />

      <button type="button" className="bg-green-400 p-5 text-white" onClick={() => router.push("/blog")}>Blog</button>

      <div className="container mt-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-3 border-2 items-center justify-center flex flex-col p-4">
            <div className="relative">
              <DiCodeigniter className="text-5xl z-10" />
              <div className="z-50 absolute -top-1 right-1 bg-red-600 rounded-full px-2 text-white">5</div>
              <h2>Blog1</h2>
            </div>
          </div>

          <div className="border-2 items-center justify-center flex flex-col p-4">
            <DiFirefox className="text-5xl" />
            <h2>Blog2</h2>
          </div>

          <div className="border-2 items-center justify-center flex flex-col p-4">
            <DiGnu className="text-5xl" />
            <h2>Blog3</h2>
          </div>

          <div className="border-2 items-center justify-center flex flex-col p-4">
            <DiRasberryPi className="text-5xl" />
            <h2>Blog4</h2>
          </div>
        </div>
      </div>
    </>
  );
}
