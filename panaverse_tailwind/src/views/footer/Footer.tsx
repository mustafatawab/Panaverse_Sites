import React from "react";
import Image from "next/image";
import panaverseLogo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/footer/facebook.svg";
import linkedin from "../../assets/images/footer/linkedin.svg";
import twitter from "../../assets/images/footer/twitter.svg";
import github from "../../assets/images/footer/github.svg";
import youtube from "../../assets/images/footer/youtube.svg";
import location from "../../assets/images/footer/location.svg";
import message from "../../assets/images/footer/msg.svg";
import whatsapp from "../../assets/images/footer/whatsapp.svg";
import background from "../../assets/images/footer/background.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-around bg-black p-10 ">
      <div className="flex flex-col text-white items-center space-y-5 ">
        <Image src={panaverseLogo} alt="Panaverse Logo"></Image>
        <p className="text-center">
          Getting Ready for the Next Generation and Future <br /> of the
          Internet Join a 13 Trillion Dollar Industry with 5 Billion Users
        </p>
        <div className="flex flex-row gap-3 ">
          <Image src={facebook} alt="facebook"></Image>
          <Image src={linkedin} alt="Linked In"></Image>
          <Image src={twitter} alt="twitter"></Image>
          <Image src={github} alt="Git Hub"></Image>
          <Image src={youtube} alt="Youtube"></Image>
        </div>
      </div>

      {/* Links */}
      <div className="text-white ">
        {/* <h1 className="text-[#11AD8E] underline text-xl font-semibold">Links</h1> */}
        <ul className="">
          <li className="text-[#11AD8E] underline text-2xl font-semibold">
            Links
          </li>
          <Link className="" href={"/"}>
            {" "}
            <li className="mt-2 hover:text-[#11AD8E] hover:underline">
              Home
            </li>{" "}
          </Link>
          <Link href={"/"}>
            {" "}
            <li className="mt-2 hover:text-[#11AD8E] hover:underline">
              About
            </li>{" "}
          </Link>
          <Link href={"/"}>
            {" "}
            <li className="mt-2 hover:text-[#11AD8E] hover:underline">
              Courses
            </li>{" "}
          </Link>
          <Link href={"/"}>
            {" "}
            <li className="mt-2 hover:text-[#11AD8E] hover:underline">
              Contact
            </li>{" "}
          </Link>
        </ul>
      </div>

      <div className="text-white">
        <ol className="space-y-3">
          <h1 className="text-[#11AD8E] underline text-2xl">Information</h1>
          <li className="flex gap-2">
            {" "}
            <Image src={location} alt="Location"></Image>Plot 245/2 M, PECHS
            Block 6, Karachi{" "}
          </li>
          <li className="flex gap-2">
            {" "}
            <Image
              src={message}
              alt="Message"
            ></Image>panaversedao@gmail.com{" "}
          </li>
          <li className="flex gap-2">
            {" "}
            <Image src={whatsapp} alt="Whatsapp"></Image>+923475300572{" "}
          </li>
        </ol>
      </div>
    </div>
  );
}
