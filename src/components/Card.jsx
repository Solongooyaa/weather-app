"use client";
import { useState, useEffect } from "react";

export const Card = ({ value, cityName, temperature, condition }) => {
  const nightCardColor =
    " bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white shadow-[#1F2937] ";

  const color = value === "night" ? nightCardColor : "bg-white";

  return (
    <div className={`w-[45%] h-[828px] ${color} rounded-[2.25rem] mx-4 mt-32`}>
      <div className="flex justify-around items-center">
        <div>
          <h3>September 10,2021</h3>
          <h1 className="text-3xl text-[#111827] mt-2">{cityName}</h1>
        </div>

        <img className="mt-6" src="../locIcon.png" alt="Location Icon" />
      </div>

      <div className="flex justify-center items-center mt-10">
        <img className="w-[16rem] h-[16rem]" src="../Sun.png" alt="Sun Icon" />
      </div>
      <div className="ml-[1rem]">
        <div className="text-[10rem] font-bold ">{temperature}</div>
        <div className="text-2xl text-[#FF8E27]">{condition}</div>
      </div>
      <div className="w-[19rem] h-[2rem] flex justify-around mt-[5rem]">
        <img src="../Home.png" alt="Home Icon" />
        <img src="../Pin.png" alt="Pin Icon" />
        <img src="../Heart.png" alt="Heart Icon" />
        <img src="../User.png" alt="User Icon" />
      </div>
    </div>
  );
};
