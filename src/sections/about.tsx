import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { ReactTyped } from "react-typed";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export const About = () => {
  return (
    <section className="px-4 flex flex-col md:flex-row  items-center justify-between ">
      <div className="md:w-1/2 mx-3 sm:p-12 p-2">
        <h1 className="font-mono text-2xl sm:text-5xl my-5 sm:my-2">
          <span className="mr-4">Hello</span>
        </h1>

        <h1 className="text-2xl sm:text-5xl -my-3 sm:my-4 font-bold leading-relaxed">
          <span className="mr-4">I&apos;m</span>
          <span className="mr-4">Shreeram</span>
          <span className="mr-4">Mutukundu</span>
        </h1>

        <h1 className="sm:text-5xl text-2xl font-bold my-5 leading-tight tracking-wider">
          <span className="mr-4 bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
            <ReactTyped
              strings={["Full Stack Developer", "ML NLP Enthusiast"]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={1000}
              startDelay={50}
              loop={true}
            />
          </span>
        </h1>

        <div className="flex flex-col gap-0">
          <div className="flex flex-row gap-x-2 mt-6 sm:hidden">
            <FaGithub
              size={25}
              onClick={() => window.open("https://github.com/shreeram312")}
              className="transform hidden transition-transform hover:-translate-y-1 cursor-pointer"
            />
            <FaLinkedin
              size={25}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shreeram-mutukundu-30094028a/"
                )
              }
              className="transform hidden transition-transform hover:-translate-y-1 cursor-pointer"
            />
            <BsTwitterX
              size={25}
              onClick={() => window.open("https://x.com/realshreeram312")}
              className="transform hidden transition-transform hover:-translate-y-1 cursor-pointer"
            />
          </div>
          <p
            className="hidden underline text-sm sm:text-xl cursor-pointer my-3 mb-8"
            onClick={() =>
              (window.location.href = "mailto:shreerammutukundu.2003@gmail.com")
            }
          >
            shreerammutukundu.2003@gmail.com
          </p>
        </div>
      </div>

      <div className=" flex justify-center relative group rounded-full  sm:mr-32">
        <img
          src="https://avatars.githubusercontent.com/u/126177107?v=4"
          alt="About Me"
          className="rounded-full sm:w-full w-72 max-w-sm   transition-transform duration-500 ease-in-out transform "
        />
      </div>
    </section>
  );
};
