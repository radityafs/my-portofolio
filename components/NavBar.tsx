"use client";

import { useTheme } from "next-themes";
import React, { useState } from "react";
import { FaBars, FaRegMoon, FaRegSun } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-20 my-4 lg:my-8"
      style={{
        zIndex: 100,
      }}
    >
      <a href="/" className="text-2xl font-bold">
        Raditya
      </a>

      <div className="hidden md:flex space-x-8 items-center">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/articles">Articles</a>
        <a href="/about">About</a>
      </div>

      <div className="flex gap-4 md:gap-6 items-center">
        {theme === "dark" ? (
          <FaRegSun
            href="#"
            className="text-2xl cursor-pointer bg-gray-800 p-2 rounded-full size-10"
            onClick={() => setTheme("light")}
          />
        ) : (
          <FaRegMoon
            onClick={() => setTheme("dark")}
            className="text-2xl cursor-pointer"
          />
        )}

        <a
          href="https://api.whatsapp.com/send/?phone=%2B6281232254875"
          target="_blank"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
        >
          Contact Me
        </a>

        <div className="md:hidden flex items-center">
          <FaBars onClick={() => setIsOpen(!isOpen)} className="text-2xl" />
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden absolute size-full text-white top-0 left-0 right-0 bg-gray-800 p-4 rounded-lg"
          style={{
            zIndex: 99,
          }}
        >
          <div className="flex justify-end">
            <FaXmark onClick={() => setIsOpen(!isOpen)} className="text-2xl" />
          </div>

          <div className="flex h-full flex-col gap-4">
            <ul className="flex h-full justify-center items-center flex-col gap-8">
              <li>
                <a href="/" className="text-2xl">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-2xl">
                  Projects
                </a>
              </li>
              <li>
                <a href="/articles" className="text-2xl">
                  Articles
                </a>
              </li>
              <li>
                <a href="/about" className="text-2xl">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
