import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { ReactTyped } from "react-typed";

export const About = () => {
  return (
    <section className="px-4 flex flex-col md:flex-row  items-center justify-between">
      <div className="md:w-1/2 mx-3 ">
        <h1 className="font-mono text-2xl sm:text-4xl my-4 sm:my-0 ">Hello</h1>
        <h1 className="text-4xl  font-bold leading-relaxed">
          I&apos;m Shreeram Mutukundu,
        </h1>
        <h1 className="sm:text-5xl  text-2xl font-bold mb-2 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent ">
            <>
              <ReactTyped
                strings={["Full Stack Developer", "ML NLP Enthusiast"]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={1000}
                startDelay={50}
                loop={true}
              />
            </>
          </span>
        </h1>

        {/* <p className="text-lg leading-relaxed">
          who also dabbles in app development sometimes. Currently in my
          pre-final year, I&apos;m all about turning creative ideas into real,
          working projects. I love the challenge of building things from
          scratch, and something which could potentially help a million of us!
        </p> */}
        <div className="flex flex-col gap-0">
          <div className="flex flex-row gap-x-4 mt-6">
            <FaGithub
              size={25}
              onClick={() =>
                window.open("https://www.github.com/Ritwikgotbugs")
              }
              className="transform transition-transform hover:-translate-y-1 cursor-pointer"
            />
            <FaLinkedin
              size={25}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ritwik-sharma-8714b4221/"
                )
              }
              className="transform transition-transform hover:-translate-y-1 cursor-pointer"
            />
            <FaInstagram
              size={25}
              onClick={() =>
                window.open("https://www.instagram.com/ritwikksharma_/")
              }
              className="transform transition-transform hover:-translate-y-1 cursor-pointer"
            />
            <BsTwitterX
              size={25}
              onClick={() => window.open("https://x.com/Ritwikshar")}
              className="transform transition-transform hover:-translate-y-1 cursor-pointer"
            />
          </div>
          <p
            className="underline text-sm sm:text-xl cursor-pointer mt-2 mb-8"
            onClick={() =>
              (window.location.href = "mailto:shritwik04@gmail.com")
            }
          >
            shreerammutukundu.2003@gmail.com{" "}
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
