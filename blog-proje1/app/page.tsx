"use client"

import { Pacifico } from "next/font/google";
import { useEffect, useState } from "react";
import { DiCodeigniter } from "react-icons/di";
import { DiFirefox } from "react-icons/di";
import { DiGnu } from "react-icons/di";
import { DiRasberryPi } from "react-icons/di";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <>
      <div className="items-center text-center bg-white dark:bg-black">
        <a 
        href="" 
        className="font-semibold text-2xl text-black hover:text-red-700 dark:text-white dark:hover:text-red-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, asperiores?
          </a>
      </div>

      <header className="bg-mycolor3 p-4 shadow-2xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg md:text-xl font-semibold">logo</div>

          <div className="hidden md:block md:w-1/3 lg:w-1/2">
            <input type="text" className="w-full focus:ring-4 ring-yellow-300 pl-2" />
          </div>

          <div className="text-white text-lg flex font-semibold gap-4">
            <div>login</div>
            <button onClick={()=>setDarkMode(!darkMode)}>dark</button>
            </div>
        </div>
      </header>

      <div className="flex items-center justify-center space-x-8 p-3 bg-mycolor border-b-4 border-green-600">
        <a href="" className="text-gray-900 hover:text-pink-500">Anasayfa</a>
        <a href="" className="text-gray-900 hover:text-pink-500">Blog</a>
        <a href="" className="text-gray-900 hover:text-pink-500">Content</a>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="/picture.jpg"
          alt=""
          className="h-64 sm:h-72 md:h-80 lg:h-96 opacity-80 hover:opacity-100 transition duration-700" />
      </div>

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
