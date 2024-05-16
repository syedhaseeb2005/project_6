import React from "react";
import img1 from "../assets/image 1.png";

const HeroSection = () => {
  return (
    <div className="h-[400px] lg:h-[480px] w-full bg-cover bg-no-repeat" style={{backgroundImage:`url(${img1})`}}>
      <div className="px-5 lg:px-32 lg:pt-36 sm:pt-28 pt-24 pb-10 text-center ">
        <h1 className="text-[#03E1FF] md:text-8xl sm:text-[60px] font-bold text-[40px] lg:text-[115px] lg:mb-2">Solana launchpads</h1>
        <div className="bg-gradient-b from-[#16111] to-[#141414]">
          <p className="lg:w-[60%] w-[70%] md:text-3xl mx-auto lg:text-3xl text-center">
            You want a launch of project on solana? Or you're looking for new
            project?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
