"use client";
import { SearchIcon } from "./SearchIcon";

export const SearchInput = ({ search, onChangeText, onPressEnter, zindex }) => {
  return (
    <div className="w-[400px] h-12 flex items-center bg-[#ffffff]  rounded-[2.5rem] z-10">
      <button>
        <SearchIcon />
      </button>
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
