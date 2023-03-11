import React from "react";
import Link from "next/link";

export default function PrimaryButtons({ labelName, link }: any) {
  return (
    <div className="bg-[#11AD8E] text-black h-[48px]  px-[24px] py-[10px] font-bold rounded-md hover:bg-transparent hover:outline hover:text-[#11AD8E]">
      <Link href={link}>
        <button>{labelName}</button>
      </Link>
    </div>
  );
}
