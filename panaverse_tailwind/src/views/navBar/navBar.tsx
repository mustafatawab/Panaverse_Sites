import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/Logo.svg";
import MenuItems from "@/components/navBar/menuItem";
import MenuDropDown from "@/components/navBar/MenuDropDown";
import NavIconsButtons from "@/components/navBar/NavIconsButtons";
import PrimaryButtons from "@/components/buttons/PrimaryButtons";
import About from '../../pages/about/page'
// import panaverselogo from "/panaverse.png" 
function Header() {
  return (
    <>
      <div className="grid grid-cols-4 bg-gray-700 opacity-70 sticky top-0">
        <div className="ml-[87px] my-[24px] ">
          <Image src={logo} alt="Panaverse Logo"></Image>
        </div>
        <div className="flex col-span-2 items-center space-x-10">
          <MenuItems labelName="Home" link="/"></MenuItems>
          <MenuItems labelName="About" link={'../../pages/about/'}></MenuItems>

          <MenuDropDown labelName="Courses"></MenuDropDown>
          <MenuItems labelName="Contact" link="/"></MenuItems>
        </div>
        <div className="flex  items-center space-x-10">
 
          <NavIconsButtons></NavIconsButtons>
          <PrimaryButtons labelName='Apply Now' link='/'></PrimaryButtons>
        </div>
      </div>
    </>
  );
}

export default Header;
