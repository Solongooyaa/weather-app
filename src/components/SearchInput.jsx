import { SearchIcon } from "./SearchIcon";

export const SearchInput = () => {
  return (
    <div className="w-96 h-12 flex items-center bg-[#ffffff] rounded-[2.5rem] px-4 mt-6">
      <button>
        <SearchIcon />
      </button>
      <input
        className="flex-grow border-none outline-none pl-4"
        placeholder="Search..."
      />
    </div>
  );
};
