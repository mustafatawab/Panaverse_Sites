import React from "react";
import Image from "next/image";
import imageO1 from "../../assets/images/citiesEvents/imageO1.svg";
import imageO2 from "../../assets/images/citiesEvents/imageO2.svg";
import imageO3 from "../../assets/images/citiesEvents/imageO3.svg";
import imageO4 from "../../assets/images/citiesEvents/imageO4.svg";
import imageU1 from "../../assets/images/citiesEvents/imageU1.svg";
import imageU2 from "../../assets/images/citiesEvents/imageU2.svg";
import imageU3 from "../../assets/images/citiesEvents/imageU3.svg";
import imageU4 from "../../assets/images/citiesEvents/imageU4.svg";

export default function CitiesEvents() {
  return (
    <>
      <div>
        <h1 className="text-center text-[#11AD8E] text-3xl font-bold  p-10">Operational Cities</h1>
        <div className="flex justify-center">
          <Image src={imageO1} alt="Image 1"></Image>
          <Image src={imageO2} alt="Image 2"></Image>
          <Image src={imageO3} alt="Image 4"></Image>
          <Image src={imageO4} alt="Image 5"></Image>

          <div className="font-semibold w-[200px] h-[200px] rounded-xl shadow-xl justify-center text-center items-center content-center flex flex-col">
            Comming soon
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-[#11AD8E] text-3xl font-bold p-10">Upcoming Events</h1>
        <div className="flex justify-center">
          <Image src={imageU1} alt="Image 1"></Image>
          <Image src={imageU2} alt="Image 2"></Image>
          <Image src={imageU3} alt="Image 3"></Image>
          <Image src={imageU4} alt="Image 4"></Image>
        </div>
      </div>
    </>
  );
}
