"use client";
import { SearchIcon } from "./SearchIcon";

export const SearchInput = ({ search, onChangeText, onPressEnter, zindex }) => {
  
  return (
    <div className={`w-[500px] h-12 flex justify-center items-center bg-[#ffffff] ${zindex} ml-[15rem] mt-[5rem] rounded-[2.5rem]`}>
      <button>
        <SearchIcon />
      </button>
      <div></div>
      <input
        onChange={onChangeText}
        onKeyDown={onPressEnter}
        className="flex-grow border-none outline-none pl-4"
        placeholder="Search..."
        value={search}
      />
    </div>
  );
};
