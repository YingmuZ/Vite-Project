import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"


const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[1]"
        src="../assets/bg.png"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full -w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-black">Yingmu Zhang</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
             I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                2000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast",
                2000,
                "Media Creator",
                2000,
             
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", display: "inline-block", paddingLeft:"5px" }}
            />
          </h2>
          <div className="flex lg:items-start justify-between  gap-5 pt-4 max-w-[100px] w-full">
          
            <a href="https://www.linkedin.com/in/yingmu-zhang-421b94212/" target="_blank"><FaLinkedinIn className="cursor-pointer" size={25} /></a>
            <a href="https://github.com/YingmuZ" target="_blank"><FaGithub className="cursor-pointer inline-block" size={25} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
