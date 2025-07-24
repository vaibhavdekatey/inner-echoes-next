import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col flex-1 h-full w-full my-auto">
      <div className="font-mono flex flex-col ">
        <p className="text-lg bg-gradient-to-r from-teal-500 to-teal-300 text-transparent bg-clip-text">
          About Me
        </p>
        <div className="flex flex-col mb-8">
          <h1 className="font-mono text-5xl lg:text-8xl md:text-6xl font-bold bg-gradient-to-r from-neutral-400 to-neutral-200 text-transparent bg-clip-text mb-4">
            Vaibhav Dekatey
          </h1>
          <h2 className="font-mono font-extralight text-base md:text-3xl lg:text-4xl  ">
            Fullstack Developer &
          </h2>
          <h2 className="font-mono font-extralight text-base md:text-3xl lg:text-4xl  ">
            Graphics Designer
          </h2>
        </div>
        <p className="text-sm md:text-base lg:text-lg w-10/12 bg-gradient-to-r from-neutral-100 to-neutral-400 text-transparent bg-clip-text">
          I craft engaging digital journeys from vision to launch, blending
          creative design with expert development to deliver intuitive and
          impactful online presences.
        </p>
        <a
          href="mailto:pixcode.dev@gmail.com"
          className="border-2 border-transparent bg-neutral-400 text-neutral-800 hover:border-neutral-400 hover:bg-gradient-to-r hover:from-neutral-400 hover:to-neutral-200 hover:text-transparent hover:bg-clip-text p-3 rounded-lg w-fit my-8 transition-all ease-initial">
          Mail Me
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
