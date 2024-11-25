import Image from "next/image";
import React from "react";

const Aboutme = () => {
  return (
    <div
      id="about"
      className="sm:flex sm:flex-row sm:py-24  flex flex-col justify-between lg:gap-8"
    >
      {/* About Me Section */}
      <div className="my-4 w-full lg:w-1/2 relative ">
        <div className="hidden lg:flex flex-col items-center absolute top-16 -right-14 ">
          <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="h-36 w-[2px] bg-[#1a1443]"></span>
        </div>
        <div className="text-justify">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase mx-4">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm sm:text-lg sm:w-3/4 w-fit mx-4">
            Myself Shreeram Mutukundu a final-year student with a strong
            foundation in Full-stack application development and good knowledge
            of Natural language processing (NLP) and Machine learning.
            Passionate about building efficient and user-friendly applications,
            I have worked on projects like a chat application, an AI proctored
            exam system, a duplicate question pairs detection system using NLP,
            a Twitter clone, and a food ordering app. With a self-motivated
            approach to learning, I am constantly exploring new technologies to
            enhance their skills and solve real world problems
          </p>
        </div>
      </div>

      <div className="order-1 lg:order-2 sm:mx-3 m-3 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-5">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">Coder</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">Shreeram Mutukundu</span>
              <span className="text-gray-400">{`',`}</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">skills:</span>
              <span className="text-gray-400">{`['`}</span>
              <span className="text-amber-300">React</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">NextJS</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Redux</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Express</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Javascript</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Java</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Python</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">PostgresSQL</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Docker</span>

              <span className="text-gray-400">{"'],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">
                quickLearner:
              </span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">
                problemSolver:
              </span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                hireable:
              </span>
              <span className="text-orange-400">function</span>
              <span className="text-gray-400">{"() {"}</span>
            </div>
            <div>
              <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
              <span className="text-gray-400">{`(`}</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="mr-2 text-white">hardWorker</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="mr-2 text-white">problemSolver</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="mr-2 text-white">skills.length</span>
              <span className="mr-2 text-amber-300">&gt;=</span>
              <span className="text-orange-400">5</span>
            </div>
            <div>
              <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
            </div>
            <div>
              <span className="text-gray-400">{`};`}</span>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
