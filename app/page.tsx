"use client";
import Image from "next/legacy/image";
import logo from "../public/images/logo 1.svg";
import landingImg from "../public/images/landing-img.svg";
import Card from "./components/Card";
import FancyCard from "./components/fancyCard";
import AnimatedComponent from "./components/AnimatedComponent";
import CustomInput from "./components/CustomInput";

export default function Home() {
  return (
    <main className="flex flex-col py-4">
      <div className="flex mx-4 justify-between items-center">
        <Image
          className="object-scale-down h-48 w-96"
          src={logo}
          priority
          alt="logo"
        />
        <div className="border border-white rounded-full p-5 h-12 w-112 text-white uppercase flex items-center justify-center">
          XEROCODEE
        </div>
      </div>
      <div className="h-px bg-white w-screen"></div>

      <div className="flex flex-col justify-evenly items-center w-screen sm:my-8 sx:my-2">
        <span className="sm:text-4xl sx:text-2xl  text-center font-semibold gradient-text m-4 sx:my-2">
          Integrate AI Throughout Your Workflow
        </span>
        <span className="sm:text-6xl sx:text-5xl text-center font-normal text-white m-4 sx:my-2">
          Code Doctor
        </span>
        <p className="text-white text-center font-sans sm:leading-10 sx:leading-6 sm:text-2xl sx:text-m m-4 sx:my-2">
          Make processes where AI collaborates with your team throughout the
          whole development process.
        </p>
      </div>

      <CustomInput />

      <div className="w-full ">
        <Image
          src={landingImg}
          layout="responsive"
          objectFit="cover"
          alt="landing img"
          className="w-full h-auto"
          priority
        />
      </div>

      <h2 className="font-semibold text-transparent lg:text-6xl sm:text-4xl sx:text-xl bg-clip-text text-center bg-gradient-to-r from-indigo-600 to-fuchsia-400 my-2 sm:mx-8 sx:mx-2 ">
        Boost the speed of your development and test cycles.
      </h2>
      <p className="text-white text-center font-sans lg:leading-10 sx:leadin5g- sm:text-xl sx:text-sm my-2 sm:mx-8 sx:mx-2">
        With AI-driven test case generation and code analysis, problems may be
        found and fixed more quickly.
      </p>

      <div className="flex flex-col lg:h-screen m-8">
        <div className="flex flex-row md:justify-start sx:justify-center">
          <Card data={["CI/CD Pipeline Generate", "Build / Deployment"]} />
        </div>
        <div className="flex flex-row justify-center">
          <AnimatedComponent />
        </div>
        <div className="flex flex-row md:justify-end sx:justify-center">
          <Card data={["Generate Test Cases", "Code Analysis"]} />
        </div>
      </div>

      <div className="flex sx:items-center md:justify-center sx:flex-col md:flex-row m-8 sx:space-y-8 md:space-y-0 md:space-x-8">
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

      <div className="flex justify-center mx-8">
        <FancyCard
          title={
            "Fix security concerns more quickly using generated code recommendations"
          }
          description={
            "With the aid of AI, recognise any security risk and swiftly and effectively fix it. granting developers the freedom they require to protect their work frequently and early."
          }
        />
      </div>

      <div className="flex flex-col justify-evenly items-center w-screen sm:my-8 sx:my-2">
        <span className="sm:text-4xl sx:text-2xl  text-center font-semibold gradient-text m-4 sx:my-2">
          Automate all aspects of your delivery process with AI support.
        </span>
        <p className="text-white text-center font-sans sm:leading-10 sx:leading-6 sm:text-2xl sx:text-m m-4 sx:my-2">
          Get Early Access
        </p>
      </div>

      <CustomInput />

      <span className="inline-flex justify-center w-screen mt-8">
        <p className="text-white text-center md:text-xl sx:text-sm">
          Copyright © 2023{" "}
          <span className="font-bold mx-1">EXOCODE TECHNOLOGIES</span> | All
          rightsreserved
        </p>
      </span>
    </main>
  );
}
