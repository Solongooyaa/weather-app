"use client";
import { SearchIcon } from "@/components/SearchIcon";
import { FaSearch } from "react-icons/fa";

import { Day } from "@/components/Day";
import { Night } from "@/components/Night";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[1200px] bg-[#F3F4F6] rounded-tl-[2.5rem] rounded-bl-[2.5rem]">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="w-[567px] h-[80px] bg-[#ffffff] rounded-[2.5rem] ml-6 mt-6  "
        />
        <FaSearch />

        <Day />
      </div>
      <div className="w-[50%] h-[1200px] bg-[#0F141E] rounded-tr-[2.5rem] rounded-br-[2.5rem]">
        <Night />
      </div>
    </div>
  );
}
