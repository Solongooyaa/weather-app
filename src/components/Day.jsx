import { IoLocationOutline } from "react-icons/io5";

export const Day = () => {
  return (
    <div className="w-[55%] h-[828px] bg-[#ffffff] rounded-[2.25rem] ml-32 mt-32">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl text-[#111827] mt-6">Ulaanbaatar</h1>
        <IoLocationOutline className="mt-6" />
      </div>

      <div className="flex justify-center items-center mt-10">
        <img className="w-[16rem] h-[16rem]" src="../Sun.png" alt="Sun Icon" />
      </div>
      <div>
        <div className="text-[10rem]">26°</div>
        <div className="text-2xl text-[#FF8E27]">Bright</div>
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
