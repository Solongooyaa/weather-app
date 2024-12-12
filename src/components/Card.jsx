import { IoLocationOutline } from "react-icons/io5";
export const Card = ({ value }) => {
  const nightCardColor =
    " bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white shadow-[#1F2937]";

  const color = value == "night" ? nightCardColor : "bg-[F9FAFB]";
  return (
    <div className="w-[55%] h-[828px] bg-[#111827] rounded-[2.25rem] ml-32 mt-32">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl text-[#ffffff] mt-6">Ulaanbaatar</h1>
        <IoLocationOutline className="mt-6" />
      </div>

      <div className="flex justify-center items-center mt-10">
        <img
          className="w-[16rem] h-[16rem]"
          src="../Moon.png"
          type="text"
          alt="Moon Icon"
        />
      </div>
      <div>
        <div className="text-[10rem] text-[#F9FAFB] font-bold">17°</div>
        <div className="text-2xl text-[#777CCE]">Clear</div>
      </div>
      <div className="flex justify-between">
        <img src="../Home.png" />
        <img src="../Pin.png" />
        <img src="../Heart.png" />
        <img src="../User.png" />
      </div>
    </div>
  );
};
