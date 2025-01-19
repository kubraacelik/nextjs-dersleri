"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
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
                        <button onClick={() => setDarkMode(!darkMode)}>dark</button>
                    </div>
                </div>
            </header>

            <div className="flex items-center justify-center space-x-8 p-3 bg-mycolor border-b-4 border-green-600">
                <Link href="/" className="text-gray-900 hover:text-pink-500">Anasayfa</Link>
                <Link href="/about" className='text-gray-900 hover:text-pink-500'>About</Link>
                <Link href="/blog" className='text-gray-900 hover:text-pink-500'>Blog</Link>
                <Link href="/contact" className="text-gray-900 hover:text-pink-500">Contact</Link>
            </div>
        </>
    )
}

export default Header