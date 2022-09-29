import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className=" bg-slate-900 flex flex-row justify-center items-center text-cyan-800 mt-10 "
    >
      <div className="about-container container flex-col ml-20 space-y-12 justify-center  ">
        <div className="text-7xl mt-5 font-bold text-cyan-500 text-center">
          About
        </div>
        <div className="wrapper">
          <div className="text-3xl mt-5 text-cyan-400 w-1/2">
            Hey, I am a Software engineer with over wo yeras of experience in
            building applications and managing their infrastructure with cloud
            providers like AWS
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
