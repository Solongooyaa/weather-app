"use client";
import { SearchIcon } from "@/components/SearchIcon";
import { Card } from "@/components/Card";
import { SearchInput } from "@/components/SearchInput";
import { useEffect, useState } from "react";

const API_KEY = "8bb5d80fbbe34d2e91672459241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const [dayWeather, setDayWeather] = useState({
    temperature: "",
    condition: "",
  });
  const [nightWeather, setNightWeather] = useState({
    temperature: "",
    condition: "",
  });

  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  console.log(city);
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayWeather({
          temperature: data.forecast.forecastday[0].day.maxtemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
        });
      });
  }, [city]);

  return (
    <div className="w-full h-screen flex ">
      <div className="w-[50%] h-full bg-[#F3F4F6] flex flex-col-reverse justify-center  items-center rounded-tl-[2.5rem] rounded-bl-[2.5rem] p-8">
        <Card
          value="day"
          temperature={dayWeather.temperature}
          condition={dayWeather.condition}
          cityName={city}
        />
        <SearchInput
          search={search}
          setSearch={onChangeText}
          onPressEnter={onPressEnter}
        />
      </div>

      <div className="w-[50%] h-full bg-[#0F141E] rounded-tr-[2.5rem] rounded-br-[2.5rem] p-8 flex flex-col-reverse justify-center items-center ">
        <Card
          value="night"
          temperature={nightWeather.temperature}
          condition={nightWeather.condition}
          cityName={city}
        />
      </div>
    </div>
  );
}
