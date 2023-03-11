import React from "react";
import programImage from "../../assets/images/programNutshell/programImg.svg";
import Image from "next/image";
export default function ProgramNutshell() {
  return (
    <div className="ml-10 flex  bg-white mt-[904px] ">
      <div className="mt-28">
        <Image src={programImage} alt="Program Image"></Image>
      </div>
      <div className=" shadow-2xl  rounded-xl flex flex-col p-16 w-[748px] h-[416px]  items-center">
        <h1 className="text-[48px] text-[#11AD8E] ">The Program in a Nutshell</h1>
        <h2 className="text-[32px] text-[#11AD8E] underline">Earn While You Learn</h2>
        <p className="justify-center text-center">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will  begin doing so
          within six months of the<br /> program's beginning. It resembles a cross
          between a corporate venture <br /> and an educational project.
         </p>
      </div>
    </div>
  );
}
