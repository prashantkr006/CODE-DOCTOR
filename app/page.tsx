"use client";
import Image from "next/legacy/image";
import logo from "../public/images/logo 1.svg";
import landingImg from "../public/images/landing-img.svg";
import Card from "./components/Card";
import FancyCard from "./components/fancyCard";

export default function Home() {
  return (
    <main className="py-4">
      <div className="flex mx-4 justify-between items-center">
          <Image src={logo} alt="logo"  />
        <div className="border border-white rounded-full p-5 h-12 w-112 text-white uppercase flex items-center justify-center">
          XEROCODEE d
        </div>
      </div>
      <div className="h-px bg-white sm:w-screen w-screen"></div>
      <div className="flex flex-col justify-evenly items-center w-screen my-8">
        <span className="text-4xl text-center font-semibold gradient-text my-4">
          Integrate AI Throughout Your Workflow
        </span>
        <span className="text-6xl text-center font-normal text-white my-4">
          Code Doctor
        </span>
        <p className="text-white text-center font-sans leading-10 text-xl my-4">
          Make processes where AI collaborates with your team throughout the
          whole development process.
        </p>
      </div>

      {/*Input Box */}
      <div className="flex justify-center">
        <div className="flex m-4 p-1 w-9/12 rounded-full max-w-sm bg-gradient-to-r from-pink-500 via-rose-500 to-indigo-500">
          <div className="relative flex flex-grow">
            <input
              className="p-4 h-16 w-full rounded-full text-white focus:outline-none bg-black"
              type="text"
              id="name"
              placeholder="Your Email"
            />
            <button className="absolute h-10 top-1/2 right-0 transform -translate-y-1/2 border-white border-2 rounded-full px-4 text-white mr-4">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <Image
          src={landingImg}
          layout="responsive"
          objectFit="cover"
          alt="landing img"
          className="w-full h-auto"
        />
      </div>

      <h2 className="font-semibold text-transparent text-6xl bg-clip-text text-center bg-gradient-to-r from-indigo-600 to-fuchsia-400 my-4">
        Boost the speed of your development and test cycles.
      </h2>
      <p className="text-white text-center font-sans leading-10 text-xl my-4">
        With AI-driven test case generation and code analysis, problems may be
        found and fixed more quickly.
      </p>

      {/*Normal cards and animation */}
      <div className="flex flex-col mx-4">
        <div className="flex-1">
          <Card data={["CI/CD Pipeline Generate", "Build / Deployment"]} />
        </div>
        <div className="flex-1 flex justify-end items-end">
          <Card data={["Generate Test Cases", "Code Analysis"]} />
        </div>
      </div>

      <div className="flex justify-center m-8 space-x-8">
        <FancyCard
          title={"ask questions"}
          description={
            "To assist with managing the development, testing, and deployment process, ask it questions or issue instructions."
          }
          showButton={true}
        />
        <FancyCard
          title={"execute"}
          description={
            "With a single command, you may run a series of tests or install a new version of a programme in a particular setting."
          }
          showButton={true}
        />
      </div>

      <div className="flex justify-center my-8">
        <FancyCard
          title={
            "Fix security concerns more quickly using generated code recommendations"
          }
          description={
            "With the aid of AI, recognise any security risk and swiftly and effectively fix it. granting developers the freedom they require to protect their work frequently and early."
          }
        />
      </div>

      <div className="flex flex-col justify-evenly items-center w-screen my-4">
        <span className="text-4xl text-center font-semibold gradient-text my-4">
          Automate all aspects of your delivery process with AI support.
        </span>
        <span className="text-6xl text-center font-normal text-white my-4">
          Get Early Access
        </span>
        <p className="text-white text-center font-sans leading-10 text-xl my-4">
          Make processes where AI collaborates with your team throughout the
          whole development process.
        </p>
      </div>

      {/*Input Box */}
      <div className="flex justify-center">
        <div className="flex m-4 p-1 w-9/12 rounded-full max-w-sm bg-gradient-to-r from-pink-500 via-rose-500 to-indigo-500">
          <div className="relative flex flex-grow">
            <input
              className="p-4 h-16 w-full rounded-full text-white focus:outline-none bg-black"
              type="text"
              id="name"
              placeholder="Your Email"
            />
            <button className="absolute h-10 top-1/2 right-0 transform -translate-y-1/2 border-white border-2 rounded-full px-4 text-white mr-4">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      {/*footer*/}
      <span className="inline-flex justify-center w-screen">
        <p className="text-white inline-flex text-xl">
          Copyright © 2023{" "}
          <span className="font-bold mx-1">EXOCODE TECHNOLOGIES</span> | All
          rightsreserved
        </p>
      </span>
    </main>
  );
}
