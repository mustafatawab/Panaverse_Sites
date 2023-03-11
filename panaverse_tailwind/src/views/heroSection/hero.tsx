import React from "react";
import Image from "next/image";
import heroBG from "../../assets/images/hero/heroBG.svg";
import PrimaryButtons from "@/components/buttons/PrimaryButtons";
// import heroImg from "../../assets/images/hero/heroImage.jpeg";
import heroImg from "../../assets/images/hero/heroImg.svg";

export default function Hero() {
  return (
    <>
      <div className="flex-1 -mt-40 relative">
        <div className=" ml-[120px] text-white absolute mt-[240px] ">
          <h1 className="font-extrabold text-[48px]">
            Become <br />{" "}
            <span className="text-[#11AD8E]">Certified Web 3.0</span>
            and
            <br />
            <span className="text-[#11AD8E]">Metaverse Developer</span>
          </h1>
          <span className="mt-[30px] text-[24px]">
            Launch Your Dev Career With Web 3 and Metaverse <br /> Getting Ready
            for the Next Generation of the Internet
          </span>

          <div className="mt-[30px] w-[129px] h-[48px]">
            <PrimaryButtons labelName="Join Now" link="/"></PrimaryButtons>
          </div>
        </div>

        <div className="absolute  text-white mt-[240px] ml-[824px]">
            <Image className="w-[528px] h-[540px]" src={heroImg} alt='Hero Image'></Image>
        </div>
        <Image
          className="w-screen absolute -z-20"
          src={heroBG}
          alt="Hero Background Image"
        ></Image>
      </div>
    </>
  );
}
