"use client";
import { CiLocationOn } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export const Card = ({
  value,
  cityName,
  temperature,
  condition,
  color,
  icon,
  date,
  image
}) => {
  if (value === "night") {
    color =
      " bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white shadow-[#1F2937] mt-[180px] ";
    icon = "text-white size-6";
    image = "../Moon.png"
  } else if (value === "day") {
    color = "bg-white shadow-[#1F2937]  ";
    icon = "text-black size-6";
    image = "../Sun.png"
  }
if(value=== "night" && condition==="sunny"){
  image=== "../Moon.png"
}

  if(value==="night" && condition==="sunny") {
    condition==="Clear"
  }

  return (
    <div
      className={`w-[45%] h-[828px] ${color}  rounded-[2.25rem] mx-4 mt-32 ml-[250px]`}
    >
      <div className="flex justify-around items-center">
        <div>
          <h3 className="mt-3">{date}</h3>
          <h1 className="text-3xl mt-2">{cityName}</h1>
        </div>

        <CiLocationOn className={`size-6 `} />
      </div>

      <div className="flex justify-center items-center mt-10">
        <img className="w-[16rem] h-[16rem]" src={image} alt="Sun Icon" />
      </div>
      <div className="mt-[4rem]">
        <div className="ml-[4rem]">
          <div className="text-[144px] font-bold ">{temperature}</div>
          <div className="text-2xl text-[#FF8E27]">{condition}</div>
        </div>
        <div className="w-[24rem] h-[2rem] flex justify-around pt-[3rem] ml-[40px] gap-6">
          <CiHome className={`${icon}`} />
          <CiLocationOn className={`${icon}`} />
          <CiHeart className={`${icon}`} />
          <CiUser className={`${icon}`} />
          <div></div>
        </div>
      </div>
    </div>
  );
};
