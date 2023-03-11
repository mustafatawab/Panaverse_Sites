import React from "react";
import Link from "next/link";

export default function MenuItems({ labelName, link }: any) {
  return (
    <div 
      className="text-white text-[24px] hover:text-[#11AD8E] hover:underline">
      <Link href={link}>{labelName}</Link>
    </div>
  );
}
