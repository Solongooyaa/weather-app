"use client";
import { IoLocationOutline } from "react-icons/io5";
import { SunIcon } from "@/components/SunIcon";
export function Day() {
  return (
    <div className="w-[55%] h-[828px] bg-[#ffffff] rounded-[2.25rem] ml-32 my-32">
      <div className="flex justify-around">
        <h1 className="text-3xl[1.875rem] text-black ">Ulaanbaatar</h1>
        <IoLocationOutline />
      </div>

      <div className="w-[10rem] h-[10rem]">26*</div>
    </div>
  );
}
