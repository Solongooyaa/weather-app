"use client";
import { SearchIcon } from "@/components/SearchIcon";
import { Card } from "@/components/Card";
import { SearchInput } from "@/components/SearchInput";
import { useState } from "react";

const API_KEY = "8bb5d80fbbe34d2e91672459241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const onChangeText = () => {
    setSearch(e.target.value);
  };
  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };

  return (
    <div className="w-full h-screen flex ">
      <div className="w-[50%] h-full bg-[#F3F4F6] flex flex-col-reverse justify-center  items-center rounded-tl-[2.5rem] rounded-bl-[2.5rem] p-8">
        <Card value="day" temperature={0} condition={"Sunny"} />
        <SearchInput search={search} setSearch={setSearch} />
      </div>

      <div className="w-[50%] h-full bg-[#0F141E] rounded-tr-[2.5rem] rounded-br-[2.5rem] p-8 flex flex-col-reverse justify-center items-center ">
        <Card value="night" temperature={0} condition={""} />
      </div>
    </div>
  );
}
