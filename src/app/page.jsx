import { SearchIcon } from "@/components/SearchIcon";
import { FaBeer } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[1200px] bg-[#F3F4F6]">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="w-[567px] h-[80px] bg-[#ffffff] rounded-[2.5rem] ml-6 mt-6  "
        />
      </div>
      <div className="w-[50%] h-[1200px] bg-[#0F141E]"></div>
    </div>
  );
}
