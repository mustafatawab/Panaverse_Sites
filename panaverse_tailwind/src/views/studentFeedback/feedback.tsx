import React from "react";
import background from "../../assets/images/footer/background.svg";
import Image from "next/image";
import mustafaImage from "../../assets/images/stdFeedback/mustafa.jpeg";
import image from "../../assets/images/stdFeedback/image.svg";
export default function StudentFeedback() {
  return (
    <>
      <div className=" relative">
        <Image
          src={background}
          alt="Background Image"
          className="w-full -z-10 h-[872px]"
        ></Image>

        <div className="text-white -mt-[660px] absolute justify-around">
          <div className=''>
            <h1 className=" ml-64 text-3xl font-bold  mb-8 ">
              Student Feedback
            </h1>
            <section className="bg-white text-black w-[605px] h-[316px] p-10 ml-32 rounded-xl">
              <div className="text-black flex items-center ">
                <Image
                  src={mustafaImage}
                  alt="Profile Image"
                  className="w-[100px] h-[100px] rounded-full"
                ></Image>
                <div className="px-4">
                  <h1 className="text-xl font-semibold text-[#11AD8E] underline">
                    Mustafa Tawab
                  </h1>
                  <p>Software Engineer</p>
                </div>
              </div>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                nemo saepe suscipit dicta! Debitis omnisiditate nesciunt
                doloremque totam tenetur blanditiis laboriosam!
              </p>
            </section>
          </div>

          <Image
            src={image}
            alt="Metaverse Image"
            className="-mt-[230px] ml-[950px]"
          ></Image>
        </div>
      </div>
    </>
  );
}
