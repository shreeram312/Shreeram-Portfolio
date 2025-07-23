"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("/");

  // Set active state based on the current path
  useEffect(() => {
    if (pathname !== null) {
      setActive(pathname);
    }
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header className="w-full text-white bg-primary bg-opacity-80 fixed top-0 z-10 backdrop-blur-md shadow-lg">
      <NextTopLoader color="#000000" height={3} showSpinner={false} />
      <div className="px-3 sm:px-4 md:px-10 py-3 md:py-5">
        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-3">
          {/* Top row - Profile and Resume */}
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <img
                src="https://avatars.githubusercontent.com/u/126177107?v=4"
                alt="Profile Image"
                className="w-8 h-8 object-cover rounded-full transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500"
              />
              <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
                &lt;Shreeram /&gt;
              </p>
            </div>

            <div className="relative group inline-block">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1WWumTa8QY-GUFjH7I6BbVkQG7TuINQyp/view?usp=sharing"
                  )
                }
                className="relative border-2 border-slate-700 bg-opacity-85 group-hover:border-transparent bg-slate-900 text-white text-sm py-1.5 px-3 rounded-xl z-20 transition-all duration-300 bg-clip-padding"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Bottom row - Navigation */}
          <div className="flex justify-center w-full">
            <nav className="flex gap-1 rounded-xl p-1 border-2 border-slate-700 border-opacity-50 bg-slate-900 bg-opacity-45 w-full max-w-sm">
              {navItems.map((item) => (
                <div key={item.name} className="relative flex-1">
                  <button
                    className={`relative w-full text-white p-2 rounded-lg transition-all ease-in-out duration-500 overflow-hidden text-sm z-20 ${
                      active === item.path ? "bg-gray-500" : ""
                    }`}
                    onClick={() => {
                      setActive(item.path);
                      if (item.path === "#contact") {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        router.push(item.path);
                      }
                    }}
                  >
                    <span className="relative z-30">{item.name}</span>
                    <span
                      className={`absolute inset-0 rounded-lg transition-opacity duration-300 ease-in-out bg-gradient-to-r from-red-400 to-yellow-400 opacity-0 group-hover:opacity-100 pointer-events-none`}
                    />
                  </button>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://avatars.githubusercontent.com/u/126177107?v=4"
              alt="Profile Image"
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500"
            />
            <div className="relative group inline-block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>

              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1WWumTa8QY-GUFjH7I6BbVkQG7TuINQyp/view?usp=sharing"
                  )
                }
                className="relative border-2 border-slate-700 bg-opacity-85 group-hover:border-transparent bg-slate-900 text-white py-1 px-2 md:py-2 md:px-4 rounded-2xl text-sm md:text-base z-20 transition-all duration-300 bg-clip-padding"
              >
                Resume
              </button>
            </div>
            <p className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
              &lt;Shreeram /&gt;
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex gap-x-4 rounded-2xl p-2 border-2 border-slate-700 border-opacity-50 bg-slate-900 bg-opacity-45">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  className={`relative text-white p-2 rounded-lg transition-all ease-in-out duration-500 overflow-hidden z-20 ${
                    active === item.path ? "bg-gray-500" : ""
                  }`}
                  onClick={() => {
                    setActive(item.path);
                    if (item.path === "#contact") {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      router.push(item.path);
                    }
                  }}
                >
                  <span className="relative z-30">{item.name}</span>
                  <span
                    className={`absolute inset-0 rounded-lg transition-opacity duration-300 ease-in-out bg-gradient-to-r from-red-400 to-yellow-400 opacity-0 group-hover:opacity-100 pointer-events-none`}
                  />
                </button>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
