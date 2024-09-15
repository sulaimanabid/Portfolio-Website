"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/mugshot.png"
            height={250}
            width={250}
            alt="Sulaiman Abid"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-pulse tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Sulaiman Abid!
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Code, compile, chill,{" "}
            repeat.
            </span>
          </p>
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate Software Engineer with a focus on React - Next & Full Stack development,
          dedicated to crafting elegant, optimized and user-friendly web applications.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:sulaimanabid3@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
