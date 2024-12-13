// "use client";
// import { useState } from "react";
// import { IoLocationOutline } from "react-icons/io5";
// export const Card = ({ value }) => {
//   const [data, setData] = useState("");

//   const nightCardColor =
//     " bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white shadow-[#1F2937]";

//   const color = value == "night" ? nightCardColor : "bg-[F9FAFB]";
//   return (
//     <div className="w-[55%] h-[828px] bg-[#ffffff] rounded-[2.25rem] ml-32 mt-32">
//       <div className="flex justify-around items-center">
//         <h1 className="text-3xl text-[#111827] mt-6">Ulaanbaatar</h1>
//         <img className="mt-6" src="../locIcon.png" />
//       </div>

//       <div className="flex justify-center items-center mt-10">
//         <img
//           className="w-[16rem] h-[16rem]"
//           src="../Sun.png"
//           type="text"
//           alt="Sun Icon"
//         />
//       </div>
//       <div>
//         <div className="text-[10rem] font-bold">26°</div>
//         <div className="text-2xl text-[#FF8E27]">Bright</div>
//       </div>
//       <div className=" w-[19rem] h-[2rem] flex justify-around">
//         <img src="../Home.png" />
//         <img src="../Pin.png" />
//         <img src="../Heart.png" />
//         <img src="../User.png" />
//       </div>
//     </div>
//   );
// };
"use client";
import { useState } from "react";

export const Card = ({ value }) => {
  const nightCardColor =
    " bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white shadow-[#1F2937]";

  const color = value === "night" ? nightCardColor : "bg-[F9FAFB]";

  return (
    <div className={`w-[45%] h-[828px] ${color} rounded-[2.25rem] mx-4 mt-32`}>
      <div className="flex justify-around items-center">
        <h1 className="text-3xl text-[#111827] mt-6">Ulaanbaatar</h1>
        <img className="mt-6" src="../locIcon.png" alt="Location Icon" />
      </div>

      <div className="flex justify-center items-center mt-10">
        <img className="w-[16rem] h-[16rem]" src="../Sun.png" alt="Sun Icon" />
      </div>
      <div className="ml-[1rem]">
        <div className="text-[10rem] font-bold ">26°</div>
        <div className="text-2xl text-[#FF8E27]">Bright</div>
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
