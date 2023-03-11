import PrimaryButtons from "@/components/buttons/PrimaryButtons";
import freelanceImg from "../../assets/images/whyJoin/freelance.svg";
import Image from "next/image";
import React from "react";
import market from "../../assets/images/whyJoin/market.svg";
import freelance from "../../assets/images/whyJoin/freelance.svg";
import economy from "../../assets/images/whyJoin/economy.svg";
import product from "../../assets/images/whyJoin/product.svg";
import { BsPersonWorkspace } from "react-icons/bs";

export default function WhyJoin() {
  return (
    <div className="bg-[#58b9a64a] flex px-24 py-16 space-x-12 m-16 ">
      <div className="w-[517px] h-[280px]">
        <h1 className="text-[#11AD8E] text-3xl font-bold text-center">
          Why Join
        </h1>
        <ol className="text-black list-item list-disc text-[20px]">
          <li className="py-2">
            Own products (Full-Stack App Templates, AR and VR Experiences, and
            APIs).
          </li>
          <li className="py-2">
            Offer services at a rate of $50 per hour ($96,000 per year).
          </li>
          <li className="py-2">
            Fantastic opportunity to better their financial situation
          </li>
          <li className="py-2">Boost economy by expanding software exports.</li>
          <div className="w-[150px]">
            <PrimaryButtons labelName="Join now" link="/"></PrimaryButtons>
          </div>
        </ol>
      </div>
      <div className="justify-evenly flex flex-wrap space-y-5">
        <div className="bg-white space-y-5  flex flex-col items-center text-center w-[280px] h-[220px] shadow-xl p-6 rounded-xl">
          <h1 className=" text-2xl font-semibold ">Product Owner</h1>
          {/* <BsPersonWorkspace className="m-auto text-[#11AD8E] text-8xl"></BsPersonWorkspace> */}
          <Image src={product} alt="Product Owner"></Image>
        </div>
        <div className="bg-white  space-y-5 flex flex-col items-center text-center w-[280px] h-[220px] shadow-xl p-6 rounded-xl">
          <h1 className=" text-2xl font-semibold ">Freelance</h1>
          {/* <BsPersonWorkspace className="m-auto text-[#11AD8E] text-8xl"></BsPersonWorkspace> */}
          <Image src={freelance} alt="Freelance"></Image>
        </div>
        <div className="bg-white space-y-5 flex flex-col items-center text-center w-[280px] h-[220px] shadow-xl p-6 rounded-xl">
          <h1 className=" text-2xl font-semibold ">Access to Global Market</h1>
          {/* <BsPersonWorkspace className="m-auto text-[#11AD8E] text-8xl"></BsPersonWorkspace> */}
          <Image src={market} alt="Access to global market"></Image>
        </div>
        <div className="bg-white space-y-5 items-center flex flex-col text-center w-[280px] h-[220px] shadow-xl p-6 rounded-xl">
          <h1 className=" text-2xl font-semibold ">Product Owner</h1>
          {/* <BsPersonWorkspace className="m-auto text-[#11AD8E] text-8xl"></BsPersonWorkspace> */}
          <Image src={economy} alt="Boost Economy"></Image>
        </div>
      </div>
    </div>
  );
}
