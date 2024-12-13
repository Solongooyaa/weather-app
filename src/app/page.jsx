"use client";
import { SearchIcon } from "@/components/SearchIcon";
import { Day } from "@/components/Day";
import { Card } from "@/components/Card";
import { SearchInput } from "@/components/SearchInput";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-full bg-[#F3F4F6] flex flex-col-reverse justify-between items-center rounded-tl-[2.5rem] rounded-bl-[2.5rem] p-8">
        <Card value="day" />
        <SearchInput />
      </div>

      <div className="w-[50%] h-full bg-[#0F141E] rounded-tr-[2.5rem] rounded-br-[2.5rem] p-8 flex flex-col-reverse justify-between ">
        <Card value="night" />
      </div>
    </div>
  );
}
