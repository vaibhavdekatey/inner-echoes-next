import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center w-full ">
      <div className="font-mono flex flex-col mx-auto">
        <p className="text-xs text-teal-400">Hello, My name is</p>
        <div className="flex flex-col">
          <h1 className="font-mono text-6xl">Vaibhav Dekatey</h1>
          <h2 className="font-mono font-extralight text-3xl">
            Fullstack Developer &
          </h2>
          <h2 className="font-mono font-extralight text-3xl">
            Graphics Designer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
